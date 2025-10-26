import React, { useMemo } from "react";
import {
  Pane,
  FileUploader,
  Alert,
  FileCard,
  majorScale,
  FileRejectionReason,
  rebaseFiles,
  MimeType,
  FileRejection,
} from "evergreen-ui";

interface MusicFileUploaderProps {
  setValidFiles: (files: File[]) => void;
  setInvalidFiles: (files: FileRejection[]) => void;
}

export default function MusicFileUploader({
  setValidFiles,
  setInvalidFiles,
}: MusicFileUploaderProps) {
  const acceptedMimeTypes: MimeType[] = useMemo(() => {
    return [
      "audio/ogg" as MimeType,
      "application/ogg" as MimeType,
      "video/ogg" as MimeType,
    ]; // .ogg files only
  }, []);
  const maxFiles = 100;
  const maxSizeInBytes = 100 * 1024 ** 2; // 100 MB
  const [files, setFiles] = React.useState<File[]>([]);
  const [fileRejections, setFileRejections] = React.useState<FileRejection[]>(
    []
  );
  const [values, setValues] = React.useState(
    React.useMemo(
      () => [
        ...files,
        ...fileRejections.map((fileRejection) => fileRejection.file),
      ],
      [files, fileRejections]
    )
  );

  const handleRemove = React.useCallback(
    (file: File) => {
      const updatedFiles = files.filter(
        (existingFile) => existingFile !== file
      );
      const updatedFileRejections = fileRejections.filter(
        (fileRejection) => fileRejection.file !== file
      );

      // Call rebaseFiles to ensure accepted + rejected files are in sync (some might have previously been
      // rejected for being over the file count limit, but might be under the limit now!)
      const { accepted, rejected } = rebaseFiles(
        [
          ...updatedFiles,
          ...updatedFileRejections.map((fileRejection) => fileRejection.file),
        ],
        { acceptedMimeTypes, maxFiles, maxSizeInBytes }
      );

      setFiles(accepted);
      setFileRejections(rejected);
      setValidFiles(accepted);
      setInvalidFiles(rejected);
      updateFileList(accepted, rejected);
    },
    [
      acceptedMimeTypes,
      files,
      fileRejections,
      maxFiles,
      maxSizeInBytes,
      setInvalidFiles,
      setValidFiles,
    ]
  );

  const fileCountOverLimit = files.length + fileRejections.length - maxFiles;
  const fileCountError = `You can upload up to ${maxFiles} files. Please remove ${fileCountOverLimit} ${
    fileCountOverLimit === 1 ? "file" : "files"
  }.`;

  function addFile(fs: File[]) {
    const f = files;
    fs.forEach((originalFile) => {
      // replace spaces with underscores in the file name
      const filename = originalFile.name.split(" ").join("_");
      const file = new File([originalFile], filename, {
        type: originalFile.type,
      });

      // check for duplicates or bad filenames and route to file rejections
      if (f.find((v) => v.name === file.name)) {
        const message =
          "You have already used this file name. File names must be unique.";
        addFileRejection([
          { file, message, reason: FileRejectionReason.Unknown },
        ]);
      } else if (file.name.split(".").length > 2) {
        const message = "Your file name cannot contain more than one period.";
        addFileRejection([
          { file, message, reason: FileRejectionReason.Unknown },
        ]);
      } else {
        f.push(file);
        setFiles(f);
        setValidFiles(f);
        updateFileList(f, fileRejections);
      }
    });
  }

  function addFileRejection(fs: FileRejection[]) {
    const f = fileRejections;
    fs.forEach((file) => f.push(file));
    setFileRejections(f);
    setInvalidFiles(f);
    updateFileList(files, f);
  }

  function renderFile(file: File, index: number) {
    const { name, size, type } = file;
    const renderFileCountError = index === 0 && fileCountOverLimit > 0;

    // We're displaying an <Alert /> component to aggregate files rejected for being over the maxFiles limit,
    // so don't show those errors individually on each <FileCard />
    const fileRejection = fileRejections.find(
      (fileRejection) =>
        fileRejection.file === file &&
        fileRejection.reason !== FileRejectionReason.OverFileLimit
    );
    const { message } = fileRejection || {};

    return (
      <React.Fragment key={`${name}-${index}`}>
        {renderFileCountError && (
          <Alert
            intent="danger"
            marginBottom={majorScale(2)}
            title={fileCountError}
          />
        )}
        <FileCard
          isInvalid={fileRejection != null}
          name={name}
          onRemove={() => handleRemove(file)}
          sizeInBytes={size}
          type={type}
          validationMessage={message}
        />
      </React.Fragment>
    );
  }

  function updateFileList(accepted: File[], rejected: FileRejection[]) {
    setValues([
      ...accepted,
      ...rejected.map((fileRejection) => fileRejection.file),
    ]);
  }

  return (
    <Pane maxWidth={654}>
      <FileUploader
        acceptedMimeTypes={acceptedMimeTypes}
        label=""
        description={`You can upload up to ${maxFiles} .ogg music files.`}
        disabled={files.length + fileRejections.length >= maxFiles}
        maxSizeInBytes={maxSizeInBytes}
        maxFiles={maxFiles}
        onAccepted={addFile}
        onRejected={addFileRejection}
        renderFile={(file, index) => {
          return renderFile(file, index);
        }}
        values={values}
      />
    </Pane>
  );
}

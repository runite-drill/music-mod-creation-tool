import React from 'react'
import { Pane, FileUploader, Alert, FileCard, majorScale, FileRejectionReason, rebaseFiles } from 'evergreen-ui'

export default function MusicFileUploader() {
  const acceptedMimeTypes = ["audio/ogg"] // .ogg files only
  const maxFiles = 100
  const maxSizeInBytes = 200 * 1024 ** 2 // 200 MB
  const [files, setFiles] = React.useState([])
  const [fileRejections, setFileRejections] = React.useState([])
  const values = React.useMemo(() => [...files, ...fileRejections.map((fileRejection) => fileRejection.file)], [
    files,
    fileRejections,
  ])
  const handleRemove = React.useCallback(
    (file) => {
      const updatedFiles = files.filter((existingFile) => existingFile !== file)
      const updatedFileRejections = fileRejections.filter((fileRejection) => fileRejection.file !== file)

      // Call rebaseFiles to ensure accepted + rejected files are in sync (some might have previously been
      // rejected for being over the file count limit, but might be under the limit now!)
      const { accepted, rejected } = rebaseFiles(
        [...updatedFiles, ...updatedFileRejections.map((fileRejection) => fileRejection.file)],
        { acceptedMimeTypes, maxFiles, maxSizeInBytes }
      )

      setFiles(accepted)
      setFileRejections(rejected)
    },
    [acceptedMimeTypes, files, fileRejections, maxFiles, maxSizeInBytes]
  )

  const fileCountOverLimit = files.length + fileRejections.length - maxFiles
  const fileCountError = `You can upload up to ${maxFiles} files. Please remove ${fileCountOverLimit} ${
    fileCountOverLimit === 1 ? 'file' : 'files'
  }.`

  return (
    <Pane maxWidth={654}>
      <FileUploader
        acceptedMimeTypes={acceptedMimeTypes}
        label=""
        description={`You can upload up to ${maxFiles} .ogg music files.`}
        disabled={files.length + fileRejections.length >= maxFiles}
        maxSizeInBytes={maxSizeInBytes}
        maxFiles={maxFiles}
        onAccepted={setFiles}
        onRejected={setFileRejections}
        renderFile={(file, index) => {
          const { name, size, type } = file
          const renderFileCountError = index === 0 && fileCountOverLimit > 0

          // We're displaying an <Alert /> component to aggregate files rejected for being over the maxFiles limit,
          // so don't show those errors individually on each <FileCard />
          const fileRejection = fileRejections.find(
            (fileRejection) => fileRejection.file === file && fileRejection.reason !== FileRejectionReason.OverFileLimit
          )
          const { message } = fileRejection || {}

          return (
            <React.Fragment key={`${file.name}-${index}`}>
              {renderFileCountError && <Alert intent="danger" marginBottom={majorScale(2)} title={fileCountError} />}
              <FileCard
                isInvalid={fileRejection != null}
                name={name}
                onRemove={() => handleRemove(file)}
                sizeInBytes={size}
                type={type}
                validationMessage={message}
              />
            </React.Fragment>
          )
        }}
        values={values}
      />
    </Pane>
  )
}

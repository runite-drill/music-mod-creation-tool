import React from "react";
import {
  Pane,
  Card,
  Button,
  Heading,
  Icon,
  Tooltip,
  CaretUpIcon,
  CaretDownIcon,
  IconComponent,
} from "evergreen-ui";

interface HideableCardProps {
  title: string;
  icon?: IconComponent;
  content: React.ReactNode;
  heading?: React.ReactNode;
}

export default function HideableCard({
  title,
  icon,
  content,
  heading,
}: HideableCardProps) {
  const [isCardHidden, setIsCardHidden] = React.useState(false);

  const minimiseBtn = (
    // @ts-ignore
    <Tooltip
      content={
        isCardHidden
          ? `Show ${title.toLowerCase()}`
          : `Hide ${title.toLowerCase()}`
      }
    >
      <Button
        appearance="minimal"
        onClick={() => {
          setIsCardHidden(!isCardHidden);
        }}
      >
        <Pane display="flex" flexDirection="column" alignItems="center">
          {/* @ts-ignore */}
          <Icon icon={isCardHidden ? CaretDownIcon : CaretUpIcon}></Icon>
        </Pane>
      </Button>
    </Tooltip>
  );

  return (
    <Pane display="flex" flexDirection="column">
      {heading ?? (
        <Pane display="flex" alignItems="center">
          <Heading>{title}</Heading>
          {/* @ts-ignore */}
          {!!icon && <Icon icon={icon} marginLeft={8} />}
        </Pane>
      )}
      <Card height={8} />
      {!isCardHidden ? content : null}
      <Card height={16} />
      <Card height={1} border="default" />
      <Card height={8} />
      {minimiseBtn}
    </Pane>
  );
}

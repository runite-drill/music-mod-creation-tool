import React from "react";
import { Text, Link, Small, Card, Heading } from "evergreen-ui";

export default function Footer() {
  return (
    <Card textAlign="center" backgroundColor="white" padding={8}>
      <Heading size={400}>
        Music Mod Creation Tool{" "}
        <Text color="muted">
          created by{" "}
          <Link
            size={300}
            color="neutral"
            href="https://www.utopiamusic.net/utopia"
          >
            Utopia Music
          </Link>
        </Text>
      </Heading>
      <Card height={4} />
      <Text color="muted">Original video game music on</Text>
      <Card height={0} />
      <Text color="muted">
        <Link
          size={300}
          color="neutral"
          href="https://open.spotify.com/artist/0mfgyFocLTW5Piqx811ZUv"
        >
          Spotify
        </Link>
        <Small> | </Small>
        <Link
          size={300}
          color="neutral"
          href="https://www.youtube.com/c/utopiamusic"
        >
          Youtube
        </Link>
        <Small> | </Small>
        <Link
          size={300}
          color="neutral"
          href="https://steamcommunity.com/id/runite_drill/myworkshopfiles/"
        >
          Steam
        </Link>
        <Small> | </Small>
        <Link
          size={300}
          color="neutral"
          href="https://utopiamusicnz.bandcamp.com"
        >
          Bandcamp
        </Link>
        <Small> | </Small>
        <Link size={300} color="neutral" href="https://discord.gg/SdQhfBM">
          Discord
        </Link>
      </Text>
      <Card height={16} />

      <Text color="muted">
        <Small>
          <Link href="https://www.buymeacoffee.com/utopia" size={300}>
            Support this tool
          </Link>
          .
        </Small>
      </Text>
    </Card>
  );
}

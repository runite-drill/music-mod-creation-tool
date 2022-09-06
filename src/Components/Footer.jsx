import React from 'react'
import { Text, Link, Small, Card, Heading } from 'evergreen-ui'

export default function Footer() {
  return (
    <Card textAlign="center">
      <Heading size={400}>Music Mod Creation Tool <Text color="muted">created by Utopia Music</Text></Heading>
      <Text color="muted">Original video game music at</Text>
      <Card height={0} />
      <Text color="muted">
        <Link size={300} color="neutral" href="https://open.spotify.com/artist/0mfgyFocLTW5Piqx811ZUv">Spotify</Link><Small> | </Small>
        <Link size={300} color="neutral" href="https://www.youtube.com/c/utopiamusic">Youtube</Link><Small> | </Small>
        <Link size={300} color="neutral" href="https://steamcommunity.com/id/runite_drill/myworkshopfiles/">Steam</Link><Small> | </Small>
        <Link size={300} color="neutral" href="https://utopiamusicnz.bandcamp.com">Bandcamp</Link><Small> | </Small>
        <Link size={300} color="neutral" href="https://discord.gg/SdQhfBM">Discord</Link>
      </Text>
      <Card height={16} />

      <Text color="muted">
        <Small><Link href="https://www.buymeacoffee.com/utopia" size={300}>Support this tool</Link>.</Small>
      </Text>
    </Card>
  )
}

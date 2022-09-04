import React from 'react'
import { Text, Link, Small, Card, Heading } from 'evergreen-ui'

export default function Footer() {
  return (
    <Card textAlign="center">
      <Heading size={400}>Music Mod Creation Tool <Text color="muted">created by Utopia Music</Text></Heading>
      <Text color="muted">Spotify | Youtube | Steam | Bandcamp | Discord</Text>
      <Card height={16} />

      <Text color="muted">
        <Small><Link href="https://www.buymeacoffee.com/utopia">Support this tool</Link>.</Small>
      </Text>
    </Card>
  )
}

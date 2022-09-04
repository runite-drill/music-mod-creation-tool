import React from 'react'
import { Text, Link, Small, Card, Heading } from 'evergreen-ui'

export default function Title() {
  return (
    <Card textAlign="center">
      <Heading size={800}>Music Mod Creation Tool</Heading>
      <Text color="muted">For Paradox Interactive Games</Text>
      <Card height={16} />
      <Text color="muted">
        <Small>Brought to you by <Link href="http://www.utopiamusic.net/utopia">Utopia</Link>.</Small>
      </Text>
    </Card>
  )
}

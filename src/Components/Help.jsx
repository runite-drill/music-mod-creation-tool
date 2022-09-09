import React from 'react'
import { Pane, Card, Text, Small, Strong, Link, PredictiveAnalysisIcon } from 'evergreen-ui'
import { FAQ } from '../data/faq';
import HideableCard from './HideableCard';

export default function Help() {
  const sz = 300;

  const faq = FAQ.map((v, i) => {
    return (
      <Card key={`${v.q}-${i}`}>
        <Card height={8} />
        <Text size={sz}><Strong size={sz}>{v.q}</Strong></Text>
        <Card height={0} />
        <Text size={sz}>{v.a}</Text>
      </Card>
    )
  })

  const content = (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <Pane>
        {faq}
        <Card height={8} />
        {/* <Text size={sz}><Strong size={sz}>Why doesn't my Cities: Skylines music mod work?</Strong></Text>
        <Card height={0} />
        <Text size={sz}>Cities: Skylines music mods are build ontop of the CSL mod framework. You will need to subscribe to the <Link size={300} href="https://steamcommunity.com/workshop/filedetails/?id=2474585115">CSL mod on Steam </Link> for your music mod to work.</Text>
        <Card height={8} /> */}
        <Text size={sz}><Strong size={sz}>Where can I learn more about music modding?</Strong></Text>
        <Card height={0} />
        <Text size={sz}>Try Paradox Wikis - there's a great <Link size={300} href="https://eu4.paradoxwikis.com/Music_modding">article</Link> for EU4 already. Or, watch this <Link size={300} href="https://youtu.be/8EyiQtmnrHI">Youtube tutorial</Link>.</Text>
      </Pane>

      <Card height={16} />
      <Text>
        <Small>Need help? <Link size={300} href="http://www.utopiamusic.net/contact">Contact Utopia</Link>.</Small>
      </Text>
    </Pane>
  )

  return (
    <Card width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16} paddingBottom={8} backgroundColor="white">
      <HideableCard title="Frequently asked questions" icon={PredictiveAnalysisIcon} content={content} />
    </Card>
  )
}
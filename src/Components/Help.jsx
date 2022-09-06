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
      </Pane>
      <Card height={16} />
      <Text>
        <Small>Need help? <Link href="http://www.utopiamusic.net/contact" size={300}>Contact Utopia</Link>.</Small>
      </Text>
    </Pane>
  )

  return (
    <Pane width={560} display="flex" flexDirection="column" justifyContent="center" border="default" elevation={1} padding={16} paddingBottom={8}>
      <HideableCard title="Frequently asked questions" icon={PredictiveAnalysisIcon} content={content} />
    </Pane>
      
  )
}

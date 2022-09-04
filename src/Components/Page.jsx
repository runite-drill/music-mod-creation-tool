import React from 'react'
import { ArrowDownIcon, InfoSignIcon, Button, Pane, Icon, Card } from 'evergreen-ui'
import About from './About'
import Title from './Title'
import Instructions from './Instructions'
import ModInput from './ModInput'
import Footer from './Footer'

export default function Page() {
  return (
    <Pane display="flex" alignItems="center" justifyContent="center">
      <Pane>
        <Card height={32} />
        <Title />
        <Card height={32} />
        <ModInput />
        <Card height={32} />
        <Pane display="flex" justifyContent="space-evenly">
          <Button appearance="primary"><Icon icon={ArrowDownIcon} marginRight={8}/>Lets ... go!</Button>
          <Button><Icon icon={InfoSignIcon} marginRight={8}/> Tell me more</Button>
        </Pane>
        <Card height={32} />
        <Instructions />
        <Card height={32} />
        <About />
        <Card height={32} />
        <Footer />
        <Card height={16} />
      </Pane>
    </Pane>
  )
}

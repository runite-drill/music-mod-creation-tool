import React from 'react'
import { ArrowUpIcon, InfoSignIcon, RocketSlantIcon, PredictiveAnalysisIcon, Avatar, Button, Text, Pane, Icon, Card, toaster } from 'evergreen-ui'
import About from './About'
import Title from './Title'
import Instructions from './Instructions'
import ModInput from './ModInput'
import Footer from './Footer'
import Help from './Help'

export default function Page() {
  const [isShowingDetails, setIsShowingDetails] = React.useState(false)

  function handleGoButton() {
    isShowingDetails ? (
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    ) : (
      toaster.warning('', {description: letsGo})
    )
  }

  const letsGo = (
    <Avatar
      src="https://cdn3.emoji.gg/emojis/6347-letsgo.gif"
      name="Lets f__ing go!!!"
      size={40}
    />
  )
  return (
    <Pane display="flex" alignItems="center" justifyContent="center">
      <Pane>
        <Card height={16} />
        <Title />
        <Card height={32} />
        <ModInput />
        <Card height={32} />
        {isShowingDetails ? (
          <Pane>
            <Instructions />
            <Card height={32} />
            <About />
            <Card height={32} />
            <Help />
            <Card height={32} />
          </Pane>
          ) : null}
        <Pane display="flex" justifyContent="space-evenly">
          <Button appearance="primary" onClick={()=>handleGoButton()}>
            <Icon icon={isShowingDetails ? ArrowUpIcon : RocketSlantIcon} marginRight={8}/>
            Lets ... go!
          </Button>
          <Button onClick={()=>setIsShowingDetails(!isShowingDetails)}>
            <Icon icon={isShowingDetails ? PredictiveAnalysisIcon : InfoSignIcon} marginRight={8}/>
            {isShowingDetails ? <Text>Got it!</Text> : <Text>Tell me more</Text> }
          </Button>
        </Pane>
        <Card height={32} />
        <Footer />
        <Card height={16} />
      </Pane>
    </Pane>
  )
}

import React from 'react'
import { 
  Avatar, 
  Button, 
  Card, 
  Icon, 
  Pane, 
  Text, 
  toaster, 
  ArrowUpIcon, 
  InfoSignIcon,  
  LearningIcon, 
  RocketSlantIcon,
} from 'evergreen-ui'
import Title from './Title'
import ModInput from './ModInput'
import Instructions from './Instructions'
import About from './About'
import Help from './Help'
import Footer from './Footer'

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
    <Pane 
      height={!isShowingDetails ? "100vh" : null}
      display="flex" 
      alignItems="stretch" 
      justifyContent="center" 
      backgroundImage="url(/wallpaper.png)" 
      backgroundSize="fill" 
      backgroundPosition="center"
      backgroundRepeat="repeat-y"
    >
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
            <Icon icon={isShowingDetails ? LearningIcon : InfoSignIcon} marginRight={8}/>
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

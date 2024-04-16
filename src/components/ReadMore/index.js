import {useState} from 'react'

import {
  BgContainer,
  Heading,
  ParaEl,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [desc, setDesc] = useState(false)
  const onChangeText = () => {
    setDesc(prevStatus => !prevStatus)
  }
  const {reactHooksDescription} = props
  const firstTxt = reactHooksDescription.slice(0, 171)

  return (
    <BgContainer>
      <Heading>React Hooks</Heading>
      <ParaEl>Hooks are a new addition to React</ParaEl>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks
"
      />
      <Description>{desc ? reactHooksDescription : firstTxt}</Description>
      <Button onClick={onChangeText}>{desc ? 'Read Less' : 'Read More'}</Button>
    </BgContainer>
  )
}

export default ReadMore

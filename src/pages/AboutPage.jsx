import { useState } from 'react'
import {
  ButtonEx1,
  ButtonEx2,
  ButtonEx3,
  ButtonsContainer,
  LinkButton,
  NavBarButtons,
  Title,
  Wrapper,
} from '../components/styles/Buttons.styles'

const CardButton = () => {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    setAdded((prev) => !prev)
  }

  return (
    <ButtonEx3
      onClick={handleClick}
      $active={added}
    >
      {added ? 'Added' : 'Add'}
    </ButtonEx3>
  )
}

function AboutPage() {
  return (
    <div>
      AboutPage
      <Wrapper>
        <CardButton></CardButton>
        <NavBarButtons>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </NavBarButtons>
        <ButtonEx2>Click me</ButtonEx2>
        <ButtonsContainer>
          <h2>Buttons Container</h2>
        </ButtonsContainer>
        <LinkButton href="https://www.google.com">Google</LinkButton>
        <ButtonEx1>Click me</ButtonEx1>
        <Title>Hello World!</Title>
      </Wrapper>
    </div>
  )
}

export default AboutPage

import styled from 'styled-components'

export const ButtonEx3 = styled.button`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
  background-color: ${(props) => (props.$active ? 'lightblue' : 'orange')};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const NavBarButtons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

export const ButtonEx2 = styled.button`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
  background-color: Aquamarine;

  &:hover {
    background-color: DarkSeaGreen;
  }

  &:focus {
    outline: none;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: LightGreen;
  padding: 20px;
  border-radius: 8px;

  h2 {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
    margin-top: 8px;
    color: #fff;
  }
`

export const LinkButton = styled.a`
  padding: 10px;
  border: 2px solid red;
  border-radius: 4px;
  background-color: LightSalmon;
`

export const ButtonEx1 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`
// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4em;
  background: papayawhip;
`

import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: grey;
  height: 50px;
  width: 100%;
  position: relative;
  footer {
    margin: 0 auto;
    padding: 8px;
    color: white;
    font-size: 22px;
    font-weight: 700;
  }
`
export default function Footer() {

  return (
    <FooterContainer>
      <footer>FOOTER</footer>
    </FooterContainer>
  )
}

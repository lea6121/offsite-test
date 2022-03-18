import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: grey;
  height: 56px;
  width: 100%;
  position: relative;
  footer {
    margin: 0 auto;
    padding: 10px;
    color: white;
    font-size: 24px;
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

import React from 'react'
import styled from 'styled-components'
const Container = styled.p`

`
const ProgressLabel = styled.span`
  font-size: 13px;
  font-weight: 800;
`
const ProgressContainer = styled.div`
  position: relative;
  display: inline;
  span {
    position: absolute;
    right: 6px;
  }
`
export default function Progress({ label }) {
  return (
    <div>
      <Container>
        <ProgressContainer>
          <ProgressLabel>{label}%</ProgressLabel>
          <progress max="100" value={label}></progress>
        </ProgressContainer>
      </Container>
    </div>
  )


}

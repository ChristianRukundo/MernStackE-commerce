import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content:  center;
    height: 40px;
    color: white;
`
const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over 500 
    </Container>
  )
}

export default Announcement

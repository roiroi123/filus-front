import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
font-family: 'Karantina', cursive;
letter-spacing:2px ;
height: 40px;
background-color: rgb(255,22,22);
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 35px;
`
const Announcment = () => {
    return (
        <Container >
            {/* Super Deal! Free Shipping on Orders Over 50$ */}
            דיל מטורף ! משלוח חינם בהזמנה מעל 100₪
        </Container>
    )
}

export default Announcment

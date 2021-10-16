import React from 'react'
import styled from 'styled-components'

const Description = () => {
    return (
        <Container>
            <Logo src='images/logo.png' alt='logo' />
            <BoldText>Customize your furniture like never before.</BoldText>
            <Text>
                Select from 100s of styles created by{' '}
                <HighlightText>Award Winning</HighlightText> artists.
            </Text>
        </Container>
    )
}

export default Description

const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 140px);
`

const Logo = styled.img`
    width: 300px;
`

const BoldText = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 80px;
    color: #e76f51;
`

const Text = styled.p`
    color: #264653;
    font-size: 20px;
`

const HighlightText = styled.span`
    background: #e9c46a;
`

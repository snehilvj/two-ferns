import React from 'react'
import styled from 'styled-components'
import ModelContainer from './ModelContainer'
import Description from './Description'
// import Gallery from './Gallery'

const Home = () => {
    return (
        <Container>
            <Description />
            <ModelContainer />
        </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    padding: 70px;
`

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: #daa3a3ed;
`

const Wrapper = styled.div`
    padding: 10px 20px; // Change it according to the Logo size
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// Left

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Logo = styled.h1`

`

// Center

const Center = styled.div`
    flex: 1;
    text-align: center;
`

// Right

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>ISRHOTEL</Logo> {/* Will change to a real Logo */}
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
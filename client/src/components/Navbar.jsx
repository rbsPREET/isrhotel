import React from 'react'
import {
    Container,
    Wrapper,
    Left,
    Logo,
    Center,
    Right
} from '../css/styled-components'

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
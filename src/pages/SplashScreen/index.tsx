import { Container, Logo, Indicator } from "./styled"


import logoMark from '../../Image/Logo.png'


export const SpashScreen = () => {
    return (
        <Container>
            <Logo source={logoMark} />
            <Indicator size={"large"} color="#4EA8DE" />
        </Container>
    )
}
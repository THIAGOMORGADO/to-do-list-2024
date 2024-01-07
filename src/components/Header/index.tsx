import { Container, LogoMark } from "./styled"

import Logo from '../../Image/Logo.png'


export const Header = () => {
    return (
        <Container>
            <LogoMark source={Logo} />
        </Container>
    )
}
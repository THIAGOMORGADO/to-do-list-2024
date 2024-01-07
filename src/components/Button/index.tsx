import { Text } from "react-native"
import { Container, AddIcon } from "./styled"


type ButtonProps = {
    icon: string
}

export const Button: React.FC<ButtonProps> = ({ icon, ...rest }: ButtonProps) => {
    return (
        <Container>
            <AddIcon name={icon} {...rest} />
        </Container>
    )
}
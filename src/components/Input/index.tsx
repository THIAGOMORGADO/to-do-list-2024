import { Container, Inputs, InputArea } from './styled'


type InputProps = {
    placeholder: string
}

export const Input = ({ placeholder, ...rest }: InputProps) => {
    return (
        <Container>
            <InputArea>
                <Inputs placeholder={placeholder} {...rest} />
            </InputArea>
            
        </Container>
    )
}
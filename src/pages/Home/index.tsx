import { Text, View } from "react-native"

import { Container, TaskAddArea } from './styled';
import { Header } from "../../components/Header";
import { Inputs } from "../../components/Input/styled";
import { Button } from "../../components/Button"

export const Home = () => {
    return (
        <Container>
            <Header />


            <TaskAddArea>
                <Inputs
                    placeholder="Digite sua tarefa"
                />
                <Button name="plus" onPress={() => alert("to aqui")} />
            </TaskAddArea>

        </Container>
    )
}
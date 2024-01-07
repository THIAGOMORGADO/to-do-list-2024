import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons"

export const Container = styled.TouchableOpacity`
  background-color: #1E6F9F;
  width: 52px;
  height: 52px;
  margin-left: 13px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;
export const AddIcon = styled(Feather)`
    font-size: 20px;
    color: #fff

`
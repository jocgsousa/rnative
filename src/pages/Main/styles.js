import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#7159c1',
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    background-color: #7159c1;
    margin-left: 10px;
    border-radius: 4px;
    width: 50px;
    height: 40px;
`;

export const Loading = styled.ProgressBarAndroid`
    color: #ffff;
    width: 30px;
    position: absolute;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eeee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #7159c1;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #ffff;
    text-transform: uppercase;
`;

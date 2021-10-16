import styled from 'styled-components';
import { colors } from '../themes/colors';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 30px;
    color: ${colors.main_white};
`;
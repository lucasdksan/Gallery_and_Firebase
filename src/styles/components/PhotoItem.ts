import styled from 'styled-components';
import { colors } from '../themes/colors';

export const Container = styled.div`
    background-color: ${colors.main_sub_gray};
    border-radius: 10px;
    padding: 10px;

    img{
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

import styled from 'styled-components';
import { colors } from '../themes/colors';

export const Container = styled.div`
    background-color: ${colors.main_sub_black};
    color: ${colors.main_white};
    min-height: 100vh;
`;
export const Area = styled.main`
    margin: auto;
    max-width: 980px;
    padding: 30px 0px;
`;
export const ScreenWarning = styled.div`
    text-align: center;
    .emoji{
        font-size: 50px;
        margin-bottom: 50px;
    }
`;
export const PhotoList = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;
export const UploadImage = styled.form`
    background-color: ${colors.main_sub_gray};
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    input:first-child{
        margin-right: 50px;
    }
    input[type=submit]{
        background-color: ${colors.main_sub_blue};
        border: 0;
        color: ${colors.main_white};
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0;
        margin-right: 20px;
        cursor: pointer;
        &:hover{
            opacity: 0.9;
        }
    }
`;
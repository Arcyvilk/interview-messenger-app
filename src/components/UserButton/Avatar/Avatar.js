import styled from 'styled-components';
import { defaultTheme } from '../../../shared/theme';

const Avatar = styled.div`
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 10px;
    border: 2px solid ${defaultTheme.secondary};
    border-radius: 50px;
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

export default Avatar;
import styled from 'styled-components';
import { defaultTheme } from '../../shared/theme';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: ${ defaultTheme.primary };
  color: ${ defaultTheme.secondary };
`;

export default Header;
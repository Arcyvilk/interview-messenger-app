import styled from 'styled-components';
import { defaultTheme } from '../../shared/theme';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  background-color: ${ defaultTheme.primary };
  color: ${ defaultTheme.secondary };
`;

export default Sidebar;
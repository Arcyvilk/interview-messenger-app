import styled from 'styled-components';
import { defaultTheme } from '../../shared/theme';

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${ defaultTheme.secondary };
  color: ${ defaultTheme.primary };
`;

export default Content;
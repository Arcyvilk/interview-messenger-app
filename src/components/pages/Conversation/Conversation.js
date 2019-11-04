import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../../shared/theme';

const StyledConversation = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${ defaultTheme.tertiary };
  color: ${ defaultTheme.primary };
`;

const Conversation = () => 
    <StyledConversation>
        DUPAUPDUPAUP
    </StyledConversation>

export default Conversation;
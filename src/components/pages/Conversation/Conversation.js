import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../../shared/theme';

const StyledConversation = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: ${ defaultTheme.tertiary };
    color: ${ defaultTheme.primary };
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
`;

const Submit = styled.button`
    width: 100px;
    height: 100%;
`;
class Conversation extends React.Component { 
    static InputArea = InputArea;
    static Input = Input;
    static Submit = Submit;
    static Content = Content;
    render() {
        return(
            <StyledConversation>
                <Conversation.Content />
                <Conversation.InputArea>
                    <Conversation.Input />
                    <Conversation.Submit>Send</Conversation.Submit>
                </Conversation.InputArea>
            </StyledConversation>
        )
    }
}

export default Conversation;
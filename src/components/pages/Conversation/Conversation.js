import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
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
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    min-height: 50px;
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
    
    constructor() {
        super();
        this.state = { 
            message: null
        };
    }

    changeInputValue = (event) => {
        this.setState({ message: event.target.value })
    }

    sendMessage = () => {
        this.props.activeConversation.connection.send(this.state.message);
    }

    showConversation = () => 
        this.props.activeConversation.messages.map((msg, index) => {
            return <Message key={`msg-${index}`}>
                <Message.Username>{msg.from ? msg.from : 'unknown'}</Message.Username>
                <Message.Timestamp> ({msg.timestamp ? new Date(msg.timestamp).toLocaleString() : '?'}): </Message.Timestamp>
                <Message.Content>{msg.content ? msg.content : null}</Message.Content>
            </Message>
        })

    render() {
        return(
            <StyledConversation>
                <Conversation.Content>{ this.showConversation() }</Conversation.Content>
                <Conversation.InputArea>
                    <Conversation.Input onBlur={ this.changeInputValue }/>
                    <Conversation.Submit onClick={ this.sendMessage } >Send</Conversation.Submit>
                </Conversation.InputArea>
            </StyledConversation>
        )
    }
}

const mapStateToProps = state => ({ 
    activeConversation: { ...state.activeConversation }
});

export default connect(
    mapStateToProps
)(Conversation);
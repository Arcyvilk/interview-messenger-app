import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../../../shared/theme';

const StyledMessage = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 5px 10px;
`;
const Username = styled.span`
    font-weight: bold;
    color: ${ defaultTheme.black };
`;
const Timestamp = styled.span`
    color: ${ defaultTheme.grey };
    font-style: italic;
`;
const Content = styled.span`
    color: ${ defaultTheme.black };
`;

class Message extends React.Component { 
    static Username = Username;
    static Timestamp = Timestamp;
    static Content = Content;
    render() {
        return(
            <StyledMessage>{ this.props.children }</StyledMessage>
        )
    }
}

export default Message;
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Avatar from './Avatar';
import Nickname from './Nickname';
import { openConnections, activeConversation } from '../../shared/store/modules';
import { defaultTheme } from '../../shared/theme';
import Connection from '../../shared/rtc';

const StyledUserButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  width: 100%;
  height: 90px;
  padding: 10px;
  box-sizing: border-box;

  &:hover {
    background-color: ${defaultTheme.tertiary};
    color: ${defaultTheme.primary};
    cursor: pointer;
  }
`;

export class UserButton extends React.Component {
    static Avatar = Avatar;
    static Nickname = Nickname;

    showConversation = () => {
        if (this.props.type === 'new') {// open new conversation
            const remoteId = prompt("Write nickname of the person you want to connect to.");
            const connection = new Connection(this.props.nickname, remoteId);
            connection.openConnection();
            this.props.dispatch(openConnections(remoteId, connection));
        }
        else {
            const connection = this.props.connections.find(conn => conn.connection.id === this.props.type);
            if (!connection) {
                alert('This connection doesn\'t exist.');
                return;
            }
            this.props.dispatch(activeConversation(connection));
        }
    }

    render() {
        const { avatar, remoteId } = this.props;
        return (
            <StyledUserButton onClick={ this.showConversation }>
                <UserButton.Avatar img={ avatar }/>
                <UserButton.Nickname>
                    { remoteId }
                </UserButton.Nickname>
            </StyledUserButton>
        );
    }
};

const mapDispatchToProps = dispatch => ({ dispatch })
const mapStateToProps = state => ({ 
    nickname: state.nickname,
    connections: state.connections,
    activeConversation: state.activeConversation
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserButton);
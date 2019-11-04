import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Avatar from './Avatar';
import Nickname from './Nickname';
import { showPage, openConversation } from '../../shared/store/modules';
import { defaultTheme } from '../../shared/theme';

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
            const username = prompt("Write nickname of the person you want to connect to.");
            this.props.dispatch(openConversation(username));
        }
        else {
            this.props.dispatch(showPage(this.props.type));
        }
    }

    render() {
        const { avatar, username } = this.props;
        return (
            <StyledUserButton onClick={ this.showConversation }>
                <UserButton.Avatar img={ avatar }/>
                <UserButton.Nickname>
                    { username }
                </UserButton.Nickname>
            </StyledUserButton>
        );
    }
};

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
    null,
    mapDispatchToProps
)(UserButton);
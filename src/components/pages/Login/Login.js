import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../../shared/theme';

const StyledLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 200px;
    background-color: ${ defaultTheme.primary };
    color: ${ defaultTheme.secondary };
    border: 3px double ${ defaultTheme.secondary };
`;

const StyledButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${ defaultTheme.tertiary };
    color: ${ defaultTheme.primary };
    box-sizing: border-box;
    padding: 5px 10px;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
        background-color: ${ defaultTheme.secondary };
    }
`;

class Login extends React.Component { 
    constructor() {
        super();
        this.state = {
            nickname: null
        };
    }

    setNickname = () => {
        if (!this.nickname.value) {
            alert('Please provide nickname.');
            return;
        }
        this.setState({ nickname: this.nickname.value });
    }

    render() {
        return (
            <StyledLogin>
                <label for='textbox_nickname'>Your nickname</label>
                <input type='text' name='textbox_nickname' ref={ input => this.nickname = input }></input>
                <StyledButton onClick={ this.setNickname }>Connect</StyledButton>
            </StyledLogin>
        )
    }
}

export default Login;
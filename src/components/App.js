import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './pages/Login';
import Conversation from './pages/Conversation';
import './App.css';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
        <MainWrapper> 
        {
          this.props.nickname
            ? <>
              <Sidebar />
              <ContentWrapper>
                <Header>{ this.props.activeConversation ? `Conversation with ${this.props.activeConversation.remoteId}`.toUpperCase() : null }</Header>
                <Content>
                  {
                    this.props.activeConversation
                    ? <Conversation user={ this.props.activeConversation.remoteId }></Conversation>
                    : null
                  }
                </Content>
              </ContentWrapper>
              </>
            : <ContentWrapper>
                <Login />
              </ContentWrapper>
        }
        </MainWrapper>
    )
  }
}

const mapStateToProps = state => ({
  nickname: state.nickname,
  activeConversation: state.activeConversation
})

export default connect(
  mapStateToProps
)(App);

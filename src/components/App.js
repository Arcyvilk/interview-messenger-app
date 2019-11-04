import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './pages/Login';
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
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <MainWrapper>
      <Sidebar />
      <ContentWrapper>
        <Header>Test.</Header>
        <Content>
          <Login />
        </Content>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../shared/theme';
import './App.css';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  background-color: ${ defaultTheme.primary };
  color: ${ defaultTheme.secondary };
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: ${ defaultTheme.primary };
  color: ${ defaultTheme.secondary };
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${ defaultTheme.secondary };
  color: ${ defaultTheme.primary };
`;

const App = () => {
  return (
    <MainWrapper>
      <Sidebar />
      <ContentWrapper>
        <Header></Header>
        <Content></Content>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;

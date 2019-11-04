import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { defaultTheme } from '../../shared/theme';
import UserButton from '../UserButton';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  background-color: ${defaultTheme.primary};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  color: ${defaultTheme.secondary};
`;

class Sidebar extends React.Component {
  static Title = Title;

  showAvailableConversations = () => 
    this.props.state.connections.map(conn => 
      <UserButton remoteId={conn.remoteId} avatar={'https://docs.atlassian.com/aui/8.2.0/docs/images/avatar-person.svg'} type={ conn.connection.id } />
    )

  render() {
    return (
      <StyledSidebar>
        <Sidebar.Title>Conversations</Sidebar.Title>
        <UserButton remoteId={ 'Start new conversation' } avatar={'https://cdn.onlinewebfonts.com/svg/img_24970.png'} type='new' />;
        {
          this.showAvailableConversations()
        }
      </StyledSidebar>
    );
  }
};

const mapStateToProps = state => ({ state })

export default connect(
  mapStateToProps
)(Sidebar);
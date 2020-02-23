import React from 'react';
import { Header, Icon } from 'semantic-ui-react';


function NavBar({ componentNumber }) {
  return (
    <div className="ui borderless topmenu menu">
      <Header>
        <Icon name="calendar" size="large" />
        Daikon Calendar
      </Header>
    </div>
  );
}


export default NavBar;

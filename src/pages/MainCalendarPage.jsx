import React from 'react';
import {
  Grid, Icon, Button, Header,
} from 'semantic-ui-react';
import ComponentExample from '../components/ComponentExample';


function MainCalendarPage() {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={9}>
            <Button>
              <Icon name="angle left icon" />
            </Button>
            <Button>
              Today
            </Button>
            <Button>
              <Icon name="angle right icon" />
            </Button>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>
              February 2020
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Button>
              <Icon name="add" />
            </Button>
          </Grid.Column>
          <Grid.Column width={13}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <h1>This is part of a eeeepage component</h1>
      <ComponentExample componentNumber={1} />
      <ComponentExample componentNumber={2} />
      <ComponentExample componentNumber={3} />
    </>
  );
}


export default MainCalendarPage;

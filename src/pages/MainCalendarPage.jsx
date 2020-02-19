import React from 'react';
import ComponentExample from '../components/ComponentExample';

function MainCalendarPage() {
  return (
    <>
      <h1>This is part of a page component</h1>
      <ComponentExample componentNumber={1} />
      <ComponentExample componentNumber={2} />
      <ComponentExample componentNumber={3} />
    </>
  );
}

export default MainCalendarPage;

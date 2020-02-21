import React from 'react';
import MainCalendarPage from './pages/MainCalendarPage';
import { getAllEvents } from './api/events';

function App() {
  getAllEvents().then((msg) => console.log(msg));
  return (
    <MainCalendarPage />
  );
}

export default App;

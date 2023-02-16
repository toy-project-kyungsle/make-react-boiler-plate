import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Main = loadable(() => import('@pages/Main'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

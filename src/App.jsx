import React from 'react';
import './App.css';
import Menu from './pages/Menu';
import Overview from './pages/Overview';
import Formation from './pages/Formation';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';

const renderPage = (param) => {
  switch (param) {
    case 'Overview':
      return <Overview />;
    case 'Formation':
      return <Formation />;
    case 'Experience':
      return <Experience />;
    case 'Projects':
      return <Project />;
    case 'Contacts':
      return <Contact />;
    default:
      return 'foo';
  }
};

const App = () => {
  const [page, setPage] = React.useState('Overview');
  return (
    <>
      <div className="w-screen h-screen bg-[#232323]">
        <Menu page={page} setPage={setPage}></Menu>
        {renderPage(page)}
      </div>
    </>
  );
};

export default App;

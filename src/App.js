import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import MainBody from './MainBody';
import Homepage2 from './HomePage2';
import Homepage3 from './HomePage3';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  const [page, setPage] = useState('home');
  const [subPage, setSubPage] = useState('homepage2');

  const navigateToHome = () => {
    setPage('home');
    setSubPage('homepage2'); // Resetting subPage as well, just in case
  };

  return (
    <Container>
      <Header navigateToHome={navigateToHome} />
      {page === 'home' ? (
        <MainBody onPageChange={() => setPage('homepage2')} />
      ) : (
        subPage === 'homepage2' ? (
          <Homepage2 onSubPageChange={() => setSubPage('homepage3')} />
        ) : (
          <Homepage3 />
        )
      )}
    </Container>
  );
};

export default App;

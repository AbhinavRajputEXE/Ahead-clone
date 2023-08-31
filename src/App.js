import React, { useState } from 'react';
import styled from 'styled-components';

const Homepage = () => {
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

const Header = ({ navigateToHome }) => (
  <HeaderContainer>
    <Logo onClick={navigateToHome}>Logo</Logo>
    <Navbar>
      <NavItem>About us</NavItem>
      <NavItem>Self Awareness test</NavItem>
      <NavItem>Blog</NavItem>
    </Navbar>
  </HeaderContainer>
);

const MainBody = ({ onPageChange }) => (
  <MainContainer>
    <Title>Duolingo for emotional intelligence</Title>
    <Subtitle>Your pocket coach, built by behavior change experts to transform your life.</Subtitle>
    <BoldText>Select a journey:</BoldText>
    <JourneyOptionsContainer>
      <JourneyOption>Keep your cool</JourneyOption>
      <JourneyOption>Get things done</JourneyOption>
      <JourneyOption>Be confident</JourneyOption>
    </JourneyOptionsContainer>
    <GetStartedButton onClick={onPageChange}>Get Started</GetStartedButton>
  </MainContainer>
);

const Homepage2 = ({ onSubPageChange }) => (
  <MainContainer>
    <Title>Homepage 2</Title>
    <NavigateButton onClick={onSubPageChange}>Go to Homepage 3</NavigateButton>
  </MainContainer>
);

const Homepage3 = () => (
  <MainContainer>
    <Title>Homepage 3</Title>
  </MainContainer>
);

export default Homepage;

// Styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 30px;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Navbar = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1``;

const Subtitle = styled.p``;

const BoldText = styled.p`
  font-weight: bold;
`;

const JourneyOption = styled.div`
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
  border: 1px solid gray;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const JourneyOptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px 0;
`;

const GetStartedButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
`;

const NavigateButton = styled.button`
  background-color: gray;
  color: white;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
`;
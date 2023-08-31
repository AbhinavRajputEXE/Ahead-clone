import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
`;

const NavigateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Homepage2 = ({ onSubPageChange }) => (
  <MainContainer>
    <Title>Homepage 2</Title>
    <NavigateButton onClick={onSubPageChange}>Go to Homepage 3</NavigateButton>
  </MainContainer>
);

export default Homepage2;

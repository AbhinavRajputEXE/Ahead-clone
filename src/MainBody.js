import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-image: url(${require('./bg.jpg')});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding: 50px;
  height: 100%;
`;

const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  color: #666;
  font-size: 24px;
  margin-bottom: 20px;
`;

const BoldText = styled.p`
  font-weight: bold;
  margin-top: 20px;
`;

const JourneyOption = styled.div`
  background-color: #f0f0f0;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #ccc;
  display: inline-block;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const JourneyOptionsContainer = styled.div`
  margin: 10px 0;
`;

const GetStartedButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
`;

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

export default MainBody;

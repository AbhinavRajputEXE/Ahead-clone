import React from "react";
import styled from "styled-components";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";

const MainContainer = styled.div`
  background-image: url(${require("./bg.jpg")});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding: 50px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
`;

const Title = styled.h1`
  margin-left: 25%;
  margin-right: 25%;
  color: white;
  font-size: 56px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color: #8f8f8f;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const PurpleButton = styled.button`
  background-color: #6b3fc4;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px 170px;
  font-size: 18px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 95%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
`;

const TextImageSection = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  opacity: 0;
  transform: translateX(
    ${(props) => (props.direction === "left" ? "-" : "")}20px
  );
  animation: slideIn 1s ease-out forwards;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Text = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  flex: 1;
  max-width: 200px;
  border-radius: 5px;
`;

const Homepage3 = () => {
  scrollSpy.update();

  return (
    <MainContainer>
      <Title>Stop procrastination. Stay focused</Title>
      <Subtitle>
        Built by behavior change experts to transform your life
      </Subtitle>
      <PurpleButton>I am ready</PurpleButton>
      <Container>
        <Element name="section1">
          <TextImageSection direction="left">
            <Text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, dui id bibendum placerat, mauris augue facilisis velit,
                et suscipit mi erat a purus. Ut nec hendrerit metus.
              </p>
            </Text>
            <Image src="https://via.placeholder.com/300" alt="Sample Image" />
          </TextImageSection>
        </Element>

        <Element name="section2">
          <TextImageSection direction="right">
            <Image src="https://via.placeholder.com/300" alt="Sample Image" />
            <Text>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </Text>
          </TextImageSection>
        </Element>

        <Element name="section3">
          <TextImageSection direction="left">
            <Text>
              <p>
                Quisque nec lacinia nunc. Nullam interdum vulputate risus, id
                hendrerit mi congue ut. Sed sagittis, velit non ultrices
                iaculis, diam lectus sodales tellus, nec fermentum turpis purus
                eu lectus.
              </p>
            </Text>
            <Image src="https://via.placeholder.com/300" alt="Sample Image" />
          </TextImageSection>
        </Element>

        <Element name="section4">
          <TextImageSection direction="right">
            <Image src="https://via.placeholder.com/300" alt="Sample Image" />
            <Text>
              <p>
                Duis blandit, justo eu volutpat viverra, purus nisi fermentum
                mi, id scelerisque risus tortor a ligula. Integer varius, odio
                sit amet vestibulum efficitur, mauris erat luctus massa, vel
                pulvinar metus sem in dui. Integer suscipit nulla eget justo
                euismod lacinia.
              </p>
            </Text>
          </TextImageSection>
        </Element>

        <Element name="section5">
          <TextImageSection direction="left">
            <Text>
              <p>
                Aliquam nec mi ac libero varius vehicula. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vivamus lacinia justo in ligula sagittis, et vulputate
                elit gravida. Fusce id orci erat.
              </p>
            </Text>
            <Image src="https://via.placeholder.com/300" alt="Sample Image" />
          </TextImageSection>
        </Element>

        <Element name="section6">
          <TextImageSection direction="right">
            <Image src="https://via.placeholder.com/300" alt="Sample Image" />
            <Text>
              <p>
                Ut laoreet vestibulum nibh, ut volutpat odio tincidunt nec.
                Nulla facilisi. In hac habitasse platea dictumst. Ut iaculis mi
                sit amet mauris accumsan iaculis.
              </p>
            </Text>
          </TextImageSection>
        </Element>
      </Container>
    </MainContainer>
  );
};

export default Homepage3;

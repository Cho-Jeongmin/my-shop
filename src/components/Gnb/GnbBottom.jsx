import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GnbBottom = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Container currentBanner={currentBanner}>
        <Banner>
          <Title>Free Member Returns</Title>
          <Description>
            Return whatever you don't love within 30 days.
            <Bold>Learn more.</Bold>
          </Description>
        </Banner>
        <Banner>
          <Title>Free Delivery</Title>
          <Description>
            Free standard delivery for members on orders $80+.
            <Bold>Learn more.</Bold>
          </Description>
        </Banner>
      </Container>
    </Wrapper>
  );
};

export default GnbBottom;

export const Wrapper = styled.div`
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 200vw;
  background-color: #f5f5f5;
  height: 60px;
  display: flex;
  flex-direction: row;
  ${(props) => props.currentBanner === 1 && `transform: translateX(-100vw);`}
  transition: transform 0.5s ease;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100vw;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Description = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  display: flex;
  gap: 4px;
`;

export const Bold = styled.span`
  font-weight: 500;
  text-decoration: underline;
`;

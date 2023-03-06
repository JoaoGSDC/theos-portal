import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

export const SkillSection = styled.section`
  padding: 0 0 50px 0;
  position: relative;
  padding-top: 24px;

  h2 {
    font-size: 45px;
    font-weight: 700;
  }

  p {
    color: #b8b8b8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
  }
`;

export const SkillBx = styled.div`
  background: #151515;
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
`;

export const SkillSlider = styled(Carousel)`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

export const SliderItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    margin: 0 auto 15px auto;
  }
`;

export const BackgroundImageLeft = styled.img`
  top: 28%;
  position: absolute;
  bottom: 0;
  width: 40%;
  z-index: -4;
`;

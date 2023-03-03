import styled from 'styled-components';

export const BannerSection = styled.section`
  margin-top: 0;
  padding: 260px 0 100px 0;
  background-image: url('/assets/img/banner-bg.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 65px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 1;
    margin-bottom: 20px;
    display: block;
  }

  p {
    color: #b8b8b8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    width: 96%;
  }

  button {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 60px;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;

    svg {
      font-size: 25px;
      margin-left: 10px;
      transition: 0.3s ease-in-out;
      line-height: 1;
    }

    &:hover svg {
      margin-left: 25px;
    }
  }

  img {
    animation: updown 3s linear infinite;
  }

  @keyframes updown {
    0% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 80px 0 100px 0;
  }
`;

export const Tagline = styled.span`
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`;

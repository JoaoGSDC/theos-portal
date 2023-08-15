import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0 50px 0;
  background-image: url('/assets/img/footer-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  font-weight: 400;
  font-size: 14px;
  color: #b8b8b8;
  letter-spacing: 0.5px;
  margin-top: 48px;

  img {
    width: 25%;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #b8b8b8;
    letter-spacing: 0.5px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  margin-right: 64px;

  @media only screen and (max-width: 600px) {
    align-items: center;
    margin-right: 0px;
  }
`;

export const ImgContainer = styled(Col)`
  margin-top: 48px;
  margin-left: 48px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 0px;

    img {
      width: 75%;
    }
  }
`;

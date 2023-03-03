import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 0 0 50px 0;
  background-image: url('/assets/img/footer-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  font-weight: 400;
  font-size: 14px;
  color: #b8b8b8;
  letter-spacing: 0.5px;
  margin-top: 20px;

  img {
    width: 50%;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #b8b8b8;
    letter-spacing: 0.5px;
    margin-top: 20px;
  }
`;

export const ImgContainer = styled(Col)`
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;

    img {
      width: 75%;
    }
  }
`;

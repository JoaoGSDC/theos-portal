import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const NewsletterBx = styled.div`
  background: #ffffff;
  border-radius: 55px;
  color: #121212;
  padding: 88px 128px;
  margin-bottom: 80px;
  margin-top: -122px;

  h3 {
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.2em;
  }

  @media only screen and (max-width: 600px) {
    padding: 88px 32px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 1000px) {
    padding: 88px 32px;
    margin-bottom: 40px;
  }
`;

export const Fields = styled(Col)`
  flex: 1;
`;

export const NewEmailBx = styled.div`
  background: #fff;
  padding: 5px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    color: #121212;
    font-weight: 500;
    background: transparent;
    border: 0;
    padding: 0 15px;
    flex: 1;
  }

  button {
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    padding: 20px 65px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-radius: 18px;
  }

  &:before {
    content: '';
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    border-radius: 20px;
    position: absolute;
    z-index: -1;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
  }

  &:after {
    content: '';
    background: #fff;
    border-radius: 20px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 32px;

    input {
      padding: 24px;
    }

    button {
      width: 100%;
    }
  }
`;

import styled from 'styled-components';
import TrackVisibilityOnScreen from 'react-on-screen';

export const ContactSection = styled.section`
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  padding: 60px 0 200px 0;

  img {
    width: 92%;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  form {
    input,
    textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      color: #fff;
      margin: 0 0 8px 0;
      padding: 18px 26px;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.8px;
      transition: 0.3s ease-in-out;

      &:focus {
        background: rgba(255, 255, 255, 1);
        color: #121212;

        &::placeholder {
          color: #121212;
          opacity: 0.8;
        }
      }

      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
    }

    button {
      font-weight: 700;
      color: #000;
      background-color: #fff;
      padding: 14px 48px;
      font-size: 18px;
      margin-top: 25px;
      border-radius: 0;
      position: relative;
      transition: 0.3s ease-in-out;

      span {
        z-index: 1;
        position: relative;
      }

      &:hover {
        color: #fff;

        &:before {
          width: 100%;
        }
      }

      &:before {
        content: '';
        background: #121212;
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        transition: 0.3s ease-in-out;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-top: 16px;
    }
  }
`;

export const TrackVisibility = styled(TrackVisibilityOnScreen)`
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

import styled from 'styled-components';

export const OportunitiesContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 300px);

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 16px 16px 8px;

    position: absolute;
    width: 100%;
    background-color: #121212;

    img {
      width: 10%;
      margin-right: 16px;
    }

    input,
    textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      color: #fff;
      padding: 8px 12px;
      font-weight: 500;
      font-size: 1rem;
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
  }

  button {
    font-weight: 700;
    color: #000;
    background-color: #fff;
    padding: 14px 48px;
    font-size: 18px;
    margin-left: 8px;
    border-radius: 0;
    position: relative;
    transition: 0.3s ease-in-out;

    span {
      z-index: 1;
      position: relative;
    }

    &:hover {
      cursor: pointer;
      background: #121212;
      transition: 0.3s ease-in-out;
      color: #fff !important;

      &:before {
        width: 100%;
      }
    }
  }
`;

export const Content = styled.div`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-top: 16px;
  }
`;

export const Informations = styled.div`
  display: flex;

  h5:first-child {
    &:after {
      content: '|';
      margin: 0px 8px;
    }
  }
`;

export const ContainerOportunitiesContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const OportunitiesContent = styled.div`
  display: flex;
  background-color: #151515;
  border-radius: 16px;
  width: calc(100% - 400px);
  position: absolute;
  top: 240px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  overflow-y: auto;
  max-height: 600px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #414141;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #414141;
  }
`;

export const RightContent = styled.div`
  display: flex;
  width: 100%;

  div:first-child {
    width: calc(100% - 24px);
  }
`;

export const Figure = styled.figure`
  display: flex;
  margin: 0px;
  justify-content: center;
  align-items: center;
  width: 600px;

  img {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  background-image: url('/assets/img/banner-bg.png');
  width: 100%;
  height: 360px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

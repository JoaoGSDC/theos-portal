import styled from 'styled-components';

export const InputFileCustom = styled.input`
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &::-webkit-file-upload-button {
    font-weight: 700;
    color: #000;
    background-color: #fff;
    padding: 14px 48px;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 16px;
    border-radius: 32px;
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

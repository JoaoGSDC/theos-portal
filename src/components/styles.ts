import styled from 'styled-components';

export const SocialIcon = styled.div`
  display: inline-block;
  margin-left: 14px;

  a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);

    img {
      width: 40%;
      z-index: 1;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      img {
        filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%)
          contrast(86%);
      }

      &:before {
        transform: scale(1);
      }
    }

    &:before {
      content: '';
      width: 42px;
      height: 42px;
      position: absolute;
      background-color: #ffffff;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
    }
  }

  a:not(:last-child) {
    margin-right: 6px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0px;

    a:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

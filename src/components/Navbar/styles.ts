import styled from 'styled-components';
import { Navbar as NavbarBS, Nav as NavBS, Container } from 'react-bootstrap';

export const Brand = styled(NavbarBS.Brand)`
  width: 18%;

  @media only screen and (max-width: 800px) {
    width: 50%;
  }
`;

export const Toggle = styled(NavbarBS.Toggle)`
  span {
    width: 24px;
    height: 17px;
    background-image: none;
    position: relative;
    border-bottom: 2px solid #fff;
    transition: all 300ms linear;
    top: -2px;

    &:focus {
      border-bottom: 2px solid #fff;
    }

    &:after,
    &:before {
      width: 24px;
      position: absolute;
      height: 2px;
      background-color: #fff;
      top: 0;
      left: 0;
      content: '';
      z-index: 2;
      transition: all 300ms linear;
    }

    &:after {
      top: 8px;
    }
  }

  &[aria-expanded='true'] {
    span {
      border-color: transparent;

      &:after {
        transform: rotate(45deg);
        background-color: #fff;
        height: 2px;
      }

      &:before {
        transform: translateY(8px) rotate(-45deg);
        background-color: #fff;
        height: 2px;
      }
    }
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media only screen and (max-width: 600px) {
    span {
      margin-right: 16px;
    }

    &[aria-expanded='true'] {
      span {
        border-color: transparent;

        &:after {
          transform: rotate(45deg);
          background-color: #fff;
          height: 2px;
        }

        &:before {
          transform: translateY(8px) rotate(-45deg);
          background-color: #fff;
          height: 2px;
        }
      }
    }
  }
`;

export const NavbarText = styled.span`
  display: flex;
  align-items: center;

  button {
    font-weight: 700;
    color: #fff;
    border: 1px solid #fff;
    padding: 18px 34px;
    font-size: 18px;
    margin-left: 18px;
    position: relative;
    background-color: transparent;
    transition: 0.3s ease-in-out;

    span {
      z-index: 1;
    }

    &:before {
      content: '';
      width: 0%;
      height: 100%;
      position: absolute;
      background-color: #fff;
      left: 0;
      top: 0;
      z-index: -1;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      color: #121212;

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    button {
      margin-top: 16px;
      margin-left: 0px;
    }
  }
`;

export const NavContainer = styled(NavBS)`
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px !important;
    margin: 16px 0px;
  }
`;

export const NavLink = styled(NavBS.Link).attrs(({ active }: any) => ({
  active,
}))`
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: ${(props) => (props.active ? 1 : 0.75)};

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Navbar = styled(NavbarBS).attrs(({ scrolled }: any) => ({
  scrolled,
}))`
  padding: ${(props) => (!props.scrolled ? '18px 0' : '0px 0')};
  background-color: ${(props) => (!props.scrolled ? undefined : '#121212')};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  transition: 0.32s ease-in-out;

  @media only screen and (max-width: 600px) {
    padding: 18px 0px;

    #basic-navbar-nav {
      padding: 0px;
      background-color: #121212;
    }
  }
`;

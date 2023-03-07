import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link as LinkScroll } from 'react-scroll';
import { SocialIcon } from '../styles';
import { Brand, Navbar, NavbarText, NavContainer, NavLink, Toggle } from './styles';

const logo = '/assets/imgs/theos-logo.png';
const navIcon1 = '/assets/img/nav-icon1.svg';
const navIcon2 = '/assets/img/nav-icon2.svg';
const navIcon3 = '/assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value: any) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="md" scrolled={scrolled}>
        <Container>
          <Brand href="/">
            <img src={logo} alt="Logo" />
          </Brand>

          <Toggle aria-controls="basic-navbar-nav">
            <span />
          </Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <NavContainer className="ms-auto">
              <NavLink href="#home" active={activeLink === 'home'} onClick={() => onUpdateActiveLink('home')}>
                Início
              </NavLink>

              <NavLink href="#skills" active={activeLink === 'skills'} onClick={() => onUpdateActiveLink('skills')}>
                Parceiros
              </NavLink>
            </NavContainer>

            <NavbarText>
              <SocialIcon>
                <a href="#" target="_blank">
                  <img src={navIcon1} alt="" />
                </a>

                <a href="#" target="_blank">
                  <img src={navIcon2} alt="" />
                </a>

                <a href="#" target="_blank">
                  <img src={navIcon3} alt="" />
                </a>
              </SocialIcon>

              <LinkScroll to="connect">
                <button className="vvd">
                  <span>Seja um parceiro</span>
                </button>
              </LinkScroll>
            </NavbarText>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

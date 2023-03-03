import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from '../MailchimpForm';
import { SocialIcon } from '../styles';
import { FooterContainer, ImgContainer } from './stytles';

const logo = '/assets/imgs/logo_bycross.png';
const navIcon1 = '/assets/img/nav-icon1.svg';
const navIcon2 = '/assets/img/nav-icon2.svg';
const navIcon3 = '/assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />

          <ImgContainer size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </ImgContainer>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialIcon>
              <a href="https://www.linkedin.com/company/bycross-software" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>

              <a href="#" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>

              <a href="#" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </SocialIcon>

            <p>Copyright 2023. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

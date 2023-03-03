import { useState, useEffect } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import { Fields, NewEmailBx, NewsletterBx } from './styles';

export const Newsletter = ({ status, message, onValidated }: any) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <NewsletterBx className="wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Inscreva-se na nossa Newsletter e fique por dentro do mundo tech</h3>
            {status === 'sending' && <Alert>Enviando...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>

          <Fields md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <NewEmailBx>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                <button type="submit">Enviar</button>
              </NewEmailBx>
            </form>
          </Fields>
        </Row>
      </NewsletterBx>
    </Col>
  );
};

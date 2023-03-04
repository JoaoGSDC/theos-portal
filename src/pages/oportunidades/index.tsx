import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import {
  Content,
  Figure,
  Informations,
  LeftContent,
  OportunitiesContent,
  OportunitiesContainer,
  RightContent,
  ImageContainer,
  ContainerOportunitiesContent,
} from './styles';

export default function Oportunities() {
  return (
    <>
      <OportunitiesContainer>
        <form>
          <img src="/assets/imgs/theos-logo.png" alt="logo" />
          <input type="text" placeholder="Digite o nome da oportunidade" />
          <button type="button">FILTRAR</button>
        </form>

        <ImageContainer>
          <Figure>
            <img src="/assets/imgs/theos-logo.png" alt="logo" />
          </Figure>
        </ImageContainer>

        <ContainerOportunitiesContent>
          <OportunitiesContent>
            <LeftContent>
              <Card>
                <Content>
                  <h3>Desenvolvedor FrontEnd Senior</h3>

                  <Informations>
                    <h5>ByCross Software</h5>
                    <h5>Limeira-SP</h5>
                  </Informations>

                  <h5>Até R$ 14.000,00</h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo velit, scelerisque vitae
                    lobortis sed, condimentum a justo...
                  </p>
                </Content>
              </Card>

              <Card>
                <Content>
                  <h3>Desenvolvedor FrontEnd Senior</h3>

                  <Informations>
                    <h5>ByCross Software</h5>
                    <h5>Limeira-SP</h5>
                  </Informations>

                  <h5>Até R$ 14.000,00</h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo velit, scelerisque vitae
                    lobortis sed, condimentum a justo...
                  </p>
                </Content>
              </Card>

              <Card>
                <Content>
                  <h3>Desenvolvedor FrontEnd Senior</h3>

                  <Informations>
                    <h5>ByCross Software</h5>
                    <h5>Limeira-SP</h5>
                  </Informations>

                  <h5>Até R$ 14.000,00</h5>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo velit, scelerisque vitae
                    lobortis sed, condimentum a justo...
                  </p>
                </Content>
              </Card>
            </LeftContent>

            <RightContent>
              <Card>
                <h1>Nenhuma oportunidade selecionada.</h1>
              </Card>
            </RightContent>
          </OportunitiesContent>
        </ContainerOportunitiesContent>
      </OportunitiesContainer>
    </>
  );
}

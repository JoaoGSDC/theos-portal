import { Card } from '../../components/Card';
import { Content, Informations, LeftContent, OportunitiesContent, OportunitiesSection, RightContent } from './styles';

export default function Oportunities() {
  return (
    <>
      <OportunitiesSection>
        <form>
          <input type="text" placeholder="Digite o nome da oportunidade" />
          <button type="button">FILTRAR</button>
        </form>

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
      </OportunitiesSection>
    </>
  );
}

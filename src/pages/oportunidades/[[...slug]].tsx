import { GetServerSideProps } from 'next';
import React from 'react';
import { Card } from '../../components/Card';
import api from '../../services/api';
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
  SelectedOpportunityContent,
} from '../../styles/opportunities.styles';

export default function Oportunities({ opportunitiesPage }: any) {
  const { opportunities, client } = opportunitiesPage;

  const [selectedOpportunity, setSelectedOpportunity] = React.useState<any>();
  const [skillNames, setSkillNames] = React.useState<any>();

  function createMatter() {
    return { __html: skillNames };
  }

  return (
    <>
      <OportunitiesContainer>
        <form>
          <img src="/assets/imgs/theos-logo.png" alt="logo" />
          <input type="text" placeholder="Digite o nome da oportunidade" />
          <button type="button">FILTRAR</button>
        </form>

        <ImageContainer background={client?.background ?? '/assets/img/banner-bg.png'}>
          <Figure>
            <img src={client?.logo ?? '/assets/imgs/theos-logo.png'} alt="logo" />
          </Figure>
        </ImageContainer>

        <ContainerOportunitiesContent>
          <OportunitiesContent>
            <LeftContent>
              {opportunities?.map((opportunity: any) => {
                return (
                  <>
                    <Card
                      isButton={true}
                      onClick={() => {
                        const teste = opportunity.skills.technical.items.map((value: any) => value.name).join('<br />');
                        console.log(teste);
                        setSkillNames(teste);
                        setSelectedOpportunity(opportunity);
                      }}
                    >
                      <Content>
                        <h3>{opportunity.name}</h3>

                        <Informations>
                          <h5>{opportunity.company}</h5>
                          <h5>{opportunity.city}</h5>
                        </Informations>

                        <h5>{opportunity.budget}</h5>
                      </Content>
                    </Card>
                  </>
                );
              })}
            </LeftContent>

            <RightContent>
              <Card>
                {selectedOpportunity ? (
                  <SelectedOpportunityContent>
                    <h1>{selectedOpportunity.name}</h1>
                    <h3>{selectedOpportunity.company}</h3>
                    <h3>{selectedOpportunity.budget}</h3>
                    <br />
                    <h3>Descrição:</h3>
                    <p>{selectedOpportunity.description}</p>
                    <br />
                    <h3>Requisitos:</h3>
                    <p dangerouslySetInnerHTML={createMatter()} />
                  </SelectedOpportunityContent>
                ) : (
                  <h1>Nenhuma oportunidade selecionada.</h1>
                )}
              </Card>
            </RightContent>
          </OportunitiesContent>
        </ContainerOportunitiesContent>
      </OportunitiesContainer>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const { slug } = query;

  const { data } = await api.get<any>(`/api/opportunities/findMany?page=0&limit=5&company=${slug ? slug[0] : ''}`);

  return {
    props: {
      opportunitiesPage: data,
    },
  };
}

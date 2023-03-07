import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Card } from '../../components/Card';
import InputFile from '../../components/InputFile';
import { Modal } from '../../components/Modal';
import useForm from '../../components/UseForm';
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
  Form,
  FooterButton,
} from '../../styles/opportunities.styles';

export default function Oportunities({ opportunitiesPage }: any) {
  const { opportunities, client } = opportunitiesPage;

  const [selectedOpportunity, setSelectedOpportunity] = React.useState<any>();
  const [skillNames, setSkillNames] = React.useState<any>();

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const fields = {
    name: '',
    cpf: '',
    curriculum: '',
  };

  const { form, handleInputChange, reset } = useForm({ fields });

  function createMatter() {
    return { __html: skillNames };
  }

  useEffect(() => {
    if (openModal) {
      document.body.style['overflow-y' as any] = 'hidden';
      return;
    }

    document.body.style['overflow-y' as any] = 'auto';
  }, [openModal]);

  return (
    <>
      <OportunitiesContainer>
        <Form>
          <img src="/assets/imgs/theos-logo.png" alt="logo" />
          <input type="text" placeholder="Digite o nome da oportunidade" />
          <button type="button">FILTRAR</button>
        </Form>

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
                          <h5>{opportunity.companyName}</h5>
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
                    <h3>
                      <Link href={`/oportunidades/${selectedOpportunity.companyName.split(' ')[0]}`}>
                        {selectedOpportunity.companyName}
                      </Link>
                    </h3>
                    <h3>{selectedOpportunity.budget}</h3>
                    <button onClick={() => setOpenModal(true)}>Inscrever-se</button>

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

      <Modal title={`${selectedOpportunity?.name}`} open={openModal} onClose={setOpenModal}>
        <Form>
          <input type="text" value={form.name} name="name" placeholder="Nome completo" onChange={handleInputChange} />

          <input type="text" value={form.cpf} name="cpf" placeholder="CPF" onChange={handleInputChange} />

          <InputFile value={form.curriculum} name="curriculum" onChange={handleInputChange} />
        </Form>

        <FooterButton>
          <button
            onClick={() => {
              setOpenModal(false);
              reset();
            }}
          >
            Cancelar
          </button>
          <button>Inscrever-se</button>
        </FooterButton>
      </Modal>
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

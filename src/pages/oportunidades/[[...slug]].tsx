import InputMask from 'react-input-mask';
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

export default function Oportunities({ opportunitiesPage, slug }: any) {
  const { client } = opportunitiesPage;

  const [opportunities, setOpportunities] = React.useState<any[]>(opportunitiesPage.opportunities);
  const [search, setSearch] = React.useState<string>('');

  const [selectedOpportunity, setSelectedOpportunity] = React.useState<any>();
  const [skillNames, setSkillNames] = React.useState<any>();

  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [firstLoad, setFirstLoad] = React.useState<boolean>(true);
  const [isFiltered, setIsFiltered] = React.useState<boolean>(false);

  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const limit = 5;

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
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }

    const serviceOpportunities = async () => {
      await api
        .get('/api/opportunities/findMany', {
          params: {
            limit,
            page: currentPage * limit,
            company: slug,
          },
        })
        .then((response: any) => {
          if (response.data.length === 0) {
            return;
          }

          setOpportunities((_opportunities: any) => [..._opportunities, ...response.data.opportunities]);
        })
        .catch((error: any) => console.log(error));
    };

    serviceOpportunities();
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries: any) => {
      if (entries.some((entry: any) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState: number) => currentPageInsideState + 1);
      }
    });

    const sentinela: Element = document.querySelector('#sentinela') as Element;
    intersectionObserver.observe(sentinela);

    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style['overflow-y' as any] = 'hidden';
      return;
    }

    document.body.style['overflow-y' as any] = 'auto';
  }, [openModal]);

  const handleInsertOpportunityApplication = async () => {
    if (form.name === '' || form.cpf === '___.___.___-__' || form.cpf === '' || form.curriculum === '') {
      return;
    }

    const data = {
      name: form.name,
      cpf: form.cpf,
      resume: form.curriculum,
      vacancyId: selectedOpportunity.vacancyId,
    };

    await api.post(`/api/opportunities/create`, data).then(() => onClose());
  };

  const onClose = () => {
    setOpenModal(false);
    reset();
  };

  const handleSetValueSearchOpportunities = (event: any) => {
    const { value } = event.target;

    setSearch(value);

    if (value === '') {
      setCurrentPage(0);
    }
  };

  const handleSearchOpportunities = async () => {
    setCurrentPage(0);

    const { data } = await api.get<any>(`/api/opportunities/findMany?page=0&limit=${limit}&filter=${search}`);
    setOpportunities(data.opportunities);
    setIsFiltered(true);

    setSelectedOpportunity(null);
  };

  const handleClearFilters = async () => {
    setSearch('');

    setCurrentPage(0);

    const { data } = await api.get<any>(`/api/opportunities/findMany?page=0&limit=${limit}`);
    setOpportunities(data.opportunities);
    setIsFiltered(false);
    setSelectedOpportunity(null);
  };

  return (
    <>
      <OportunitiesContainer>
        <Form>
          <img src="/assets/imgs/theos-logo.png" alt="logo" />
          <input
            type="text"
            value={search}
            placeholder="Digite o nome da oportunidade"
            onChange={handleSetValueSearchOpportunities}
          />
          {!isFiltered ? (
            <button type="button" onClick={handleSearchOpportunities}>
              FILTRAR
            </button>
          ) : (
            <button type="button" onClick={handleClearFilters}>
              LIMPAR
            </button>
          )}
        </Form>

        <ImageContainer background={client?.background ?? '/assets/img/banner-bg.png'}>
          <Figure>
            <img src={client?.logo ?? '/assets/imgs/theos-logo.png'} alt="logo" />
          </Figure>
        </ImageContainer>

        <ContainerOportunitiesContent>
          <OportunitiesContent>
            <LeftContent>
              {opportunities?.length
                ? opportunities?.map((opportunity: any) => {
                    return (
                      <>
                        <Card
                          isButton={true}
                          onClick={() => {
                            const teste = opportunity.skills.technical.items
                              .map((value: any) => value.name)
                              .join('<br />');
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
                  })
                : null}

              <div id="sentinela" />
            </LeftContent>

            <RightContent>
              <Card>
                {selectedOpportunity ? (
                  <SelectedOpportunityContent>
                    <h1>{selectedOpportunity.name}</h1>
                    <h3>
                      <Link href={`/oportunidades/${selectedOpportunity.companyName.split(' ')[0].toLowerCase()}`}>
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
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Nome completo"
            onChange={handleInputChange}
            required
          />

          <InputMask
            mask="999.999.999-99"
            maskChar="_"
            type="text"
            id="cpf"
            name="cpf"
            placeholder="CPF"
            onChange={handleInputChange}
            required
          />

          <InputFile value={form.curriculum} name="curriculum" onChange={handleInputChange} required />
        </Form>

        <FooterButton>
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleInsertOpportunityApplication}>Inscrever-se</button>
        </FooterButton>
      </Modal>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const { slug } = query;

  const { data } = await api.get<any>(
    `/api/opportunities/findMany?page=0&limit=5&company=${slug ? slug[0].toLowerCase() : ''}`
  );

  return {
    props: {
      opportunitiesPage: data,
      slug: slug ? slug[0].toLowerCase() : '',
    },
  };
}

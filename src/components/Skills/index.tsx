import React from 'react';
const meter1 = '/assets/img/meter1.svg';
const meter2 = '/assets/img/meter2.svg';
const meter3 = '/assets/img/meter3.svg';
import 'react-multi-carousel/lib/styles.css';
const colorSharp = '/assets/img/color-sharp.png';
import api from '../../pages/api/services/api';
import { BackgroundImageLeft, SkillBx, SkillSection, SkillSlider, SliderItem } from './styles';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleLoadCompanies = React.useCallback(async () => {
    await api.get('/companies').then((resp) => {});
  }, []);

  React.useEffect(() => {}, []);

  return (
    <SkillSection id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SkillBx className="wow zoomIn">
              <h2>Nossos parceiros</h2>

              <p>
                Quer conferir as oportunidades dos nossos parceiros? <br />É só clicar no banner da empresa que você irá
                para as oportunidades da empresa selecionada!
              </p>

              <SkillSlider responsive={responsive} infinite={true} className="owl-carousel owl-theme">
                <SliderItem>
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </SliderItem>

                <SliderItem>
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </SliderItem>

                <SliderItem>
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </SliderItem>

                <SliderItem>
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </SliderItem>
              </SkillSlider>
            </SkillBx>
          </div>
        </div>
      </div>

      <BackgroundImageLeft src={colorSharp} alt="Image" />
    </SkillSection>
  );
};

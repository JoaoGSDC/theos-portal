import styled from 'styled-components';

export const GlassCard = styled.div.attrs(({ isButton }: any) => ({
  isButton,
}))`
  cursor: ${(props) => (props.isButton ? 'pointer' : 'default')};

  padding: 16px;
  margin: 8px;
  background: rgba(18, 18, 18, 0.6);
  box-shadow: 0 8px 8px 0 rgba(31, 38, 135, 0.08);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => (props.isButton ? 'rgba(30, 30, 30, 0.6)' : 'rgba(18, 18, 18, 0.6)')};
  }

  @media only screen and (max-width: 600px) {
    background: rgba(18, 18, 18, 0.85);
  }
`;

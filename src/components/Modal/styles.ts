import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 99999999999;
  background-color: #00000041;
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  height: calc(100% - 240px);

  background-color: #181818;
  border-radius: 16px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  padding: 32px;

  h1 {
    margin: 0px;
  }
`;

export const HeaderModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  justify-content: flex-end;

  form {
    flex-direction: column;
    background-color: transparent;
    height: 100%;
    justify-content: flex-start;

    input {
      margin-bottom: 16px;
    }
  }
`;

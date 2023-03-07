import { ChildrenContainer, CloseButton, HeaderModalContainer, ModalContainer, ModalContent } from './styles';

export const Modal = ({ title, children, open, onClose }: any) => {
  return (
    <>
      {open ? (
        <ModalContainer>
          <ModalContent>
            <HeaderModalContainer>
              <h1>{title}</h1>
              <CloseButton onClick={() => onClose(false)}>X</CloseButton>
            </HeaderModalContainer>

            <ChildrenContainer>{children}</ChildrenContainer>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};

import { GlassCard } from './styles';

export const Card = ({ children, isButton, onClick }: any) => {
  return (
    <GlassCard role={isButton ? 'button' : 'div'} isButton={isButton} onClick={onClick}>
      {children}
    </GlassCard>
  );
};

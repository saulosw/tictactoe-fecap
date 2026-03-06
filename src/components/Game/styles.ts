import { styled, keyframes } from '@mui/material/styles';


const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popModal = keyframes`
  to { transform: scale(1); }
`;

export const GameContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    padding: '2rem',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.02)',
    position: 'relative',
    zIndex: 2,
});

export const GameTitle = styled('h1')({
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: '10px',
    color: '#ffffff',
    marginBottom: '2rem',
    textAlign: 'center',
    textShadow: '0 0 20px rgba(74, 0, 130, 0.6)',
    background: 'linear-gradient(90deg, #ffffff, #8a2be2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

export const GameBoardWrapper = styled('div')({
    margin: '1rem 0',
    position: 'relative',
});

export const GameOverOverlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(5, 5, 5, 0.8)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    zIndex: 20,
    animation: `${fadeIn} 0.3s ease-out`,
});

export const GameOverModal = styled('div')({
    background: '#000000',
    padding: '3rem',
    borderRadius: '15px',
    border: '1px solid #4a0082',
    boxShadow: '0 0 30px rgba(74, 0, 130, 0.6)',
    textAlign: 'center',
    transform: 'scale(0.9)',
    animation: `${popModal} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
});

export const ModalTitle = styled('h2')({
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: '5px',
    marginBottom: '2rem',
    background: 'linear-gradient(90deg, #8a2be2, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});

export const ModalActions = styled('div')({
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
});

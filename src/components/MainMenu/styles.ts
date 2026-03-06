import { styled, keyframes } from '@mui/material/styles';
import { Button } from '@mui/material';

const pulse = keyframes`
  0% { text-shadow: 0 0 10px rgba(74, 0, 130, 0.5); }
  50% { text-shadow: 0 0 30px rgba(138, 43, 226, 0.8), 0 0 60px rgba(74, 0, 130, 0.6); }
  100% { text-shadow: 0 0 10px rgba(74, 0, 130, 0.5); }
`;

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
});

export const GlowEffect = styled('div')({
    position: 'absolute',
    width: '60vw',
    height: '60vw',
    background: 'radial-gradient(circle, rgba(74,0,130,0.1) 0%, rgba(0,0,0,0) 70%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    pointerEvents: 'none',
});

export const Title = styled('h1')({
    fontSize: '4rem',
    fontWeight: 900,
    letterSpacing: '15px',
    color: '#ffffff',
    margin: 0,
    padding: 0,
    animation: `${pulse} 3s infinite ease-in-out`,
});

export const Subtitle = styled('h2')({
    fontSize: '1.2rem',
    fontWeight: 400,
    letterSpacing: '8px',
    color: '#8a2be2',
    marginTop: '1rem',
    marginBottom: '4rem',
    opacity: 0.8,
});

export const AboutText = styled('p')({
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.1rem',
    lineHeight: 1.8,
    maxWidth: '650px',
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2rem',
    fontStyle: 'italic',
    background: 'rgba(25, 0, 51, 0.4)',
    border: '1px solid rgba(138, 43, 226, 0.3)',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
});

export const ActionsContainer = styled('div')({
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
});

export const StartButton = styled(Button)({
    background: 'transparent',
    color: '#ffffff',
    border: '1px solid rgba(138, 43, 226, 0.5)',
    padding: '14px 45px',
    fontSize: '1.2rem',
    letterSpacing: '4px',
    fontWeight: 'bold',
    borderRadius: '100px',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    boxShadow: '0 0 15px rgba(74, 0, 130, 0.0)',
    width: '320px',
    whiteSpace: 'nowrap',
    '&:hover': {
        background: 'rgba(74, 0, 130, 0.3)',
        borderColor: '#9d3df5',
        boxShadow: '0 0 25px rgba(138, 43, 226, 0.5), inset 0 0 15px rgba(138, 43, 226, 0.2)',
    },
});

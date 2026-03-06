import { styled, keyframes } from '@mui/material/styles';


const pulseBar = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(1.5); box-shadow: 0 0 10px rgba(138, 43, 226, 0.8); }
  100% { filter: brightness(1); }
`;

export const TimerContainer = styled('div')({
    width: '100%',
    maxWidth: '310px',
    height: '24px',
    background: '#000000',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    marginTop: '2rem',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
});

export const TimerBar = styled('div')({
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    background: 'linear-gradient(90deg, #4a0082, #8a2be2)',
    transition: 'width 1s linear',
    zIndex: 1,
    animation: `${pulseBar} 2s infinite ease-in-out`,
});

export const TimerText = styled('span')({
    position: 'relative',
    zIndex: 2,
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '0 0 4px #000000',
});

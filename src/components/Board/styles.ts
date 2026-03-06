import { styled, keyframes } from '@mui/material/styles';


const borderRotate = keyframes`
  0% { filter: blur(8px) hue-rotate(0deg); opacity: 0.3; }
  50% { filter: blur(12px) hue-rotate(180deg); opacity: 0.5; }
  100% { filter: blur(8px) hue-rotate(360deg); opacity: 0.3; }
`;

export const BoardContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(3, 100px)',
    gap: '5px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '5px',
    borderRadius: '10px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    position: 'relative',
    zIndex: 1,

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        right: '-2px',
        bottom: '-2px',
        background: 'linear-gradient(45deg, #4a0082, #000000, #ffffff)',
        zIndex: -1,
        borderRadius: '12px',
        opacity: 0.3,
        filter: 'blur(8px)',
        animation: `${borderRotate} 15s linear infinite`,
    },
});

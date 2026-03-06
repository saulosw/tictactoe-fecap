import { styled, keyframes } from '@mui/material/styles';
import type { Player } from '../../types';

const popIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 10px rgba(74, 0, 130, 0.5); transform: scale(1); }
  50% { box-shadow: 0 0 30px #4a0082, inset 0 0 15px #4a0082; transform: scale(1.05); }
  100% { box-shadow: 0 0 10px rgba(74, 0, 130, 0.5); transform: scale(1); }
`;

export const SquareButton = styled('button')<{ $value: Player; $isWinningSquare: boolean }>(({ $value, $isWinningSquare }) => ({
    width: '100px',
    height: '100px',
    background: '#000000',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    cursor: $value ? 'default' : 'pointer',
    outline: 'none',

    '&:not(:disabled):hover': {
        background: 'rgba(74, 0, 130, 0.1)',
        borderColor: '#4a0082',
        boxShadow: '0 0 15px rgba(74, 0, 130, 0.4), inset 0 0 10px rgba(74, 0, 130, 0.3)',
        transform: 'scale(1.05)',
        zIndex: 10,
    },

    ...($value === 'X' && {
        color: '#ffffff',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        animation: `${popIn} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    }),

    ...($value === 'O' && {
        color: '#8a2be2',
        textShadow: '0 0 10px rgba(138, 43, 226, 0.6)',
        animation: `${popIn} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    }),

    ...($isWinningSquare && {
        background: 'rgba(74, 0, 130, 0.2)',
        borderColor: '#8a2be2',
        boxShadow: '0 0 20px rgba(138, 43, 226, 0.6), inset 0 0 20px rgba(138, 43, 226, 0.4)',
        animation: `${pulseGlow} 2s infinite ease-in-out`,
        zIndex: 5,
    }),
}));

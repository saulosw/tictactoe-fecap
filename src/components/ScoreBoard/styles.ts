import { styled, keyframes } from '@mui/material/styles';

const pulseGlow = keyframes`
    0% { box-shadow: 0 0 20px rgba(74, 0, 130, 0.6); }
    50% { box-shadow: 0 0 35px rgba(138, 43, 226, 0.9), 0 0 60px rgba(74, 0, 130, 0.4); }
    100% { box-shadow: 0 0 20px rgba(74, 0, 130, 0.6); }
`;

export const ScoreBoardContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '2rem',
    gap: '1rem',
});

export const ScoreCard = styled('div')<{ $active: boolean; $player: 'X' | 'O'; $pulse?: boolean }>(({ $active, $pulse }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: '#000000',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    opacity: $active ? 1 : 0.5,

    ...($active && {
        borderColor: '#4a0082',
        boxShadow: '0 0 20px rgba(74, 0, 130, 0.6)',
        transform: 'translateY(-5px) scale(1.05)',
    }),

    ...($active && $pulse && {
        animation: `${pulseGlow} 0.5s ease-in-out 3`,
    }),
}));

export const PlayerLabel = styled('span')<{ $player: 'X' | 'O' }>(({ $player }) => ({
    fontSize: '0.8rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: '0.5rem',
    color: $player === 'X' ? '#ffffff' : '#8a2be2',
    textShadow: $player === 'X' ? '0 0 5px rgba(255, 255, 255, 0.5)' : '0 0 5px rgba(138, 43, 226, 0.5)',
}));

export const PlayerScore = styled('span')({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
});

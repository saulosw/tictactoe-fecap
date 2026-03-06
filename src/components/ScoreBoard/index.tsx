import type { Player, GameMode } from '../../types';
import { ScoreBoardContainer, ScoreCard, PlayerLabel, PlayerScore } from './styles.ts';

interface ScoreBoardProps {
    scores: { X: number; O: number };
    currentPlayer: Exclude<Player, null>;
    gameMode: GameMode;
    pulseKey?: number;
}

export const ScoreBoard = ({ scores, currentPlayer, gameMode, pulseKey = 0 }: ScoreBoardProps) => {
    const player1Label = gameMode === 'PvM' ? 'PLAYER (X)' : 'PLAYER X';
    const player2Label = gameMode === 'PvM' ? 'MACHINE (O)' : 'PLAYER O';

    return (
        <ScoreBoardContainer>
            <ScoreCard $active={currentPlayer === 'X'} $player="X" $pulse={currentPlayer === 'X' && pulseKey > 0} key={`X-${pulseKey}`}>
                <PlayerLabel $player="X">{player1Label}</PlayerLabel>
                <PlayerScore>{scores.X}</PlayerScore>
            </ScoreCard>
            <ScoreCard $active={currentPlayer === 'O'} $player="O" $pulse={currentPlayer === 'O' && pulseKey > 0} key={`O-${pulseKey}`}>
                <PlayerLabel $player="O">{player2Label}</PlayerLabel>
                <PlayerScore>{scores.O}</PlayerScore>
            </ScoreCard>
        </ScoreBoardContainer>
    );
};

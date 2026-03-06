import { useGameState } from '../../hooks/useGameState';
import { useTimer } from '../../hooks/useTimer';
import type { GameMode } from '../../types';
import { Board } from '../Board';
import { ScoreBoard } from '../ScoreBoard';
import { TimerDisplay } from '../TimerDisplay';
import {
    GameContainer,
    GameTitle,
    GameBoardWrapper,
    GameOverOverlay,
    GameOverModal,
    ModalTitle,
    ModalActions,
} from './styles.ts';
import { Button } from '@mui/material';


const TURN_DURATION = 10;

interface GameProps {
    onReturnToMenu: () => void;
    gameMode: GameMode;
}

export const Game = ({ onReturnToMenu, gameMode }: GameProps) => {
    const {
        board,
        currentPlayer,
        winner,
        winningLine,
        scores,
        isMachineTurn,
        handlePlay,
        forceSwitchTurn,
        resetGame,
        resetMatchAndScores,
    } = useGameState(gameMode);

    const handleTimeout = () => {
        forceSwitchTurn();
    };

    const { timeLeft, resetTimer } = useTimer(
        TURN_DURATION,
        handleTimeout,
        winner !== null
    );

    const onSquareClick = (index: number) => {
        if (isMachineTurn) return;

        handlePlay(index);
        if (!winner && !board[index]) {
            resetTimer();
        }
    };

    const handleNextRound = () => {
        resetGame();
        resetTimer();
    };

    const handleResetMatch = () => {
        resetMatchAndScores();
        resetTimer();
    };

    return (
        <GameContainer>
            <GameTitle>TIC TAC TOE</GameTitle>

            <ScoreBoard scores={scores} currentPlayer={currentPlayer} gameMode={gameMode} />

            <GameBoardWrapper>
                <Board
                    squares={board}
                    onClick={onSquareClick}
                    winningLine={winningLine}
                    disabled={winner !== null || isMachineTurn}
                />
            </GameBoardWrapper>

            {!winner && <TimerDisplay timeLeft={timeLeft} initialTime={TURN_DURATION} />}

            {winner && (
                <GameOverOverlay>
                    <GameOverModal>
                        <ModalTitle>{winner === 'Draw' ? "IT'S A DRAW" : `PLAYER ${winner} WINS`}</ModalTitle>
                        <ModalActions>
                            <Button variant="contained" color="secondary" onClick={handleNextRound}>
                                NEXT ROUND
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={handleResetMatch}>
                                RESET MATCH
                            </Button>
                            <Button variant="text" color="inherit" onClick={onReturnToMenu}>
                                RETURN TO MENU
                            </Button>
                        </ModalActions>
                    </GameOverModal>
                </GameOverOverlay>
            )}
        </GameContainer>
    );
};

import { useState, useCallback, useEffect } from 'react';
import type { BoardState, Player, WinningLine, GameMode } from '../types'


;

const INITIAL_BOARD: BoardState = Array(9).fill(null);

export const useGameState = (gameMode: GameMode) => {
    const [board, setBoard] = useState<BoardState>(INITIAL_BOARD);
    const [currentPlayer, setCurrentPlayer] = useState<Exclude<Player, null>>('X');
    const [scores, setScores] = useState({ X: 0, O: 0 });
    const [winner, setWinner] = useState<Player | 'Draw'>(null);
    const [winningLine, setWinningLine] = useState<WinningLine>(null);

    const checkWinner = (squares: BoardState): { w: Exclude<Player, null>; line: WinningLine } | null => {
        const lines: Array<[number, number, number]> = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { w: squares[a] as Exclude<Player, null>, line: [a, b, c] };
            }
        }
        return null;
    };

    const handlePlay = useCallback((index: number) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winResult = checkWinner(newBoard);
        if (winResult) {
            setWinner(winResult.w);
            setWinningLine(winResult.line);
            setScores(prev => ({ ...prev, [winResult.w]: prev[winResult.w] + 1 }));
        } else if (!newBoard.includes(null)) {
            setWinner('Draw');
        } else {
            setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'));
        }
    }, [board, currentPlayer, winner]);

    const forceSwitchTurn = useCallback(() => {
        if (winner) return;
        setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'));
    }, [winner]);

    const performAITurn = useCallback(() => {
        if (winner || gameMode !== 'PvM' || currentPlayer !== 'O') return;

        const emptyIndices = board
            .map((val, index) => (val === null ? index : null))
            .filter((val): val is number => val !== null);

        if (emptyIndices.length === 0) return;

        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];

        setTimeout(() => {
            handlePlay(randomIndex);
        }, 500);

    }, [board, currentPlayer, gameMode, handlePlay, winner]);

    useEffect(() => {
        performAITurn();
    }, [performAITurn]);

    const resetGame = useCallback(() => {
        setBoard(INITIAL_BOARD);
        setCurrentPlayer('X');
        setWinner(null);
        setWinningLine(null);
    }, []);

    const resetMatchAndScores = useCallback(() => {
        resetGame();
        setScores({ X: 0, O: 0 });
    }, [resetGame]);

    const isMachineTurn = gameMode === 'PvM' && currentPlayer === 'O';

    return {
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
    };
};

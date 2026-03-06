import type { BoardState, WinningLine } from '../../types';
import { Square } from '../Square';
import { BoardContainer } from './styles.ts';

interface BoardProps {
    squares: BoardState;
    onClick: (i: number) => void;
    winningLine: WinningLine;
    disabled: boolean;
}

export const Board = ({ squares, onClick, winningLine, disabled }: BoardProps) => {
    const renderSquare = (i: number) => {
        const isWinningSquare = winningLine?.includes(i) ?? false;
        return (
            <Square
                key={i}
                value={squares[i]}
                onClick={() => onClick(i)}
                isWinningSquare={isWinningSquare}
                disabled={disabled}
            />
        );
    };

    return (
        <BoardContainer>
            {squares.map((_, i) => renderSquare(i))}
        </BoardContainer>
    );
};

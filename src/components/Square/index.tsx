import type { Player } from '../../types';
import { SquareButton } from './styles.ts';


interface SquareProps {
    value: Player;
    onClick: () => void;
    isWinningSquare: boolean;
    disabled: boolean;
}

export const Square = ({ value, onClick, isWinningSquare, disabled }: SquareProps) => {
    return (
        <SquareButton
            onClick={onClick}
            disabled={disabled || value !== null}
            $value={value}
            $isWinningSquare={isWinningSquare}
        >
            {value}
        </SquareButton>
    );
};

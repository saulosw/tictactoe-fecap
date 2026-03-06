export type Player = 'X' | 'O' | null;

export type BoardState = Player[];

export type WinningLine = [number, number, number] | null;

export type GameMode = 'PvP' | 'PvM' | null;

export interface GameState {
    board: BoardState;
    currentPlayer: Exclude<Player, null>;
    winner: Player | 'Draw';
    winningLine: WinningLine;
    scores: { X: number; O: number };
}

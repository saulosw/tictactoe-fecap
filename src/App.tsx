import { useState } from 'react';
import { Game } from './components/Game';
import { MainMenu } from './components/MainMenu';
import type { GameMode } from './types';

function App() {
  const [gameMode, setGameMode] = useState<GameMode>(null);

  const handleReturnToMenu = () => {
    setGameMode(null);
  };

  return gameMode ? (
    <Game onReturnToMenu={handleReturnToMenu} gameMode={gameMode} />
  ) : (
    <MainMenu onStart={(mode) => setGameMode(mode)} />
  );
}

export default App;

import { useState } from 'react';
import { Container, Title, Subtitle, StartButton, GlowEffect, AboutText, ActionsContainer } from './styles.ts';
import type { GameMode } from '../../types';

interface MainMenuProps {
    onStart: (mode: GameMode) => void;
}

type MenuState = 'main' | 'play' | 'about';

export const MainMenu = ({ onStart }: MainMenuProps) => {
    const [view, setView] = useState<MenuState>('main');

    return (
        <Container>
            <GlowEffect />
            <Title>TIC TAC TOE</Title>
            <Subtitle>NEON EDITION</Subtitle>

            {view === 'main' && (
                <ActionsContainer>
                    <StartButton onClick={() => setView('play')} disableRipple>
                        PLAY
                    </StartButton>
                    <StartButton onClick={() => setView('about')} disableRipple>
                        ABOUT PROJECT
                    </StartButton>
                </ActionsContainer>
            )}

            {view === 'play' && (
                <ActionsContainer>
                    <StartButton onClick={() => onStart('PvP')} disableRipple>
                        PLAYER VS PLAYER
                    </StartButton>
                    <StartButton onClick={() => onStart('PvM')} disableRipple>
                        PLAYER VS MACHINE
                    </StartButton>
                    <StartButton onClick={() => setView('main')} disableRipple sx={{ opacity: 0.6, marginTop: '1rem' }}>
                        BACK
                    </StartButton>
                </ActionsContainer>
            )}

            {view === 'about' && (
                <ActionsContainer>
                    <AboutText>
                        Hello, my name is Saulo. I am a student at FECAP university, and this project is a test of Google's AI models using Antygravity to fulfill a requested course assignment.
                    </AboutText>
                    <StartButton onClick={() => setView('main')} disableRipple sx={{ opacity: 0.6 }}>
                        BACK
                    </StartButton>
                </ActionsContainer>
            )}
        </Container>
    );
};

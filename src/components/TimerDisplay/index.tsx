import { TimerContainer, TimerBar, TimerText } from './styles.ts';


interface TimerDisplayProps {
    timeLeft: number;
    initialTime: number;
}

export const TimerDisplay = ({ timeLeft, initialTime }: TimerDisplayProps) => {
    const percentage = (timeLeft / initialTime) * 100;

    return (
        <TimerContainer>
            <TimerBar style={{ width: `${percentage}%` }} />
            <TimerText>{timeLeft}s</TimerText>
        </TimerContainer>
    );
};

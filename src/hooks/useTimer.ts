import { useState, useEffect, useCallback } from 'react';


export const useTimer = (initialTime: number, onTimeout: () => void, isPaused: boolean) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    const resetTimer = useCallback(() => {
        setTimeLeft(initialTime);
    }, [initialTime]);

    useEffect(() => {
        if (isPaused) return;

        if (timeLeft <= 0) {
            onTimeout();
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, isPaused, onTimeout]);

    return { timeLeft, resetTimer };
};

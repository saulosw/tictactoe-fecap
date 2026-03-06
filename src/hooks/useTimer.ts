import { useState, useEffect, useCallback, useRef } from 'react';


export const useTimer = (initialTime: number, onTimeout: () => void, isPaused: boolean) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const onTimeoutRef = useRef(onTimeout);
    onTimeoutRef.current = onTimeout;

    const resetTimer = useCallback(() => {
        setTimeLeft(initialTime);
    }, [initialTime]);

    useEffect(() => {
        if (isPaused) return;

        if (timeLeft <= 0) {
            onTimeoutRef.current();
            setTimeLeft(initialTime);
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, isPaused, initialTime]);

    return { timeLeft, resetTimer };
};

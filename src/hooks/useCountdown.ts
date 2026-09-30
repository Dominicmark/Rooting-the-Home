import { useState, useEffect } from 'react';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  totalSeconds: number;
  shortString: string;
}

export function useCountdown(targetIsoDate: string): CountdownTime {
  const calculateTimeLeft = (): CountdownTime => {
    const target = new Date(targetIsoDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isCompleted: true,
        totalSeconds: 0,
        shortString: 'Live Now',
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    const totalSeconds = Math.floor(difference / 1000);

    const shortString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    return {
      days,
      hours,
      minutes,
      seconds,
      isCompleted: false,
      totalSeconds,
      shortString,
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIsoDate]);

  return timeLeft;
}

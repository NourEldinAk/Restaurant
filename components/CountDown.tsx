"use client";
import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className='text-3xl text-primary font-bold flex  items-center justify-center  border-4 text-center border-primary'>
      <span className=' text-center p-2'>{timeLeft.days}d </span>
      <span className='border-x-4  p-2 border-primary '>{addLeadingZero(timeLeft.hours)}h</span>
      <span className='border-r-4  p-2 border-primary '>{addLeadingZero(timeLeft.minutes)}m</span>
      <span className=' p-2 '>{addLeadingZero(timeLeft.seconds)}s</span>
      
      
      
    </div>
  );
};

export default Countdown;

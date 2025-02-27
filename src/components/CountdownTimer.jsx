import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card-wrapper h-60">
      <div className="p-6 flex space-x-10 text-center text-2xl font-bold">
        <div className="flex flex-col items-center">
          <span className="text-6xl font-extrabold">{timeLeft.days}</span>
          <span className="text-sm uppercase">Days</span>
        </div>
        <span className="text-6xl font-extrabold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-extrabold">{timeLeft.hours}</span>
          <span className="text-sm uppercase">Hours</span>
        </div>
        <span className="text-6xl font-extrabold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-extrabold">{timeLeft.minutes}</span>
          <span className="text-sm uppercase">Minutes</span>
        </div>
        <span className="text-6xl font-extrabold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-extrabold">{timeLeft.seconds}</span>
          <span className="text-sm uppercase">Seconds</span>
        </div>
      </div>
    </div>
  );
};
export default CountdownTimer;

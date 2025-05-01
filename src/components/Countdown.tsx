
import { useState, useEffect } from 'react';

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <p className="text-white mb-3 text-lg">El evento comienza en:</p>
      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
        {['días', 'horas', 'minutos', 'segundos'].map((label, index) => {
          const value = Object.values(timeLeft)[index];
          return (
            <div 
              key={label} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-4"
            >
              <div className="text-custom-orange text-2xl md:text-3xl font-bold">
                {value}
              </div>
              <div className="text-white/80 text-xs md:text-sm">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;


import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown = ({
  targetDate
}: CountdownProps) => {
  const { t } = useLanguage();
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
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <p className="text-white mb-4 font-bold text-lg">{t("eventStartsIn")}</p>
      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
        {[
          { value: timeLeft.days, label: 'days' },
          { value: timeLeft.hours, label: 'hours' },
          { value: timeLeft.minutes, label: 'minutes' },
          { value: timeLeft.seconds, label: 'seconds' }
        ].map(({ value, label }) => (
          <div 
            key={label} 
            className="bg-custom-darkPurple/80 backdrop-blur-sm rounded-lg p-2 md:p-4 border border-white/20 shadow-lg"
          >
            <div className="text-custom-orange text-2xl md:text-3xl font-bold">
              {value}
            </div>
            <div className="text-white text-xs md:text-sm font-medium">{t(label)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

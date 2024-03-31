import { useEffect , useState } from "react";

function BitcoinHalvingCountdown() {
  const [countdown, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    const calculateCountdown = () => {

      const now = new Date();
      const halvingDate = new Date('April 22, 2024 08:39:00 UTC');
      const difference = halvingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({days, hours, minutes, seconds});
    };

    calculateCountdown();

    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <div>
      <div className="px-7 py-3 flex flex-col items-center">
        <p className="text-xl font-semibold">
          <span className="text-yellow-400">Bitcoin</span> halving countdown
        </p>

        <p className="text-white text-4xl font-bold">
          {formatUnit(countdown.days)}<span className="text-2xl font-medium">D </span>
          {formatUnit(countdown.hours)}<span className="text-2xl font-medium">H </span>
          {formatUnit(countdown.minutes)}<span className="text-2xl font-medium">M </span>
          {formatUnit(countdown.seconds)}<span className="text-2xl font-medium">S </span>    
        </p>
      </div>
    </div>
  );
}

export default BitcoinHalvingCountdown


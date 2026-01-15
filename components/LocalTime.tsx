'use client';
import { useEffect, useState } from 'react';

export default function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const chicagoTime = new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(chicagoTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-gray-700 dark:text-gray-300">
    🌐Chicago <span className="font-semibold">{time || 'Loading...'}</span>
    </div>
  );
}

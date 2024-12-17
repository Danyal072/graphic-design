'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return <div>{time}</div>;
}

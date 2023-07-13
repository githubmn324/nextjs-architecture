'use client';

import WeatherPage from 'app/view/Weather/WeatherPage';

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-xl flex-1 px-5 py-10">
      <WeatherPage />
    </div>
  );
}

'use client';

import { sampleData } from 'app/sampleData/sample';
import { getWeatherUseCase } from 'app/usecase/weatherUsecase';
import { useCallback, useState } from 'react';

// Presenter層
export const useWeather = () => {
  console.log(`Entering Presenter Layer...`);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(sampleData);
  const [loading, setLoading] = useState(false);

  // Viewの入力イベントの処理
  const onChangeCity = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }, []);
  // Viewの取得イベントの処理
  const onSearchWeather = useCallback(async () => {
    setLoading(true);
    console.log(`start searching. city: ${city}`);
    const result = await getWeatherUseCase(city);
    setWeather(result);
    setLoading(false);
  }, [city]);

  return {
    city,
    weather,
    loading,
    onChangeCity,
    onSearchWeather,
  };
};

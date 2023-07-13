'use client';

import Loading from 'app/loading';
import { type WeatherModel } from 'app/types/WeatherModel';
import SearchBar from 'app/view/Weather/SearchBar';
import WeatherDetails from 'app/view/Weather/WeatherDetails';
import { type NextComponentType } from 'next';

import { useWeather } from './useWeather';

interface Props {
  city: string;
  weather: WeatherModel;
  loading: boolean;
  onChangeCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchWeather: () => void;
}

// 描画のみを行うPresentationalコンポーネント
export const WeatherView = ({ city, weather, loading, onChangeCity, onSearchWeather }: Props) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="absolute inset-x-0 z-[1] bg-black/10">
          <SearchBar city={city} onChangeCity={onChangeCity} onSearchWeather={onSearchWeather} />
          {weather.main && <WeatherDetails data={weather} />}
        </div>
      </div>
    );
  }
};

// ロジックを受け取りPropsを渡す役目Containerコンポーネント
const WeatherPage: NextComponentType = () => {
  const { city, weather, loading, onChangeCity, onSearchWeather } = useWeather();

  return (
    <WeatherView
      city={city}
      weather={weather}
      loading={loading}
      onChangeCity={onChangeCity}
      onSearchWeather={onSearchWeather}
    />
  );
};

export default WeatherPage;

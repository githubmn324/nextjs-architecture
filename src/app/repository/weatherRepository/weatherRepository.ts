import { Convert, type WeatherModel } from 'app/types/WeatherModel';
import axios from 'axios';

// Repository層：UseCase層から呼び出され、外部からデータ取得して返却する。
const weatherRepository = (city: string) => {
  console.log(`Entering Repository Layer...`);

  // 天気情報の取得
  const getWeather = async (): Promise<WeatherModel> => {
    console.log(
      `Start getting weather. city: ${city}. key: ${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`; // TODO: constantsに含める
      const response = await axios.get(url);
      const result = response.data;
      console.log(response.data);
      console.log(`Conver result using Model's converter`);
      const weatherModel = Convert.toWeatherModel(result); // flutterに合わせてrepositoryでJsonをstateのデータ型に変換
      return weatherModel;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message, { cause: error });
      }
      throw new Error('Could not get weather', { cause: error });
    }
  };

  return { getWeather };
};

export default weatherRepository;

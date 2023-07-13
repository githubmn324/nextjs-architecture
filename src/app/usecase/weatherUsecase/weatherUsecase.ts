import { weatherRepository } from 'app/repository/weatherRepository';
import { type WeatherModel } from 'app/types/WeatherModel';
import { capitalize } from 'app/usecase/shared/capitalize'; // TODO: utilフォルダに入れるか検討

// Usecase層：Presentation層から呼び出され、Repository層を介してデータ取得して返却する。
const getWeatherUseCase = async (city: string): Promise<WeatherModel> => {
  // バリデーションなど ex) パラメーターを検証、誤りがある場合Errorをthrowする
  // 今回は、国名が句に一覧に含まれているか、一文字目が大文字で記載されているかなどをチェックする
  // TODO: 一部の例ではEntityにバリデーションを含めている箇所も isServiceLanguage（https://blog.microcms.io/web-frontend-architecture-2/）
  console.log(`Entering Usecase Layer...`);
  console.log(`start validation. city: ${city}`);
  const { isSucceed, capitalizedCity } = validateParams(city);
  console.log(`validation result: ${isSucceed} (${capitalizedCity})`);
  if (!isSucceed) {
    throw Error('都市名が適切ではありません');
  }

  const { getWeather } = weatherRepository(capitalizedCity);
  const weatherModel = await getWeather();
  return weatherModel;
};

const validateParams = (city: string) => {
  if (typeof city !== 'string' && !city) {
    return { isSucceed: false, capitalizedCity: '' };
  } else {
    const capitalizedCity = capitalize(city);
    return { isSucceed: true, capitalizedCity: capitalizedCity };
  }
};

export default getWeatherUseCase;

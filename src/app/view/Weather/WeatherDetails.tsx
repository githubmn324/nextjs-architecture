import { type WeatherModel } from 'app/types/WeatherModel';
import Image from 'next/image';
import React from 'react';

export const WeatherDetails = ({ data }: { data: WeatherModel }) => {
  console.log(data);
  return (
    <div className="relative z-10 m-auto flex h-[79vh] w-full max-w-[500px] flex-col justify-between p-4 text-gray-300">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Bottom */}

      <div className="relative rounded-md bg-black/50 p-8">
        <p className="pb-6 text-center text-2xl">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-2xl font-bold">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{data.wind.speed.toFixed(0)} MPH</p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

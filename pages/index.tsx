interface WeatherProps {
    dataWeather:{
        main: {
            temp: number;
        },
        sys: {
            country: string;
        },
        weather: Array<any>;
    }
}
export default function index(props: WeatherProps) {
  const { dataWeather } = props;
  console.log(dataWeather);

  const newTemp = Math.ceil(dataWeather.main.temp);
  const newC = dataWeather.sys.country;
  const w = dataWeather.weather[0].description;

  return (
    <>
      <h1 className="text-amber-400 text-extrabold text-2xl">{newTemp}</h1>
      <h2>{newC}</h2>
      <h2>{w}</h2>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bandung&appid=d3ebd655946e899a49bd590f42de4eb5&units=metric
`);
  const dataWeather = await res.json();
  return {
    props: {
      dataWeather,
    },
  }
}

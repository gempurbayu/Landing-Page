/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-trailing-spaces */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layouts';
import WeatherIcon from '../assets/svg/sun.svg';

export default function landing() {
  return (
    <Layout>
      <div className="bg-[url('../assets/img/bg-header.png')] w-full h-screen bg-cover font-poppins">
        <div className="container m-auto">
          <div className="hero flex flex-row">
            <div className="left-section w-7/12 h-full py-52">
              <h1 className="font-bold text-6xl my-auto text-gray-600">Hello There,</h1>
              <h1 className="font-bold text-6xl text-blues-300 pb-8"><span className="text-gray-600">I'm</span> Gempur Bayu Aji</h1>
              <p className="w-9/12 text-lg pb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Autem exercitationem vel ab iste veniam distinctio saepe 
                dicta expedita earum temporibus ullam molestias nostrum, 
                quidem omnis, mollitia quam! Mollitia, a illo.
              </p>
              <Link href="#about"><button className="w-44 h-14 bg-blues-300 rounded-full text-white font-regular">Get Started</button></Link>
            </div>
            <div className="right-section w-5/12 h-full flex flex-col pt-12 pl-12">
              <Image src={WeatherIcon} width={500} height={500} className="justify-items-center z-10" />
              <div className="temperatur flex flex-row -mt-16 w-full text-center justify-center pl-12">
                <h2 className="text-[180px] font-semibold text-white opacity-95 text-center leading-none">32</h2>
                <span className="text-6xl pt-5 text-white font-semibold opacity-95">°</span>
              </div>
              <h4 className="text-center text-4xl text-white pl-10">Cloudy</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

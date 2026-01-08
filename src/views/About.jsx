import React from 'react'
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import MissonImage from "../assets/about-img/mission.jpg"
import { FEATURES } from '../data/AboutData.jsx';
import AboutFeatureCard from '../components/AboutFeatureCard.jsx';
import {TEAMDATA } from "../data/AboutData.jsx"
import AboutTeamCards from '../components/AboutTeamCards.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
function About() {
  const navigate=useNavigate();
  return (
    <div className='bg-[#1B3C53] min-h-screen p-[0.1px] box-border'>
      <Navbar/>
      <div className='flex  items-center bg-[#234C6A] mt-[100px]  flex-col gap-7 md:px-10 py-15 justify-center p-5 text-2xl text-white text-center' >
        <h1 className='text-[40px] md:text-[55px] font-bold text-[#E3E3E3]'>About MoveZone</h1>
        <p className='md:text-xl text-lg  text-gray-400  md:w-[60%] w-[90%]'>Your ultimate destination for seamless movie ticket booking. We bring the magic of cinema right to your fingertips.</p>
      </div>
      <div className='flex flex-wrap items-center justify-center md:flex-nowrap  w-[100%] mt-10 gap-5 p-3 '>
        {
          FEATURES.map((item, index)=>{
            const{image, title, description}=item;
            return(
           <AboutFeatureCard {...item} key={index}/>
            )
          })
        }
      </div>

      <div className='flex flex-col md:flex-row my-10 rounded-2xl shadow-2xl bg-[#234C6A] w-full items-center justify-center p-5 gap-5'>
        <div className='flex flex-col gap-5 items-start md:pl-5 text-white justify-start w-full md:w-1/2 '>
          <h1 className='text-3xl font-bold'> Our Mission</h1>
          <p className='text-[17px] text-gray-400'> At MoveZone, we believe that everyone deserves easy access to the magic of movies. Our mission is to revolutionize the way you experience cinema by providing a seamless, intuitive, and delightful ticket booking experience.</p>
          <p className='text-[17px] text-gray-400'>Whether you're planning a date night, a family outing, or a solo adventure into the world of film, MoveZone is here to make your experience unforgettable from the moment you book to the final credits.</p>
          <Button title={"Start Booking "} variant='primary' size='lg' onClick={()=>navigate("/movie")}/>
        </div>
        <div className='md:w-1/2 w-full py-5 flex items-center justify-center'>
    <img src={MissonImage} alt="Mission Image" className='rounded-2xl w-full max-w-[500px] object-cover' />
  </div>
      </div>

      <div>
        <h1 className='text-center text-3xl mt-15 font-bold text-[#E3E3E3]'>MEET OUR TEAM</h1>
        <div  className='flex flex-wrap items-center justify-center md:flex-nowrap  w-[100%] mt-10 gap-7 p-3 '>
        
          {
            TEAMDATA.map((item, index)=>{
             return(
               <AboutTeamCards {...item} key={index} />
             )
            })
          }
      </div>
      </div>
      <div className='my-15 mx-5 flex flex-col gap-6 text-2xl shadow-2xl shadow-gray-900  bg-[#234C6A] items-center justify-center rounded-2xl p-10 text-white '>
        <h1 className='text-[27px] text-center text-[#E3E3E3] font-bold'>Ready for Movie Magic?</h1>
        <p className='text-[20px] text-gray-400 md:w-[60%] text-center'>Join millions of movie lovers who trust MoveZone for their cinema experience. Start exploring now!</p>
        <Button title="Browse Movies" variant='primary' size='lg' onClick={()=> navigate("/movie")} />
      </div>
      <Footer/>
    </div>
  )
}

export default About
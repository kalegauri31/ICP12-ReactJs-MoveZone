import React from 'react'
import { Film,Users, ShieldCheck, MapPin } from 'lucide-react'
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const features=[
  {
    image:<Film size={33}/>,
    title:"500+",
    description:"Movies Available"
  },
  {
    image:<Users size={33}/>,
    title:"1M+",
    description:"Happy Customers"
  },{
    image:<ShieldCheck size={33} />,
    title:"50+",
    description:"Partner Cinemas"
  },{
    image:<MapPin size={33}/>,
    title:"100+",
    description:"Cities Covered"
  }
]

function About() {
  const navigate=useNavigate();
  return (
    <div className='bg-[#1B3C53] min-h-screen p-1'>
      <div className='flex  items-center bg-[#234C6A] mt-18  flex-col gap-7 md:px-10 py-15 justify-center p-5 text-2xl text-white text-center' >
        <h1 className='text-[40px] md:text-[55px] font-bold text-[#E3E3E3]'>About MoveZone</h1>
        <p className='md:text-xl text-lg  text-gray-400  md:w-[60%] w-[90%]'>Your ultimate destination for seamless movie ticket booking. We bring the magic of cinema right to your fingertips.</p>
      </div>
      <div className='flex flex-wrap md:flex-nowrap  w-[100%] mt-10 gap-5 p-3 '>
        {
          features.map((item, index)=>{
            const{image, title, description}=item;
            return(
            <div className='flex flex-col items-center justify-center gap-3 rounded-2xl shadow-3xl shadow-[gray-500] w-[45%] md:w-[30%] text-white p-5 bg-[#234C6A]'>
              <p className='text-gray-500'>{image}</p>
              <h1 className='text-[#E3E3E3] text-3xl font-bold'>{title}</h1>
              <p className='text-gray-400 '>{description}</p>
            </div>
            )
          })
        }
      </div>

      <div className='flex flex-col md:flex-row my-10 mx-5 bg-[#234C6A] w-full items-center justify-center p-5 gap-5'>
        <div className='flex flex-col gap-5 items-start px-7 text-white justify-start'>
          <h1 className='text-2xl font-bold'> Our Mission</h1>
          <p>At MoveZone, we believe that everyone deserves easy access to the magic of movies. Our mission is to revolutionize the way you experience cinema by providing a seamless, intuitive, and delightful ticket booking experience.</p>
          <p>Whether you're planning a date night, a family outing, or a solo adventure into the world of film, MoveZone is here to make your experience unforgettable from the moment you book to the final credits.</p>
          <Button title={"Start Booking "} variant='primary' size='md' onClick={()=>navigate("/movie")}/>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
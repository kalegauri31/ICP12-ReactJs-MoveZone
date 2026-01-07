import { Clock, Dot, HeartIcon } from 'lucide-react'; 
import { useNavigate } from "react-router";
import Button from './Button';

function MovieCard({
    image, name, type, language, year, duration, description, id
}) {
    let navigate=useNavigate();
    return (
        <div className='md:w-[30%] w-[90%] bg-[#234C6A]  hover:shadow-[#0b1821] hover:translate-y-[-5px] duration-300 rounded-[10px] overflow-hidden shadow-lg'>
            <div className=" h-[320px] overflow-hidden" >
              <img  
                    src={image}
                    alt={name}
                    className="w-full h-full  cursor-pointer hover:scale-[1.03] duration-300  rounded-[10px]"
                />
            </div>
            <div className="flex flex-col border-t border-t-[#456882] gap-3 items-start text-[#E3E3E3] p-5">
                <div className='flex flex-col gap-3  relative'>
                    <h2 className='text-[22px]! font-bold flex items-center justify-between w-full'>{name} <span className='cursor-pointer absolute right-[0px]'>{<HeartIcon/>}</span></h2>
                    <p className='text-gray-300 text-[14px] leading-[1.7]'>{description}</p>
                </div>
                <div className='flex text-gray-400 justify-between gap-4 items-center text-[16px]'>
                   <span className='flex items-center justify-center gap-1 text-[16px]'><Clock size={16} /> {duration}</span>
                <span className='flex items-center justify-center  text-[16px]'><Dot />{year}</span>
                
                </div>
                <div className='flex items-center gap-5 text-gray-400'>
                <span className='border rounded-2xl px-2 py-1 border-gray-500 bg-[#2c506b]'>{type}</span>
                <span className='border rounded-2xl px-2 py-1 border-gray-500 bg-[#2c506b]'>{language}</span>
                </div>
                 <div className='my-2'>
                    <Button title={"Book Now"} variant='primary' size='lg' onClick={()=>{
                        navigate("/booking")
                    }}/>
                </div>
               
            </div>
        </div>
    )
}

export default MovieCard;
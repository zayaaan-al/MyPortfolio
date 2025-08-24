import { h1 } from 'framer-motion/client';
import React from 'react';
import { IconType } from 'react-icons';
type props ={
    role: string;
    Icon:IconType;
    date? :string;
    description?:string;
}

const ResumeCard = ({Icon,role,date,description}:props) => {
  return (
    <div className=' mb-6 '>
      <div className='flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8
      rounded-md'>
        <div className=' sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center
         flex-col'>
            <Icon className=' sm:w-8 sm:h-8 w-6 h-6 text-white'/>
         </div>
         <div className=' flex-1'>
            
            <h1 className=' text-gray-200 text-xl sm:text-2xl font-semibold'>
                {role}
            </h1>
            <p className=' mt-2 text-gray-300 text-sm sm:text-base pt-3'>
               {description}
               </p>
            {date && (
                <h1 className=' mt-8 mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600
                w-fit sm:text-lg text-sm font-bold'>{date}
                </h1>
            )}   
         </div>
      </div>
    </div>
  );
}

export default ResumeCard;

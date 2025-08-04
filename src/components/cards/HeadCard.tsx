"use client"
import type { FC } from 'react';
import {motion } from "framer-motion"
import Image from 'next/image';
import { BlogCardInfo } from '../../types';

interface HeadCardProps {
   
    blogCardInfo : BlogCardInfo;
    width :string;
    height : string;
}

const HeadCard: FC<HeadCardProps> = ({ blogCardInfo,width,height}) => {
        return (
<motion.div className={`relative ${ width !== "" ? width : "w-full"} ${ height !== "" ? height : "h-full"} text-[var(--text-element)] overflow-hidden rounded-6xl`}
    initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
         
          viewport={{ once: true }}
    >
      {/* Image */}
      <motion.div className="w-full h-full relative "
       whileHover={{ scale: 1.07 }}
      >
        <Image
          src={blogCardInfo.cover}
          alt={blogCardInfo.title}
          fill
          className="object-cover "
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>

        {/* info container */}
      <div className='absolute bottom-0 left-5 '>
              {/* date | category  */}
            <div className='flex justify-between items-center px-2'>
                <div>{blogCardInfo.date}</div>
                <div className='italic'>{blogCardInfo.category}</div>
            </div>
            {/* title */}
            <div className="p-4 flex-1">
                <p className="font-semibold">{blogCardInfo.title.length > 150 ? `${blogCardInfo.title.slice(0,150)}...` : blogCardInfo.title}</p>
            </div>
      </div>
      

    </motion.div>
        );
}
export default HeadCard;
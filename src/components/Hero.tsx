import type { FC } from 'react';
import HeadCard from './cards/HeadCard';
import { BlogCardInfo } from '../../types';

const HeroCardInfo : BlogCardInfo = {
    date : "Apr. 14th,2025",
    category : "Programming",
    title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum d Ad debitis odio eveniet iusto saepe fugiat!",
    link : "/categories/blog_detail",
    author : "James smith",
    cover : "./product1.jpg"

    

}

const Hero: FC = () => {
        return (
            <div className='w-full min-h-screen flex items-center flex-col bg-[var(--background)] pt-30'>
                <h1 className='font-black text-6xl mb-10'>Gaming Blog</h1>
                <h2 className='mb-10'>Lorem ipsum d Ad debitis odio eveniet iusto saepe fugiat!</h2>
                <div className='w-[600px] bg-[var(--background-element-3)] h-[350px] '>
                <HeadCard blogCardInfo={HeroCardInfo} width='' height=''/>
                </div>
            </div>
        );
}
export default Hero;
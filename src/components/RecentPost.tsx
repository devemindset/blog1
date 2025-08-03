import type { FC } from 'react';
import { BlogCardInfo } from '../../types';
import HeadCard from './cards/HeadCard';

const recentPosts : BlogCardInfo[] = [
    {
    date : "Apr. 14th,2025",
    category : "Programming",
    title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum d Ad debitis odio eveniet iusto saepe fugiat!",
    link : "/categories/blog_detail",
    author : "James smith",
    cover : "./product1.jpg"

    

},
    {
    date : "Apr. 14th,2025",
    category : "Programming",
    title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum d Ad debitis odio eveniet iusto saepe fugiat!",
    link : "/categories/blog_detail",
    author : "James smith",
    cover : "./product1.jpg"

    

},
    {
    date : "Apr. 14th,2025",
    category : "Programming",
    title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum d Ad debitis odio eveniet iusto saepe fugiat!",
    link : "/categories/blog_detail",
    author : "James smith",
    cover : "./product1.jpg"

    

},
    {
    date : "Apr. 14th,2025",
    category : "Programming",
    title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum d Ad debitis odio eveniet iusto saepe fugiat!",
    link : "/categories/blog_detail",
    author : "James smith",
    cover : "./product1.jpg"

    

},
    {
    date : "Apr. 14th,2025",
    category : "Programming",
    title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum d Ad debitis odio eveniet iusto saepe fugiat!",
    link : "/categories/blog_detail",
    author : "James smith",
    cover : "./product1.jpg"

    

},
    {
    date : "Apr. 14th,2025",
    category : "Programming",
    title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum d Ad debitis odio eveniet iusto saepe fugiat!",
    link : "/categories/blog_detail",
    author : "James smith",
    cover : "./product1.jpg"

    

},


]

const RecentPost: FC = () => {
        return (
            <section className='my-20'>
                <h2 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Recent Posts</h2>
                <div className='flex flex-wrap justify-center w-full h-full gap-5 my-10'>

                
                
            {
             
                recentPosts.map((post,index) => ( 
                    <HeadCard key={index} blogCardInfo={post} width='w-[450px]' height='h-[250px]'/>
                ))
             
            }
            </div>
            </section>
        );
}
export default RecentPost;
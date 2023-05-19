import React from 'react'
import { lazy, Suspense }  from 'react';
import Loader from '../components/Loader';
const Navbar = lazy(() => import('../components/Navbar'));
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsFeedPage = () => {
    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
      fetchNewsFeed();
    }, []);
  
    const fetchNewsFeed = async () => {
      try {
        const response = await axios.get('https://celinaplains-api.onrender.com/news-feed');
        setNewsFeed(response.data);
      } catch (error) {
        console.error('Error fetching news feed:', error);
      }
    };
  return (
    <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="flex flex-col bg-background1 bg-cover pt-[100px] px-10">
            <span className='text-2xl font-semibold text-white font-poppins'>
                Celina Plains Imus<br/>
            </span>
            <div className="w-3/4 p-2 bg-white">
            <h1 className="mb-4 text-2xl font-bold">News Feed</h1>
            {newsFeed.map((item) => (
                <div key={item.id} className="flex mb-4">
                <h2 className="text-lg font-bold">{item.postTitle}</h2>
                <p className="text-gray-500">{item.postCaption}</p>
                <p className="text-gray-500">{new Date(item.createdAt).toLocaleString()}</p>
                {item.data && (
                    <img src={item.data} alt="News Feed" className="mt-2 w-[512px]" />
                )}
                </div>
            ))}
            </div>
        </div>
    </Suspense>
  )
}

export default NewsFeedPage

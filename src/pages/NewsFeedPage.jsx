import React from 'react';
import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';
const Navbar = lazy(() => import('../components/Navbar'));
import { useState, useEffect } from 'react';
import axios from 'axios';
import bg from "../assets/bg-1.jpg"

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
<<<<<<< HEAD
      <img src={bg} alt="Background Image" className="absolute w-screen h-full bg-cover -z-20"/>
      <Navbar />
      <div className="flex flex-col h-screen pt-[100px] px-10">
        <span className="text-2xl font-semibold text-white font-poppins">Celina Plains Imus</span>
        <div className="w-1/4 p-4 overflow-y-auto bg-white rounded-xl">
          <h1 className="mb-4 text-2xl font-bold">News Feed</h1>
          {newsFeed.map((item) => (
            <div key={item.id} className="flex mb-4">
              {item.data && (
                <img
                  src={item.data}
                  alt="News Feed"
                  className="object-cover w-[450px] mr-4 rounded-lg"
                />
              )}
              <div className="flex flex-col">
=======
        <Navbar />
        <div className="flex flex-col bg-background1 bg-cover pt-[100px] px-10">
            <span className='text-2xl font-semibold text-white font-poppins'>
                Celina Plains Imus<br/>
            </span>
            <div className="w-3/4 p-2 bg-white">
            <h1 className="mb-4 text-2xl font-bold">News Feed</h1>
            {newsFeed.map((item) => (
                <div key={item.id} className="flex mb-4">
>>>>>>> 57d864cded357d9e5bd9786250fb5a4874f38033
                <h2 className="text-lg font-bold">{item.postTitle}</h2>
                <p className="font-medium text-slate-800">{item.postCaption}</p>
                {item.createdAt && (
                  <p className="text-gray-500 text-md">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default NewsFeedPage;

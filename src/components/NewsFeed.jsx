import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const NewsFeed = () => {
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
<<<<<<< HEAD
    <div className="z-40 w-full h-screen p-8 mx-10 overflow-y-auto bg-white rounded-2xl">
=======
    <div className="w-full p-8 mx-2 overflow-x-auto bg-white md:w-4/5 lg:w-2/3 sm:mx-6 md:mx-10 rounded-2xl drop-shadow-2xl">
>>>>>>> 57d864cded357d9e5bd9786250fb5a4874f38033
      <span className='text-2xl font-semibold font-poppins'>
        Celina Plains Imus<br/>
      </span>
      <h1 className="mb-4 text-2xl font-bold">News Feed</h1>
      {newsFeed.map((item) => (
        <div key={item.id} className="mb-4">
          {item.data && (
            <img src={item.data} alt="News Feed" className="rounded-xl mt-2 w-full md:w-[512px]" />
          )}
          <div>
            <h2 className="text-lg font-bold">{item.postTitle}</h2>
            <p className="text-gray-500">{item.postCaption}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default NewsFeed

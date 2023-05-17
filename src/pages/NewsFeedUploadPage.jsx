import React from 'react'

import { lazy, Suspense } from 'react'
import Loader from '../components/Loader';
import { motion }  from "framer-motion"
import bg from "../assets/bg-1.jpg"

const DashboardNav = lazy(() => import('../components/DashboardNav'));
const NewsFeedUploader = lazy(() => import('../components/NewsFeedUploader'));

const NewsFeedUploadPage = () => {
  return (
    <Suspense fallback={<Loader />}>
        <img src={bg} alt="Background Image" className="absolute w-screen h-full bg-cover"/>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "fade",
              delay: "0.5",
              duration: "1.4"
            }}
        >
            <DashboardNav />
            <div className="pt-[100px] flex justify-center">
                <NewsFeedUploader />
            </div>
        </motion.div>
    </Suspense>
  )
}

export default NewsFeedUploadPage

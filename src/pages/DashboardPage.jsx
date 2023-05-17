import React from 'react';
import DashboardNav from '../components/DashboardNav';
import DisplayAppointments from '../components/DIsplayAppointments';
import NewsFeed from '../components/NewsFeed';
import bg from "../assets/bg-1.jpg"
import { motion } from "framer-motion"

/**
 * The function returns a JSX element representing a dashboard page with a navigation bar, appointments
 * display, and news feed.
 * @returns The `DashboardPage` component is being returned, which contains a `DashboardNav` component
 * and two child components `DisplayAppointments` and `NewsFeed` wrapped in a `div` element. The
 * `DashboardNav` component is a navigation bar, while `DisplayAppointments` and `NewsFeed` are
 * components that display appointments and news feed respectively. The `className` attribute is used
 * to
 */
function DashboardPage() {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "fade",
        delay: "0.5",
        duration: "1.4"
      }}
      className="flex h-full font-poppins"
      style={{ overflow: "hidden" }}>
      <img src={bg} alt="Background Image" className="absolute w-screen h-full bg-cover"/>
      <DashboardNav />
      <div className="pt-[80px]">
        <div className="flex flex-row overflow-hidden justify-around px-[200px]">
          <DisplayAppointments />
          <NewsFeed />
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardPage;

'use client';

import Image from 'next/image';
import Footer from "../components/ui/footer";
import NavBar from "../components/ui/navbar";

export default function Home() {
const players = [
    {
        id: 1,
        name: 'Chamika Chandimal',
        role: 'Batsman',
        team: 'University of the Visual & Performing Arts',
        image: '/man10.jpeg',
        isOnSale: false,
        totalRuns: 1200,
    },
    {
        id: 2,
        name: 'Avishka Mendis',
        role: 'Batsman',
        team: 'Eastern University',
        image: '/man10.jpeg',
        isOnSale: false,
        totalRuns: 950,
    },
    {
        id: 3,
        name: 'Charith Shanaka',
        role: 'All-rounder',
        team: 'University of Colombo',
        image: '/man10.jpeg',
        isOnSale: false,
        totalRuns: 800,
    },
    {
        id: 4,
        name: 'Sammu Sandakan',
        role: 'Batsman',
        team: 'University of Ruhuna',
        image: '/man10.jpeg',
        isOnSale: false,
        totalRuns: 1100,
    },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {/* Header */}
        <NavBar/>
        <div className="col-span-full">
            <h1 className="text-2xl font-semibold text-gray-600 mb-6">Player’s Profile</h1>
        </div>
      {players.map((player) => (
        <div key={player.id} className="border border-gray-300 rounded-lg p-4 bg-gray-100 relative">
          <div className="flex justify-center relative">
            <Image src={player.image} alt={player.name} width={200} height={250} />
            <div className="absolute top-2 right-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-2">{player.name}</h3>
          <p className="text-sm text-gray-600">{player.role}</p>
          <p className="text-md text-gray-800">{player.team}</p>
            <p className="text-md text-gray-800">Total Runs: {player.totalRuns}</p>
          <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-600">
            Add to Team
          </button>
        </div>
      ))}
      
       
          {/* Pagination */}
          <div className="flex justify-end mt-6 pr-4">
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden shadow-md">
              <button className="px-4 py-2 border-r border-gray-200 bg-white hover:bg-gray-200">Previous</button>
              <button className="px-4 py-2 bg-gray-500 text-white font-semibold">1</button>
              <button className="px-4 py-2 border-l border-gray-200 bg-white hover:bg-gray-200">2</button>
              <button className="px-4 py-2 border-l border-gray-200 bg-white hover:bg-gray-200">Next</button>
            </div>
          </div>
        <div className="col-span-full">
                <Footer />
              </div>

    </div>
  );
}
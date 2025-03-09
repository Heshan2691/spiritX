"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Trophy, CheckSquare, Plus as PlusIcon } from "lucide-react";
import Footer from "../components/ui/footer";
import NavBar from "../components/ui/navbar";

export default function CricketTeam() {
  const router = useRouter();

  const players = [
    { id: "#001", name: "Virat Kohli", role: "Batsman",university:"University of moratuwa", image: "/man4.jpeg",runs:530 },
    { id: "#002", name: "Jasprit Bumrah", role: "Bowler",university:"University of ruhuna", image: "/man4.jpeg", runs:210 },
    { id: "#003", name: "Ben Stokes", role: "All-Rounder",university:"University of colombo", image: "/man5.jpeg",runs:780 },
    { id: "#004", name: "Steve Smith", role: "Batsman",university:"University of moratuwa", image: "/man5.jpeg",runs:780 },
    { id: "#005", name: "Rashid Khan", role: "Bowler",university:"University of moratuwa", image: "/man5.jpeg",runs:329 },
    { id: "#006", name: "MS Dhoni", role: "Wicketkeeper",university:"University of peradeniya", image: "/man4.jpeg",runs:657 },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex">
        <NavBar />
        <div className="min-h-screen bg-gray-50 p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-600">Budget Overview</h1>
            <input
              type="text"
              placeholder="🔍 Search"
              className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          

          {/* Player List Table */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-600">Budget Overview</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-md hover:bg-blue-600">
                <PlusIcon className="h-5 w-5" /> Add Member
              </button>
            </div>
            

            <table className="w-full border-collapse text-gray-600">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3"><CheckSquare className="w-5 h-5 text-gray-400" /></th>
                  <th className="p-3">ID</th>
                  <th className="p-3">Player Name</th>
                  <th className="p-3">University</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Total Points</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3"><input type="checkbox" className="w-5 h-5" /></td>
                    <td className="p-3">{player.id}</td>
                    <td className="p-3 flex items-center gap-15">
                      <Image src={player.image} alt={player.name} width={30} height={30} className="rounded-full" />
                      {player.name}
                    </td>
                    <td className="p-3">{player.university}</td> 
                    <td className="p-3">{player.role}</td>
                    <td className="p-3">{player.runs}</td>
                  </tr>
                ))}
                <tr className="border-t bg-gray-100 font-semibold">
                  <td className="p-3" colSpan={5}>Total Points</td>
                  <td className="p-3">
                    {players.reduce((total, player) => total + player.runs, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <Footer />
      </div>
    </div>
   
  );
}


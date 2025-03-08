"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/ui/footer";

export default function Leaderboard() {
  const router = useRouter();

  const [leaderboardData] = useState([
    { rank: 1, username: "CricketKing", points: 1200 },
    { rank: 2, username: "SixMachine", points: 1150 },
    { rank: 3, username: "SpinMaster", points: 1100 },
    { rank: 4, username: "CoverDrivePro", points: 1080 },
    { rank: 5, username: "FastBowler22", points: 1050 },
  ]);

  const loggedInUser = { username: "CoverDrivePro", rank: 4, points: 1080 };
  const [filter, setFilter] = useState("overall");

    function compareTeams(): void {
        // For now, just log a message to the console
        console.log("Compare teams functionality is not yet implemented.");
    }

  return (
    <div className="flex">
    <div className="min-h-screen bg-gray-50 p-6 flex-1">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-600">🏆 Leaderboard</h1>
      </div>

      {/* Filters and Comparison UI */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex gap-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">All</button>
        <select
          className="px-4 py-2 rounded-md bg-gray-200 border border-gray-300 focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="overall">Overall</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
        <select
          className="px-4 py-2 rounded-md bg-gray-200 border border-gray-300 focus:outline-none"
        >
          <option>Filter by</option>
          <option>Score</option>
          <option>Rank</option>
        </select>
        </div>
        <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type username to compare"
          className="border px-3 py-2 rounded-md focus:outline-none"
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={() => compareTeams()}
        >
          Compare
        </button>
        </div>
      </div>

      {/* Leaderboard Table */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <table className="w-full border-collapse text-gray-600">
      <thead>
        <tr className="bg-gray-100 text-left text-gray-600">
        <th className="p-3">Rank</th>
        <th className="p-3">Username</th>
        <th className="p-3">Points</th>
        <th className="p-3 text-right pr-10">Action</th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((user) => (
        <tr
        key={user.rank}
        className={user.username === loggedInUser.username ? "bg-blue-100 font-bold" : ""}
        >
        <td className="p-3">{user.rank}</td>
        <td className="p-3">{user.username}</td>
        <td className="p-3">{user.points}</td>
        <td className="p-3 flex gap-2 justify-end">
          <button className="p-2 bg-blue-300 text-white rounded-md hover:bg-blue-600">
            <span className="h-5 w-5">👁️</span>
          </button>
        </td>
        </tr>
        ))}
      </tbody>
      </table>

      <div className="mt-6 text-center text-lg font-semibold">
      Your Rank: <span className="text-blue-600">{loggedInUser.rank}</span> | Points: <span className="text-green-600">{loggedInUser.points}</span>
      </div>
    </div>
      <Footer />
    </div>
      
    </div>
  );
}

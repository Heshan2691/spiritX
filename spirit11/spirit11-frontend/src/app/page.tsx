"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the LoginPage component to avoid SSR issues
const LoginPage = dynamic(() => import("./(auth)/login/page"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Spirit11</h1>
      
      {/* Option 1: Link to the login page */}
      <div className="mb-8">
        <Link href="/login" className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Go to Login Page
        </Link>
      </div>
      
      {/* Option 2: Directly embed the login component */}
      
    </div>
  );
}

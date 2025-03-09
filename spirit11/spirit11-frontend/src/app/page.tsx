"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Footer from "./components/ui/footer";
import NavBar from "./components/ui/navbar";
// Dynamically import the LoginPage component to avoid SSR issues
const LoginPage = dynamic(() => import("./(auth)/login/page"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      
      {/* Banner */}
      <NavBar/>
      <div className="banner w-full h-150 overflow-hidden relative">
        <img src="/cricketnew.jpg" alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 ml-30">
          <h2 className="text-white text-3xl font-bold">Welcome to Spirit11</h2>
          <Link href="/login" className="mt-2 inline-block bg-gray-100 text-black px-6 py-4 font-bold rounded-full hover:bg-gray-600 transition">
        Get Started
          </Link>
        </div>
      </div>
      
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-4">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Individual Travel with Lukevent
        </p>
        <h2 className="text-4xl font-bold">“Seamless Is Our Byword”</h2>
        <p className="text-gray-700">
          Seamless service is our top priority, so that you can relax and enjoy your experience to the fullest. Priding ourselves on flexibility, we will turn your requirements and wishes into reality at all times. In doing so, we make sure that we support local companies and act sustainably, working directly with local partners.
        </p>
        <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Build now
        </button>
      </div>

      {/* Images Section */}
      <div className="lg:w-1/2 flex space-x-4 mt-8 lg:mt-0">
        <div className="w-1/2">
          <Image 
        src="/stadium.webp" 
        alt="Travel Experience"
        width={300} 
        height={300} 
        className="rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <Image 
        src="/ground.webp" 
        alt="Dining Experience"
        width={300} 
        height={200} 
        className="rounded-lg"
          />
        </div>
      </div>
    </section>
      
      {/* Option 2: Directly embed the login component */}
      <div className="w-full">
        <Footer />
      </div>
      
    </div>
  );
}

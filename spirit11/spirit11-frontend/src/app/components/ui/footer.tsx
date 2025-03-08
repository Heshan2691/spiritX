export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          
          <br></br>
          <div className="w-full mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-center md:text-left pl-20 text-gray-300">
            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Criclytics™</p>
              <p className="hover:text-white cursor-pointer">Match Schedule</p>
              <p className="hover:text-white cursor-pointer">Fantasy Center</p>
              <p className="hover:text-white cursor-pointer">All Series</p>
              <p className="hover:text-white cursor-pointer">Cricket News</p>
              <p className="hover:text-white cursor-pointer">Cricket Videos</p>
            </div>
            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Players</p>
              <p className="hover:text-white cursor-pointer">Teams</p>
              <p className="hover:text-white cursor-pointer">Stadiums</p>
              <p className="hover:text-white cursor-pointer">Rankings</p>
              <p className="hover:text-white cursor-pointer">Records</p>
              <p className="hover:text-white cursor-pointer">Play Responsibly</p>
            </div>
            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
              <p className="hover:text-white cursor-pointer">Terms of Use</p>
              <p className="hover:text-white cursor-pointer">Cookie Policy</p>
              <p className="hover:text-white cursor-pointer">Security</p>
              <p className="hover:text-white cursor-pointer">Legality</p>
              <p className="hover:text-white cursor-pointer">Contact Us</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          ©2025 cricket.com | All rights reserved
        </div>
      </footer>
    );
  }
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          
          <br></br>
          <div className="w-full mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-center md:text-left pl-20">
            <div>
              <p>Criclytics™</p>
              <p>Match Schedule</p>
              <p>Fantasy Center</p>
              <p>All Series</p>
              <p>Cricket News</p>
              <p>Cricket Videos</p>
            </div>
            <div>
              <p>Players</p>
              <p>Teams</p>
              <p>Stadiums</p>
              <p>Rankings</p>
              <p>Records</p>
              <p>Play Responsibly</p>
            </div>
            <div>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Cookie Policy</p>
              <p>Security</p>
              <p>Legality</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          ©2025 cricket.com | All rights reserved
        </div>
      </footer>
    );
  }
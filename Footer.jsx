export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 min-h-[400px] relative rounded-t-[3rem]  ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Branding + Newsletter */}
        <div className="space-y-6">
          <div>
            <img src="/logo.svg" alt="Al Fateen Logo" className="h-10 mb-2" />
            <p className="text-sm text-gray-400">CLEANING SERVICES & PEST CONTROL</p>
          </div>

          <form className="flex items-center rounded-full overflow-hidden border border-gray-600 bg-white shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button type="submit" className="bg-[#1f0a3d] text-white px-4 py-2 hover:bg-[#2a0d53] transition">
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Solutions</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Team</a></li>
            <li><a href="#" className="hover:text-white">Career</a></li>
          </ul>
        </div>

        {/* Documentation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Documentation</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Help Centre</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Al Fateen. All rights reserved.</p>
        <a href="#" className="hover:text-white mt-2 md:mt-0">Terms & Conditions</a>
      </div>
    </footer>
  );
}

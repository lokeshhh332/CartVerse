function Navbar() {
  return (
    <nav className="w-full border-b border-[#1f1f1f] bg-black sticky top-0 z-50 backdrop-blur-lg">

      <div className="max-w-[1500px] mx-auto px-16 py-6 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-4xl font-extrabold tracking-tight cursor-pointer">

          Cart<span className="text-gray-400">Verse</span>

        </h1>

        {/* Search Bar */}

        <div className="hidden lg:flex items-center bg-[#111] border border-[#222] rounded-2xl px-5 py-4 w-[450px] hover:border-[#444] duration-300">

          {/* Search Icon */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m0 0A7.95 7.95 0 1 0 5.4 5.4a7.95 7.95 0 0 0 11.25 11.25Z"
            />
          </svg>

          {/* Input */}

          <input
            type="text"
            placeholder="Search premium products..."
            className="bg-transparent outline-none ml-4 w-full text-white placeholder:text-gray-500 text-lg"
          />

        </div>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-14 uppercase tracking-[4px] text-sm font-medium text-gray-300">

          <a
            href=""
            className="hover:text-white duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-2 hover:after:w-full after:duration-300"
          >
            Home
          </a>

          <a
            href=""
            className="hover:text-white duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-2 hover:after:w-full after:duration-300"
          >
            Shop
          </a>

          <a
            href=""
            className="hover:text-white duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-2 hover:after:w-full after:duration-300"
          >
            Categories
          </a>

          <a
            href=""
            className="hover:text-white duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-2 hover:after:w-full after:duration-300"
          >
            Orders
          </a>

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-5">

          {/* Wishlist */}

          <button className="border border-[#222] bg-[#111] px-5 py-3 rounded-2xl text-sm uppercase tracking-[2px] hover:bg-white hover:text-black duration-300">

            Wishlist

          </button>

          {/* Cart */}

          <button className="border border-[#222] bg-[#111] px-5 py-3 rounded-2xl text-sm uppercase tracking-[2px] hover:bg-white hover:text-black duration-300">

            Cart

          </button>

          {/* Login */}

          <button className="bg-white text-black px-7 py-3 rounded-2xl font-semibold uppercase tracking-[2px] hover:scale-105 duration-300">

            Login

          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
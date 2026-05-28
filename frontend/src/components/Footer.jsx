function Footer() {
  return (
    <footer className="mt-24 border-t border-[#1a1a1a] px-8 py-16">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h1 className="text-4xl font-bold">
            Cartify
          </h1>

          <p className="text-gray-400 mt-5 leading-8">
            Premium lifestyle products designed for modern living.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Company
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Blog</a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Support
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">
            <a href="">Help Center</a>
            <a href="">Returns</a>
            <a href="">Contact</a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-5">
            Newsletter
          </h2>

          <div className="flex border border-[#222] rounded-2xl overflow-hidden">
            <input
              type="text"
              placeholder="Enter email"
              className="bg-transparent px-5 py-4 outline-none w-full"
            />

            <button className="bg-white text-black px-6 font-semibold">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-[#1a1a1a] mt-16 pt-8 text-center text-gray-500">
        © 2026 Cartify. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
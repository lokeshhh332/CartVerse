function Hero() {
  return (
    <section className="px-6">

      <div
        className="relative h-[580px] rounded-[35px] overflow-hidden flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}

        <div className="relative z-10 px-14 max-w-2xl">

          <p className="uppercase tracking-[5px] text-gray-300 text-sm">
            CartVerse Collection
          </p>

          <h1 className="text-6xl leading-[70px] font-extrabold mt-6">
            Premium Fashion Collection
          </h1>

          <p className="text-lg text-gray-300 mt-7 leading-9">
            Discover luxury streetwear and modern essentials crafted for everyday style and elegance.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-10">

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300">

              Shop Now

            </button>

            <button className="border border-white/20 bg-white/10 px-8 py-4 rounded-2xl hover:bg-white/20 duration-300">

              Explore

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
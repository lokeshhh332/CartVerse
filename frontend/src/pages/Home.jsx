import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import TrendingProducts from "../components/TrendingProducts"

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}

      <Navbar />

      {/* Main Container */}

      <main className="max-w-[1350px] mx-auto">

        {/* Hero */}

        <div className="mt-6">
          <Hero />
        </div>

        {/* Features */}

        <div className="mt-14">
          <Features />
        </div>

        {/* Products */}

        <div className="mt-20 pb-20">
          <TrendingProducts />
        </div>

      </main>

    </div>
  )
}

export default Home
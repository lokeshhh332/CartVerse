function Features() {
  return (
    <section className="px-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card */}

        <div className="bg-[#111] border border-[#222] rounded-[28px] p-8 hover:-translate-y-1 duration-300">

          <h1 className="text-2xl font-bold">
            Premium Products
          </h1>

          <p className="text-gray-400 mt-5 leading-8">
            Carefully selected modern products designed for quality and luxury.
          </p>

        </div>

        {/* Card */}

        <div className="bg-[#111] border border-[#222] rounded-[28px] p-8 hover:-translate-y-1 duration-300">

          <h1 className="text-2xl font-bold">
            Fast Delivery
          </h1>

          <p className="text-gray-400 mt-5 leading-8">
            Quick and reliable shipping with secure packaging.
          </p>

        </div>

        {/* Card */}

        <div className="bg-[#111] border border-[#222] rounded-[28px] p-8 hover:-translate-y-1 duration-300">

          <h1 className="text-2xl font-bold">
            Secure Payments
          </h1>

          <p className="text-gray-400 mt-5 leading-8">
            Experience safe and trusted transactions every time.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Features
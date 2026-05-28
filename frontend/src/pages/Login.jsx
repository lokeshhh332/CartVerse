function Login() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white">

      <div className="bg-[#111] border border-[#222] rounded-[30px] p-10 w-[450px]">

        <h1 className="text-5xl font-bold mb-10 text-center">
          Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1a1a1a] p-5 rounded-2xl outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#1a1a1a] p-5 rounded-2xl outline-none"
          />

          <button className="w-full bg-white text-black py-5 rounded-2xl font-semibold hover:scale-105 duration-300">
            Login
          </button>

        </div>

      </div>

    </div>
  )
}

export default Login
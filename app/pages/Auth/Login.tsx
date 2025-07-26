import { useNavigate, Link } from "react-router";
import React from "react";

export default function Auth() {
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Here you would handle authentication logic
    navigate("/home");
  }

  return (
    <section className="w-200 ml-55 mt-3 rounded-2xl backdrop-blur-lg bg-white/10 p-8 border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="material-symbols-outlined mr-2"></span>
        Login
      </h2>
      <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(147,197,253,0.3)] hover:border-blue-300/40 max-w-md mx-auto">
        <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-violet-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-20 blur-xl"></div>
        <h3 className="text-xl font-medium mb-6 text-center">Welcome Back</h3>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-100">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-white" placeholder="name@company.com" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-blue-100">Password</label>
              <a href="#" className="text-xs text-blue-300 hover:text-blue-200 transition-colors">
                Forgot Password?
              </a>
            </div>
            <input type="password" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-white" placeholder="••••••••" />
          </div>
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-100">
              Remember me
            </label>
          </div>
          <button type="submit" className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer">Log In</button>
        </form>
        <div className="mt-6 text-center text-sm">
          <span className="text-blue-100">Don't have an account?</span>
          <Link
            to="/signup"
            className="text-blue-300 hover:text-blue-200 ml-1 font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
      {/* Next: "Add social login options with glassmorphism buttons" */}
    </section>
  );
}

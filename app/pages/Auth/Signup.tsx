import { useNavigate, Link } from "react-router";
import React from "react";

export default function Signup() { 
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    terms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle signup logic
    navigate("/home");
  };

  return (
	    <section className="rounded-2xl backdrop-blur-lg bg-white/10 p-8 border border-white/20 shadow-xl">
	      <h2 className="text-2xl font-bold mb-6 flex items-center">
	        <span className="material-symbols-outlined mr-2">person_add</span>
	        Create Account
	      </h2>
	      <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] hover:border-purple-300/40 max-w-md mx-auto">
	        <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
	        <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-gradient-to-br from-violet-400 to-indigo-600 rounded-full opacity-20 blur-xl"></div>
	        
	        <form className="space-y-4" onSubmit={handleSubmit}>
	          <div className="grid grid-cols-2 gap-4">
	            <div className="space-y-2">
	              <label className="block text-sm font-medium text-blue-100">First Name</label>
	              <input 
	                type="text" 
	                name="firstName"
	                value={formData.firstName}
	                onChange={handleInputChange}
	                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-white"
	                placeholder="John"
	                required
	              />
	            </div>
	            <div className="space-y-2">
	              <label className="block text-sm font-medium text-blue-100">Last Name</label>
	              <input 
	                type="text" 
	                name="lastName"
	                value={formData.lastName}
	                onChange={handleInputChange}
	                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-white"
	                placeholder="Doe"
	                required
	              />
	            </div>
	          </div>
	          
	          <div className="space-y-2">
	            <label className="block text-sm font-medium text-blue-100">Work Email</label>
	            <input 
	              type="email" 
	              name="email"
	              value={formData.email}
	              onChange={handleInputChange}
	              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-white"
	              placeholder="name@company.com"
	              required
	            />
	          </div>
	          
	          <div className="space-y-2">
	            <label className="block text-sm font-medium text-blue-100">Company</label>
	            <input 
	              type="text" 
	              name="company"
	              value={formData.company}
	              onChange={handleInputChange}
	              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-white"
	              placeholder="Acme Inc."
	              required
	            />
	          </div>
	          
	          <div className="space-y-2">
	            <label className="block text-sm font-medium text-blue-100">Password</label>
	            <input 
	              type="password" 
	              name="password"
	              value={formData.password}
	              onChange={handleInputChange}
	              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 text-white"
	              placeholder="••••••••"
	              required
	            />
	            <div className="mt-1">
	              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
	                <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-3/4"></div>
	              </div>
	              <p className="text-xs text-blue-100 mt-1">Strong password</p>
	            </div>
	          </div>
	          
	          <div className="flex items-start">
	            <input 
	              id="terms" 
	              name="terms" 
	              type="checkbox" 
	              checked={formData.terms}
	              onChange={handleInputChange}
	              className="h-4 w-4 mt-1 rounded border-gray-300 text-purple-500 focus:ring-purple-400" 
	              required
	            />
	            <label htmlFor="terms" className="ml-2 block text-sm text-blue-100">
	              I agree to the <a href="#" className="text-purple-300 hover:text-purple-200">Terms of Service</a> and <a href="#" className="text-purple-300 hover:text-purple-200">Privacy Policy</a>
	            </label>
	          </div>
	          
	                    <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center">
            <span className="material-symbols-outlined mr-2">person_add</span>
            Create Account
          </button>
	        </form>
	        
	        <div className="mt-6 text-center text-sm">
	          <span className="text-blue-100">Already have an account?</span>
          <Link
          to="/"
          className="text-purple-300 hover:text-purple-200 ml-1 font-medium transition-colors"
          >
            Sign In
          </Link>
	        </div>
	      </div>
	      {/* Next: "Add multi-step registration process with progress indicator" */}
	    </section>
  )
}


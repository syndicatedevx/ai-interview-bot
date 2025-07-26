import { useNavigate, Link } from "react-router";
import React from "react";

export default function Schedule() { 
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <button
        className="absolute top-8 right-8 z-20 py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
        onClick={() => navigate("/chatbot")}
      >
        Chatbot
      </button>
      <section className="rounded-2xl backdrop-blur-lg bg-white/10 p-8 border border-white/20 shadow-xl">
	      <h2 className="text-2xl font-bold mb-6 flex items-center">
	        <span className="material-symbols-outlined mr-2"></span>
	        Interview Scheduler
	      </h2>
	      <div className="grid md:grid-cols-3 gap-8">
	        <div className="md:col-span-2 relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:border-purple-300/40">
	          <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
	          
	          <div className="flex justify-between items-center mb-6">
	            <div className="flex items-center space-x-4">
	              <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
	                <span className="material-symbols-outlined text-lg"></span>
	              </button>
	              <h3 className="text-xl font-medium">May 2023</h3>
	              <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
	                <span className="material-symbols-outlined text-lg"></span>
	              </button>
	            </div>
	            <button className="px-3 py-1 rounded-lg bg-white/10 text-sm flex items-center hover:bg-white/20 transition-colors">
	              <span className="material-symbols-outlined text-sm mr-1"></span>
	              Today
	            </button>
	          </div>
	          
	          <div className="grid grid-cols-7 gap-1 mb-2">
	            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
	              <div key={day} className="text-center text-xs font-medium text-blue-200/70 py-2">
	                {day}
	              </div>
	            ))}
	          </div>
	          
	          <div className="grid grid-cols-7 gap-1">
	            {Array.from({ length: 35 }, (_, i) => {
	              const day = i - 2; // Starting from April 30
	              const isCurrentMonth = day > 0 && day <= 31;
	              const isToday = day === 15;
	              const hasEvents = [3, 8, 12, 17, 22, 24].includes(day);
	              
	              return (
	                <div 
	                  key={i} 
	                  className={`aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-white/10 ${
	                    !isCurrentMonth ? 'text-blue-200/30' : 
	                    isToday ? 'bg-purple-500/30 border border-purple-400/50' : 
	                    'border border-white/5'
	                  }`}
	                >
	                  <span className={`text-sm ${isToday ? 'font-bold text-purple-200' : ''}`}>
	                    {day > 0 ? (day <= 31 ? day : day - 31) : day + 30}
	                  </span>
	                  {hasEvents && isCurrentMonth && (
	                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1"></div>
	                  )}
	                </div>
	              );
	            })}
	          </div>
	        </div>
	        
	        <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:border-purple-300/40">
	          <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
	          
	          <h3 className="text-xl font-medium text-blue-100 mb-4">Available Time Slots</h3>
	          <p className="text-blue-200/70 mb-4">May 15, 2023</p>
	          
	          <div className="space-y-2 mb-6">
	            {[
	              { time: '9:00 AM - 10:00 AM', available: true },
	              { time: '10:30 AM - 11:30 AM', available: true },
	              { time: '1:00 PM - 2:00 PM', available: false },
	              { time: '2:30 PM - 3:30 PM', available: true },
	              { time: '4:00 PM - 5:00 PM', available: true },
	            ].map((slot, index) => (
	              <div 
	                key={index}
	                className={`p-3 rounded-lg border ${
	                  slot.available 
	                    ? 'border-purple-400/30 bg-purple-500/10 cursor-pointer hover:bg-purple-500/20 transition-colors' 
	                    : 'border-white/10 bg-white/5 opacity-50'
	                }`}
	              >
	                <div className="flex justify-between items-center">
	                  <span className={slot.available ? 'text-blue-100' : 'text-blue-200/50'}>
	                    {slot.time}
	                  </span>
	                  {slot.available ? (
	                    <span className="material-symbols-outlined text-purple-300 text-sm">add_circle</span>
	                  ) : (
	                    <span className="text-xs text-blue-200/50">Booked</span>
	                  )}
	                </div>
	              </div>
	            ))}
	          </div>
	          
	          <div className="flex justify-between items-center">
	            <div className="flex space-x-2">
	              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
	                <i className="fa-brands fa-google text-lg"></i>
	              </button>
	              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
	                <i className="fa-brands fa-microsoft text-lg"></i>
	              </button>
	            </div>
	            <button className="py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:translate-y-[-2px]">
	              Schedule
	            </button>
	          </div>
	        </div>
	      </div>
	      {/* Next: "Add timezone selector and recurring interview option" */}
	    </section>
    </div>
  );
}
import { useNavigate, Link } from "react-router";
import React from "react";

export default function Chatbot() {
  const navigate = useNavigate();

  return (
    <section className="rounded-2xl backdrop-blur-lg bg-white/10 p-8 border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="material-symbols-outlined mr-2"></span>
        AI Interview
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:border-blue-300/40">
          <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="material-symbols-outlined"></span>
              </div>
              <div>
                <h3 className="font-medium">AI Interviewer</h3>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>
                  <span className="text-xs text-blue-200/70">Active</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-sm">volume_up</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-sm">settings</span>
              </button>
            </div>
          </div>
          
          <div className="h-[400px] overflow-y-auto pr-2 space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                <p className="text-blue-100">Hello John! I'm your AI interviewer today. I'll be asking you some questions about your experience with React and front-end development. Are you ready to begin?</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                <p className="text-blue-100">Yes, I'm ready. Looking forward to the interview!</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">person</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                <p className="text-blue-100">Great! Let's start with something basic. Can you explain the difference between controlled and uncontrolled components in React?</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                <p className="text-blue-100">Controlled components are those where form data is handled by React components. The component's state serves as the "single source of truth" for input elements. In uncontrolled components, form data is handled by the DOM itself, using refs to access values rather than setting state.</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">person</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg rounded-tl-none p-3 max-w-[80%] relative">
                <div className="flex space-x-1 mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-100"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200"></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 mb-4 text-blue-200/70 text-sm">
              <p>Real-time transcription: "...difference between controlled and uncontrolled components in React..."</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 pr-10 text-white"
                  placeholder="Type your answer..."
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        </div></section>
  );
}
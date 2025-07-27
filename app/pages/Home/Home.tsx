import type { Route } from "./+types/home";
import { useNavigate, Link } from "react-router";
import { Welcome } from "../../components/Welcome/Welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-8 left-8 z-20">
        <button 
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex items-center"
          onClick={() => navigate("/")}
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Logout
        </button>
      </div>
      <button className="absolute top-8 right-8 z-20 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex items-center"
        onClick={() => navigate("/schedule")}
      >
        <span className="material-symbols-outlined mr-2">schedule</span>
        Schedule Interview
      </button>
      <section className="rounded-2xl backdrop-blur-lg bg-white/10 p-8 border border-white/20 shadow-xl z-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="material-symbols-outlined mr-2">upload_file</span>
      </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:border-blue-300/40">
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
            <div className="border-2 border-dashed border-blue-300/30 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px] transition-all hover:border-blue-300/50 group cursor-pointer">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                <span className="material-symbols-outlined text-4xl text-blue-300">cloud_upload</span>
              </div>
              <h3 className="text-xl font-medium text-blue-100 mb-2">Drag & Drop Resume</h3>
              <p className="text-blue-200/70 text-center mb-4">Upload PDF, DOC, or DOCX (Max 10MB)</p>
              <button className="py-2 px-4 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-100 font-medium transition-all hover:bg-blue-500/30 flex items-center">
                <span className="material-symbols-outlined mr-2">folder_open</span>
                Browse Files
              </button>
            </div>
          </div>
          <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] hover:border-blue-300/40">
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            <h3 className="text-xl font-medium text-blue-100 mb-4">Resume Preview</h3>
            <div className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JS
                </div>
                <div>
                  <h4 className="text-lg font-medium">John Smith</h4>
                  <p className="text-blue-200/70">Senior Frontend Developer</p>
                </div>
              </div>
              <div className="space-y-3 pt-3">
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-blue-300 mr-2">mail</span>
                  <span className="text-blue-100">johnsmith@example.com</span>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-blue-300 mr-2">phone</span>
                  <span className="text-blue-100">(555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-blue-300 mr-2">location_on</span>
                  <span className="text-blue-100">San Francisco, CA</span>
                </div>
              </div>
              <div className="pt-3">
                <h5 className="text-sm uppercase tracking-wider text-blue-300 mb-2">Skills</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sm text-blue-100">React.js</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sm text-blue-100">TypeScript</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sm text-blue-100">Tailwind CSS</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sm text-blue-100">Redux</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sm text-blue-100">Next.js</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex items-center">
                <span className="material-symbols-outlined mr-2">check_circle</span>
                Confirm & Continue
              </button>
            </div>
          </div>
        </div>
        {/* Next: "Add resume parsing progress indicator with AI analysis feedback" */}
      </section>
    </div>
  );
}

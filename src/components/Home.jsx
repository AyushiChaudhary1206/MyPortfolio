

export const Home=()=>{
    return <div>
     
        <div className="bg-slate-950 h-screen">
        
                <div className="pt-20 lg:pl-40 pl-5 pr-5 home">
                <div className="text-teal-200 text-lg">
                    Hi, my name is
                </div>
                <div className="text-slate-300 font-bold pt-5 lg:text-7xl text-3xl">
                    Ayushi Chaudhary
                </div>
                <div className="text-slate-400 font-bold pt-5 lg:text-7xl text-3xl">
                An Engineering Student 
                </div>
                <div className="text-slate-400 text-bold pt-8 text-lg w-full max-w-screen-sm">
                    
                I’m a <span className="text-teal-200">Computer Science and Engineering</span> Student.I am proficient in various programming languages and technologies. Currently, I’m focused on building creative and user-friendly website in both frontend and backend.
      
                
                </div>
                <div className="mt-6">
                <button class="bg-transparent hover:bg-teal-200 hover:text-black text-teal-200 font-semibold py-2 px-4 border border-teal-200 rounded scale-110 transition-all duration-300 hover:scale-100">
                     <a href="https://drive.google.com/file/d/1YYZxUnjgkwO0s43QlXI-ZmH6HlFKTH0B" target='blank'>Resume</a>
                     </button>
                </div>
                </div>
          
        </div>
        <style>{ `
  .home{
     animation: fadeIn 3.5s;
    }
    @keyframes fadeIn{
    0%{
  opacity: 0;
  transform:translateY(60px) scale(0.9);
    }
    100%{
      opacity: 1;
      transform:translateY(0px) scale(1);
    }
  }
            `}</style>
    </div>
}
import pic  from "./pic.jpg"

export const About=()=>{
    return <div className="hello bg-slate-950  min-h-lvh">
    <div className="min-h-vh  intro pt-8 lg:pl-20 pl-10">
        <div className="flex ">
            <pre className="text-teal-300 text-2xl pt-1">01.</pre>
            <div className="text-slate-200 text-3xl font-bold">
            About me
            </div>
            <hr class="bg-slate-400 mt-5 ml-2"></hr>
          </div>
          <div className="grid grid-cols-12">
          <div className="text-slate-400 font-semibold pt-10 text-lg md:col-span-6 col-span-12 pr-6 pb-10">
          Hello! My name is Ayushi and I am a final year student of Bachelor Of Technology.
          I love building new things with code. I am looking for opportunities where I can grow myself as a person and as a developer.
          I have strong foundation in both front-end and back-end development.
          With completed projects over multiple domains, I'm able to apply my skills across multiple problem statements to find innovative solutions.
          <div className="text-slate-400 pt-2 text-lg ">
           Apart from coding,some other activities i love to do!
         </div> 
         <div className="pt-2">
          <span className="text-teal-200 pr-2">a.</span>
          Playing Badminton
          <br />
          <span className="text-teal-200 pr-2">b.</span>
          Dance
          <br />
          <span className="text-teal-200 pr-2">c.</span>
          Travelling
         </div>
         </div>
          <div className="flex justify-center md:ml-20 mr-14 md:col-span-5 col-span-12">
            <div className="lg:mt-0 mt-10">
          <div className="border border-teal-200 border-4 rounded-lg lg:max-w-xs max-w-64">
          <img src={pic} className="rounded-lg mx-3 mt-3 mb-3 lg:max-w-xs max-w-64" alt="" />
         </div>
         </div>
      </div>
          </div>
         
          </div>
         
        
        
          <style>{ `
hr{
    width:20%;
}
    .intro{
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
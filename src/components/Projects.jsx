import React from "react";
import pytm from "./pytm.jpg";
import weather from "./weather.png";
import todo from "./todo.png";
import quiz from "./quiz.png";
import drumstick from "./drumstick.jpg";
const Projects = () => {
  return (
    <div className="proj bg-slate-950">
      <div className=" min-h-lvh pt-10 lg:pl-10 pl-6 ">
        <div className="grid grid-cols-12 project">
          <div className="mx-6 lg:col-span-4 md:col-span-6 col-span-12 mt-10">
            <div class="max-w-sm overflow-hidden rounded shadow-lg bg-white rounded-2xl duration-200 hover:-translate-y-4">
              <img
                class="w-full group-hover:scale-110 duration-200 object-cover"
                src={pytm}
                alt="Sunset in the mountains"
              />

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-slate-700">
                  Paytm Clone
                </div>
                <p class="text-teal-900 font-bold">
                  Web Application for Cashless transactions that allows people
                  to send and receive money from other peoples savig their time
                  by reducing it from 90 seconds to just 15 seconds.
                </p>
                <a
                  target="blank"
                  href="https://unrivaled-semifreddo-976bbd.netlify.app/"
                >
                  <button class="before:ease relative h-12 w-32 mt-4 overflow-hidden border border-blue-500 rounded-xl  text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
                    <span className="relative z-10 b-2 flex pl-4">
                      View Demo
                      <svg
                        className="rtl:rotate-180 w-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-6 lg:col-span-4 md:col-span-6 col-span-12 mt-10">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white rounded-2xl duration-200 hover:-translate-y-4">
              <div class="flex h-56 flex-col justify-between overflow-hidden">
                <img
                  class="w-full group-hover:scale-110 duration-200 object-cover"
                  src={weather}
                  alt="Sunset in the mountains"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-slate-600">
                  Weather App
                </div>
                <p class="text-black font-bold">
                  A web application which will tell the users about the weather
                  details of any particular city.It will allow the users to know
                  about the temperature,wind speed about the weather .
                </p>
                <a
                  href="https://github.com/AyushiChaudhary1206/Weather-app"
                  target="blank"
                >
                  <button class="before:ease relative h-12 w-32 mt-4 overflow-hidden border border-yellow-500 rounded-xl  text-yellow-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-yellow-500 before:duration-300 hover:text-white hover:shadow-yellow-500 hover:before:h-64 hover:before:-translate-y-32">
                    <span className="relative z-10 b-2 flex pl-4">
                      View Code
                      <svg
                        className="rtl:rotate-180 w-3.5 ms-2 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-6 lg:col-span-4 md:col-span-6 col-span-12 mt-10">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white rounded-2xl duration-200 hover:-translate-y-4">
              <div class="flex h-56 flex-col justify-between overflow-hidden">
                <img
                  class="w-full group-hover:scale-110 duration-200 object-cover"
                  src={todo}
                  alt="Sunset in the mountains"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-slate-600">
                  ToDo List
                </div>
                <p class="text-black font-bold">
                  To-do lists help you organize your work and keep track of
                  tasks. You don't need to keep track of an all-important scrap
                  of paper when you want to write something down.
                </p>
                <a
                  href="https://ayushichaudhary1206.github.io/To-Do-List/"
                  target="blank"
                >
                  <button class="before:ease relative h-12 w-32 mt-4 overflow-hidden border border-orange-500 rounded-xl  text-orange-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-orange-500 before:duration-300 hover:text-white hover:shadow-orange-500 hover:before:h-64 hover:before:-translate-y-32">
                    <span className="relative z-10 b-2 flex pl-4">
                      View Demo
                      <svg
                        className="rtl:rotate-180 w-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 project">
          <div className="mx-6 lg:col-span-4 md:col-span-6 col-span-12 mt-10">
            <div class="max-w-sm overflow-hidden rounded shadow-lg bg-white rounded-2xl duration-200 hover:-translate-y-4">
              <img
                class="w-full h-60 group-hover:scale-110 duration-200 object-cover"
                src={quiz}
                alt="Sunset in the mountains"
              />

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-slate-700">
                  Quiz App
                </div>
                <p class="text-teal-900 font-bold">
                  Web Application for testing knowledge in different
                  areas.Choose things according to you and test how much you are
                  capable of!.
                </p>
                <a
                  target="blank"
                  href="https://ayushichaudhary1206.github.io/Quiz-App/"
                >
                  <button class="before:ease relative h-12 w-32 mt-4 overflow-hidden border border-blue-500 rounded-xl  text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
                    <span className="relative z-10 b-2 flex pl-4">
                      View Demo
                      <svg
                        className="rtl:rotate-180 w-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-6 lg:col-span-4 md:col-span-6 col-span-12 mt-10 mb-4" >
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white rounded-2xl duration-200 hover:-translate-y-4">
              <div class="flex h-60 flex-col justify-between overflow-hidden">
                <img
                  class="w-full group-hover:scale-110 duration-200 object-cover"
                  src={drumstick}
                  alt="Sunset in the mountains"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-slate-600">
                  Drumstick.
                </div>
                <p class="text-black font-bold">
                  Play the virtual drums, and then apply your new skills to real
                  drums. A fun way to practice with the virtual drums is by
                  playing along with your favorite songs.
                </p>
                <a
                  href="https://ayushichaudhary1206.github.io/Drumstick/"
                  target="blank"
                >
                  <button class="before:ease relative h-12 w-32 mt-4 overflow-hidden border border-yellow-500 rounded-xl  text-yellow-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-yellow-500 before:duration-300 hover:text-white hover:shadow-yellow-500 hover:before:h-64 hover:before:-translate-y-32">
                    <span className="relative z-10 b-2 flex pl-4">
                      View Code
                      <svg
                        className="rtl:rotate-180 w-3.5 ms-2 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <style>{`
    .project{
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
  );
};

export default Projects;

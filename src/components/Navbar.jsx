import { useState } from "react"; // import state

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return <div className="bg-slate-950">
    
    <div className="flex items-center justify-between px-8 pt-4">
        <pre>
    <div>
    <h1 class="animate-typing overflow-hidden text-4xl text-teal-200 font-bold">Ayushi</h1>
  </div>
  </pre>
        
              <nav>
         <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            {!isNavOpen?<>
            <span className="block h-0.5 w-8 animate-pulse bg-teal-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-teal-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-teal-200"></span>

            </>:<>
            <span className="block h-0.4 w-8 animate-pulse bg-teal-200"></span>
            <span className="block h-0.4 w-8 animate-pulse bg-teal-200"></span>
            <span className="block h-0.4 w-8 animate-pulse bg-teal-200"></span>
            </>
}
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-5"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-teal-200 bg-slate-950 mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex absolute flex-col bg-slate-900 items-center justify-between min-w-[250px] min-h-[300px]">
            <li className="border-b border-gray-400 my-8 uppercase text-teal-200">
                <a href="/">Home</a>
              </li>
              <li className="my-8 uppercase text-teal-200">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-teal-200">
                <a href="/skills">Skills</a>
              </li>
              <li className="my-8 uppercase text-teal-200">
                <a href="/work">Work</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-teal-200">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <li>
            <pre>
          <span className="text-teal-200 pr-1">01.</span>
            <a className="text-slate-300 text-md hover:text-teal-200" href="/">Home</a>
            </pre>
          </li>
          <li>
            <pre>
          <span className="text-teal-200 pr-1">02.</span>
            <a className="text-slate-300 text-md hover:text-teal-200" href="/about">About</a>
            </pre>
          </li>

          <li>
            <pre>
          <span className="text-teal-200 pr-1">03.</span>
            <a className="text-slate-300 text-md hover:text-teal-200" href="/skills">Skills</a>
            </pre>
          </li>
          
          <li>
            <pre>
            <span className="text-teal-200 pr-1">04.</span>
            <a className="text-md text-slate-300 hover:text-teal-200" href="/work">Work</a>
            </pre>
          </li>
          <li>
            <pre>
          <span className="text-teal-200 pr-1">05.</span>
            <a className="text-slate-300 text-md text-teal-200" href="/contact">Contact</a>
            </pre>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
     
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </div>
  
}

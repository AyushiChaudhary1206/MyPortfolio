export const Skills = () => {
  return (
    <div className="hello">
      <div className="bg-slate-950  min-h-lvh pt-10 lg:pl-12 pl-12 ">
        <div className="grid intro grid-cols-12">
          <div className="mx-6 lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-orange-500 text-2xl font-bold pl-6 ">
                    HTML
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6  lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-blue-400 text-2xl font-bold pl-6">
                    CSS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" mx-6  lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-yellow-500 text-2xl font-bold pl-6">
                    Javascript
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-6 lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-blue-900 text-2xl font-bold pl-6">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid intro grid-cols-12">
          <div className="mx-6 lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BBuHmFiEOHb12an7ErH8O11qc31HmbtLKA&s"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-teal-900 text-2xl font-bold pl-2">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6 lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwtDGIg1CuKG_QrTUBPKv-78etELQUUQ93w&s"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-green-500 text-2xl font-bold pl-6">
                    Mongo DB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" mx-6 lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img pt-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWWXVohNdns_Rh_2jxf6VwpXiGNuuuuDQ_Q&s"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-yellow-900 text-2xl font-bold pl-6">
                    Express JS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-6 lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxlPHK-Qs1oagN2ezTnoM1nhr5IGsCPqwkQ&s"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-teal-400 text-2xl font-bold pl-6">
                    React JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid intro grid-cols-12">
          <div className="mx-6  lg:col-span-3 md:col-span-6 col-span-12 mt-10">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img pt-2">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-green-900 text-2xl font-bold pl-6">
                    Node JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        

          <div className=" mx-6 lg:col-span-3 md:col-span-6 col-span-12 mt-10 mb-4">
            <div className="card border-solid border-r-4 border-b-4 border-teal-500">
              <div className="img pt-2">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="textBox">
                <div className="textContent">
                  <p className="h1 text-red-600 text-2xl font-bold pl-6">
                    Java
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .card {
            width:100%;
            max-width: 290px;
            height: 80px;
            background: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: left;
            backdrop-filter: blur(10px);
            transition: 0.5s ease-in-out;
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
          
          .card:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
          
          .img {
            width: 50px;
            height: 50px;
            margin-left: 10px;
            border-radius: 10px;
          }
          
          
          
          .textBox {
            width: calc(100% - 90px);
            margin-left: 10px;
            color: white;
            font-family: 'Poppins' sans-serif;
          }
          
          .textContent {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        
          
          
        `}</style>
    </div>
  );
};

import arrow from "./arrow.svg";
import "./App.css";

function App() {
  return (
    <div className="App flex justify-center items-center h-screen bg-off-white">
      <div className="bg-white p-5 rounded-[1rem] rounded-br-[10rem] w-[600px]">
        <form className="flex flex-col pb-1">
          <div className="flex gap-2">
            <div className="text-[18px] text-smokey-grey uppercase font-semibold flex flex-col">
              <label htmlFor="day">Day</label>
              <input
                type="number"
                name=""
                placeholder="DD"
                className="flex items-center text-md w-[100px] p-[0.5rem] border-[1px] border-light-grey rounded-sm"
              />
            </div>
            <div className="text-[18px] text-smokey-grey uppercase font-semibold flex flex-col">
              <label htmlFor="month">month</label>
              <input type="number" name="" placeholder="MM" className="flex items-center text-md w-[100px] p-[0.5rem] border-[1px] border-light-grey rounded-sm" />
            </div>

            <div className="text-[18px] text-smokey-grey uppercase font-semibold flex flex-col">
              <label htmlFor="year">Year</label>
              <input type="number" name="" placeholder="YYYY" className="flex items-center text-md w-[100px] p-[0.5rem] border-[1px] border-light-grey rounded-sm" />
            </div>
          </div>
          <div className="flex items-center">
            <hr className="w-full" />
            <button
              type="submit"
              className="rounded-[50%] bg-purple-main p-1 cursor-pointer border-none text-white flex items-center justify-center"
            >
              <img src={arrow} alt="" srcset="" />
            </button>
          </div>
        </form>

        <div className="flex flex-col italic text-2xl font-bold pb-4">
          <div className="">
            <span className="text-purple-main">--</span> years
          </div>
          <div className="">
            <span className="text-purple-main">--</span> months
          </div>
          <div className="">
            <span className="text-purple-main">--</span> days
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

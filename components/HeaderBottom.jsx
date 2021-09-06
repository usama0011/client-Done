import { SearchIcon } from "@heroicons/react/outline";

function HeaderBottom() {
  return (
   <div className="bg-yellow-500 flex flex-col items-center ">
       <div className=" mt-3 px-6  relative w-full flex-grow max-w-[500px]">
           <div className="flex h-8 bg-white rounded-lg  items-center ">
              <SearchIcon className="h-5 text-gray-500 px-2"/>
               <input  className=" w-full flex-grow px-2  text-gray-500 text-xs border-none outline-none bg-transparent py-1" type="text" placeholder="Find Mentors and Services"/>
               <button className="px-1 py-1 bg-green-500 text-white rounded-r-lg ">Search</button>
           </div>
       </div>
       <div className="space-x-2 text-white flex items-center">
           <span>Services</span>
           <span><input type="radio" className="" /> </span>
            <span>Mentors</span>
            <span><input type="radio" /></span>
       </div>
   </div>
  );
}

export default HeaderBottom;

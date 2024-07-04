{
  /* <div className="flex  border w-[33%] gap-3 px-6 py-4 shadow-lg rounded-md border-blue-500">
  <div className="flex gap-2 border-r-2 pr-2">
    <select
      name=""
      value={selectState}
      onChange={(e) => setSelectState(e.target.value)}
      className="border-none ring-0 outline-none"
    >
      <option value="all">All</option>
      <option value="available">Available</option>
      <option value="sold">Sold</option>
    </select>
  </div>

  <div className="flex gap-2">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-56 focus:border-none focus:ring-0 focus:outline-none"
      placeholder="Search"
      name=""
      id=""
    />
    <FaSearch className="translate-y-1" fontSize={20} />
  </div>
</div>; */
}




// sell car dashboard




// import React from "react";
// import { useState } from "react";
// import { HiLightBulb } from "react-icons/hi";
// import { MdExpandMore, MdExpandLess } from "react-icons/md";
// import { TiTick } from "react-icons/ti";
// import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
// import { BiLogoWhatsappSquare } from "react-icons/bi";
// import Switch from "@mui/material/Switch";
// import { motion } from "framer-motion";

// const SellCar = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };
//   return (
//     <div className="bg-slate-100 min-h-screen">
//       <div className="ml-40 mr-40 bg-white hover:shadow-xl">
//         <form>
//           <h1 className="font-semibold text-2xl ml-10 pt-4">Car Information</h1>
//           <p className="ml-10 mb-2">(All fields marked with * are mandatory)</p>
//           <div className="flex items-center mb-2">
//             <label className="w-72 text-right mr-4" htmlFor="City">
//               City*
//             </label>
//             <select
//               className="flex-1 border py-2 px-3 mr-14 rounded-md hover:border-sky-400"
//               type="text"
//               id="City"
//               name="City"
//             >
//               <option>City</option>
//               <option>Others Cities</option>
//               <option>Famous Cities</option>
//             </select>
//             <p className="mr-10 flex gap-3 text-sm">
//               <HiLightBulb
//                 fontSize={40}
//                 className="text-blue-800 -translate-y-1"
//               />
//               We don't allow duplicates of same ad.
//             </p>
//           </div>
//           <div className="flex items-center mb-2">
//             <label className="w-72 text-right mr-4" htmlFor="CarInfo">
//               Car Info*
//             </label>
//             <input
//               className="flex-1 border py-2 px-3 mr-96 rounded-md hover:border-sky-400"
//               type="text"
//               id="CarInfo"
//               name="CarInfo"
//             ></input>
//           </div>
//           <div className="flex items-center mb-2">
//             <label className="w-72 text-right mr-4" htmlFor="Registered">
//               Registered In*
//             </label>
//             <select
//               className="flex-1 border py-2 px-3 mr-96 rounded-md hover:border-sky-400"
//               type="text"
//               id="Registered"
//               name="Registered"
//             ></select>
//           </div>
//           <div className="flex items-center mb-2">
//             <label className="w-72 text-right mr-4" htmlFor="Color">
//               Exterior Color*
//             </label>
//             <select
//               className="flex-1 border py-2 px-3 mr-96 rounded-md hover:border-sky-400"
//               type="text"
//               id="Color"
//               name="Color"
//             >
//               <optgroup>
//                 <option>Black</option>
//                 <option>White</option>
//                 <option>Silver</option>
//               </optgroup>
//             </select>
//           </div>
//           <div className="flex items-center mb-2">
//             <label className="w-72 text-right mr-4" htmlFor="Mileage">
//               Mileage* (KM)
//             </label>
//             <span className="bg-gray-200 w-9 h-11 grid place-items-center rounded rounded-r-none ">
//               KM
//             </span>
//             <input
//               className="flex-1 border py-2 px-3 mr-12 rounded rounded-l-none hover:border-sky-400"
//               type="text"
//               id="Mileage"
//               name="Mileage"
//             ></input>
//             <p className="mr-12 flex gap-3 text-sm">
//               <HiLightBulb
//                 fontSize={40}
//                 className="text-blue-800 -translate-y-1"
//               />
//               We don't allow promotional messages
//               <br />
//               that are not relevant to the ad
//             </p>
//           </div>
//           <div className="flex items-center mb-2">
//             <label className="w-72 text-right mr-4" htmlFor="price">
//               Price* (Rs.)
//             </label>
//             <span className="bg-gray-200 w-9 h-11 grid place-items-center rounded rounded-r-none ">
//               PKR
//             </span>
//             <input
//               className="flex-1 border py-2 px-3 mr-12 rounded rounded-l-none hover:border-sky-400"
//               type="text"
//               id="price"
//               name="price"
//             ></input>
//             <p className="mr-10 flex gap-3 text-sm">
//               <HiLightBulb
//                 fontSize={40}
//                 className="text-blue-800 -translate-y-1"
//               />
//               Please enter a realistic price to get more
//               <br />
//               genuine responses.
//             </p>
//           </div>
//           <div className="flex">
//             <label className="w-72 text-right mr-4 mt-4" htmlFor="Ad">
//               Ad Description*
//             </label>
//             <textarea
//               placeholder="Describe your car?"
//               className="flex-1 border py-2 px-2 mr-12 rounded-md hover:border-sky-400"
//               type="text"
//               id="Ad"
//               name="Ad"
//             ></textarea>
//           </div>
//           <div className="border-2 border-dotted border-blue-200 mt-3 ml-12 mr-12">
//             <div className="flex justify-center mt-6">
//               <img
//                 src="pic.webp"
//                 alt="pic icon"
//                 className="size-10 mt-4 -translate-y-3"
//               ></img>
//               <button className="ml-4 bg-blue-500 text-white rounded p-4 w-50 h-12">
//                 +Add Photos
//               </button>
//             </div>
//             <p className="text-xs text-center ml-12 mb-2 text-gray-400">
//               (Max limit 5 MB per image)
//             </p>
//           </div>
//           <button className="mt-3 mb-3 ml-[800px] bg-blue-800 p-3 rounded text-white">
//             SUBMIT & CONTINUE
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SellCar;

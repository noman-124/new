


// Add Car Main Page



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
//       <div className="mt-8 bg-white">
//         <h1 className="font-bold text-2xl text-blue-900 text-center">
//           Sell your Car With 3 Easy & Simple Steps!
//         </h1>
//         <p className="font-size text-lg text-center font-semibold">
//           It's free and takes less than a minute
//         </p>
//         <br />
//         <div className="flex justify-center">
//           <p className="text-center flex mr-8">
//             <img
//               src="car icon.jpg"
//               alt="car pic"
//               className="size-8 rounded-2xl -translate-y-1"
//             ></img>
//             Enter Your Car Information 
//           </p>
//           <p className="text-center flex  mr-8">
//             <img
//               src="pic.webp"
//               alt="taking pic tag"
//               className="size-6 mr-1"
//             ></img>
//             Upload Photos
//           </p>
//           <p className="text-center flex">
//             <img
//               src="sale.webp"
//               alt="sale tag "
//               className="size-8 -translate-y-2"
//             ></img>
//             Enter Your Selling Price
//           </p>
//         </div>
//         <br />
//       </div>
//       <div className="mt-8 ml-40 mr-40 bg-white border-t-4 hover:border-blue-800 hover:shadow-xl">
//         <form>
//           <h1 className="font-semibold text-2xl ml-10 pt-10">
//             Car Information
//           </h1>
//           <p className="ml-10">(All fields marked with * are mandatory)</p>
//           <br />
//           <div className="flex items-center mb-4">
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
//           <div className="flex items-center mb-4">
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
//           <div className="flex items-center mb-4">
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
//           <div className="flex items-center mb-4">
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
//           <div className="flex items-center mb-4">
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
//           <div className="flex items-center mb-4">
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
//               className="flex-1 border py-2 px-3 mr-8 rounded-md hover:border-sky-400"
//               type="text"
//               id="Ad"
//               name="Ad"
//             ></textarea>
//           </div>
//           <img
//             src="arrow.webp"
//             alt="arrow pic "
//             className="size-20 ml-36"
//           ></img>
//           <div className="border mr-8 ml-[304px]">
//             <p className="ml-4 mt-2"> You can also use these suggestions</p>
//             <br />
//             <motion.div
//               className="flex flex-wrap gap-4 ml-2 mr-2 overflow-hidden"
//               animate={{ height: showMore ? "auto" : "100px" }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="flex flex-wrap gap-4 ml-2 mr-2">
//                 <button className="rounded-2xl border-[#518ecb] border-2 p-2 text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Like New
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Fresh import
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Alloy Rims
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Price Negotiable
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//                 <button className="rounded-2xl border-[#518ecb] border-2 p-2 text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Like New
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Fresh import
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Alloy Rims
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Price Negotiable
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//                 <button className="rounded-2xl border-[#518ecb] border-2 p-2 text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Like New
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Fresh import
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Alloy Rims
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Price Negotiable
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//                 <button className="rounded-2xl border-[#518ecb] border-2 p-2 text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Like New
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Fresh import
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Alloy Rims
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Price Negotiable
//                 </button>
//                 <button className="rounded-2xl border-2 p-2 border-[#518ecb] text-xs text-[#518ecb] hover:bg-[#518ecb] hover:text-white">
//                   Bumper to Bumper Original
//                 </button>
//               </div>
//             </motion.div>
//             <br />
//             <hr></hr>
//             <span
//               className="flex items-center justify-center cursor-pointer"
//               onClick={toggleShowMore}
//             >
//               {showMore ? (
//                 <>
//                   Show Less Suggestions <MdExpandLess />
//                 </>
//               ) : (
//                 <>
//                   Show More Suggestions <MdExpandMore />
//                 </>
//               )}
//             </span>
//           </div>
//           <br />
//         </form>
//       </div>
//       <div className="mt-8 ml-40 mr-40 bg-white border-t-4 hover:border-blue-800 hover:shadow-xl">
//         <h1 className="mt-4 ml-4 font-semibold text-2xl">Uploads Photos</h1>
//         <div className="border-2 border-dotted border-blue-200 m-6">
//           <div className="flex justify-center  mt-10">
//             <img
//               src="pic.webp"
//               alt="pic icon"
//               className="size-10 mt-4 -translate-y-3"
//             ></img>
//             <button className="ml-4 bg-blue-500 text-white rounded p-4 w-50 h-12">
//               +Add Photos
//             </button>
//           </div>
//           <p className="text-xs text-center ml-12 text-gray-400">
//             (Max limit 5 MB per image)
//           </p>
//           <br />
//           <div className="flex items-center justify-center mt-10 mb-5">
//             <TiTick className="size-5 mr-1 text-blue-800 -translate-y-2" />
//             <p className="text-sm">
//               Adding at least 8 pictures improves the chances
//               <br /> for a quick sale.
//             </p>
//             <TiTick className="size-5 mr-1 text-blue-800 ml-20 -translate-y-2" />
//             <p className="text-sm">
//               Adding clear Front, Back and Interior pictures of your car
//               <br /> increases the quality of your Ad and gets you noticed more.
//             </p>
//           </div>
//         </div>
//         <br />
//       </div>
//       <div className="mt-8 ml-40 mr-40 bg-white border-t-4 hover:border-blue-800 hover:shadow-xl">
//         <form>
//           <h1 className="mt-4 ml-4 font-semibold text-2xl">
//             Contact Information
//           </h1>
//           <div className="flex items-center mb-4 mt-10">
//             <label className="w-48 text-right mr-4" htmlFor="Number">
//               Phone Number*
//             </label>
//             <input
//               className="flex-1 border py-2 px-3 mr-14 rounded-md hover:border-sky-400"
//               type="text"
//               id="Number"
//               name="Number"
//             ></input>
//             <p className="mr-10 flex gap-3 text-sm">
//               <HiOutlineDevicePhoneMobile
//                 fontSize={40}
//                 className="text-blue-800 -translate-y-1"
//               />
//               Enter a genuine 11 digit mobile no. with format
//               <br /> 03XXXXXXXXX. All inquires will come on this number.
//             </p>
//           </div>
//           <div className="flex items-center mb-4">
//             <label className="w-48 text-right mr-4" htmlFor="CarInfo">
//               Secondary Number (Optional)
//             </label>
//             <input
//               className="flex-1 border py-2 px-3 mr-[473px] rounded-md hover:border-sky-400"
//               type="text"
//               id="CarInfo"
//               name="CarInfo"
//             ></input>
//           </div>
//         </form>

//         <span className="flex items-center justify-center mt-10 text-lg">
//           <BiLogoWhatsappSquare className="size-10 text-green-600 mr-2 rounded-full" />
//           <p className="mr-16"> Allow Whatsapp Contact</p>
//           <Switch size="medium" />
//         </span>
//         <br></br>
//       </div>
//       <button className="mt-10 mb-4 ml-[1015px] bg-blue-800 p-3 rounded text-white">
//         SUBMIT & CONTINUE
//       </button>
//     </div>
//   );
// };

// export default SellCar;
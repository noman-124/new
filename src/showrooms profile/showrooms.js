import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorldLongitude } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { RiBuilding2Fill } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";

const Showroom = () => {
  return (
    <div className="w-[50%] m-auto bg-slate-300 mt-8 rounded-lg">
      <div className="flex justify-center">
        <div className="flex-col">
          <img
            src="shuja.png"
            alt="profile"
            className="w-32 h-32 rounded-[100%] mt-8"
          ></img>
          <br />

          <h1 className="font-bold text-blue-900">Shauja Motors</h1>
          <h2 className="text-gray-500 flex gap-1 justify-center items-center mr-4">
            Motors123 <HiPencilSquare />
          </h2>
          <br />
          <br />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <FaCar />
              <p>Showrooms</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shauja Motors</p>
              <HiPencilSquare />
            </div>
          </div>
        </div>

        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <MdEmail />
              <p>Email</p>
            </div>
            <div className="flex justify-between items-center">
              <p>shauja123@gmail.com</p>
              <HiPencilSquare />
            </div>
          </div>
        </div>

        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <RiBuilding2Fill />
              <p>Address</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Lower Canal Road Faisalabad</p>
              <HiPencilSquare />
            </div>
          </div>
        </div>

        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <TbWorldLongitude />
              <p>Lat Long</p>
            </div>
            <div className="flex justify-between items-center">
              <p>40.748440°, -73.994559°</p>
              <HiPencilSquare />
            </div>
          </div>
        </div>

        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <MdLocationCity />
              <p>City</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Faisalabad</p>
              <HiPencilSquare />
            </div>
          </div>
        </div>

        <div className="w-[50%] m-auto mb-8">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <FaPhoneAlt />
              <p>Phone No</p>
            </div>
            <div className="flex justify-between items-center">
              <p>0300-00000000</p>
              <HiPencilSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;

import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { MdOutlinePerson } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { CgPassword } from "react-icons/cg";

const Profile = () => {
  return (
    <div className="w-[50%] m-auto bg-cyan-100 mt-8 rounded-lg">
      <div className="flex justify-center">
        <div className="flex-col">
          <img
            src="avatar.jfif"
            alt="profile"
            className="w-32 h-32 rounded-[100%] mt-8"
          ></img>
          <br />
          <h1 className="font-bold">Muhammad Noman</h1>
          <h2 className="text-gray-500 flex gap-2 justify-center items-center">
            noman@123 <HiPencilSquare />
          </h2>
          <br />
          <br />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <MdOutlinePerson />
              <p>Name</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Muhammad Noman</p>
              <HiPencilSquare className="translate-y-1" />
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
              <p>noman123@gmail.com</p>
              <HiPencilSquare className="translate-y-1" />
            </div>
          </div>
        </div>

        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <CgPassword />
              <p>Password</p>
            </div>
            <div className="flex justify-between items-center">
              <p>**********</p>
              <HiPencilSquare className="translate-y-1" />
            </div>
          </div>
        </div>

        <div className="w-[50%] m-auto">
          <div className="flex flex-col border-b-2 mb-1">
            <div className="flex items-center gap-1 font-semibold">
              <FaAddressCard />
              <p>Address</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Lower Canal Road Faisalabad</p>
              <HiPencilSquare className="translate-y-1" />
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
              <HiPencilSquare className="translate-y-1" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Profile;


  /* <div className="flex justify-between w-[50%] m-auto">
<div className="flex-col">
<p className="font-semibold">UserName</p>
<p className="font-semibold">Email</p>
<p className="font-semibold">Address</p>

</div>
<div className="flex-col">
<p>Noman123</p>
<p>Noman123@gmail.com</p>
<p>a</p>

</div>
<div className="flex-col gap-1">
<HiPencilSquare />
<HiPencilSquare />
<HiPencilSquare />

</div>

</div> */



  /* <div className="flex w-[50%] m-auto">
<p className="font-semibold w-[33%]">UserName</p>
<p className="w-[33%]">Noman123</p>
<div className="w-[34%] text-end flex items-center justify-end">
  <HiPencilSquare />
</div>
</div>
<div className="flex w-[50%] m-auto">
<p className="font-semibold w-[33%]">Email</p>
<p className="w-[33%]">Noman123@gmail.com</p>
<div className="w-[34%] text-end flex items-center justify-end ">
  <HiPencilSquare />
</div>
</div>
<div className="flex w-[50%] m-auto">
<p className="font-semibold w-[33%]">Address</p>
<p className="w-[33%]">Faisalabad</p>
<div className="w-[34%] text-end flex items-center justify-end ">
  <HiPencilSquare />
</div>
</div>
<div className="flex w-[50%] m-auto">
<p className="font-semibold w-[33%]">Age</p>
<p className="w-[33%]">25</p>
<div className="w-[34%] text-end flex items-center justify-end">
  <HiPencilSquare />
</div>
</div>
<div className="flex w-[50%] m-auto">
<p className="font-semibold w-[33%]">Password</p>
<p className="w-[33%]">54321</p>
<div className="w-[34%] text-end flex items-center justify-end">
  <HiPencilSquare />
</div>
</div>
<div className="flex w-[50%] m-auto">
<p className="font-semibold w-[33%]">DOB</p>
<p className="w-[33%]">21/09/1998</p>
<div className="w-[34%] text-end flex items-center justify-end">
  <HiPencilSquare />
</div>
</div> */

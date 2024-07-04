import React, { useState } from "react";
import Row from "./row";
import { FaSearch } from "react-icons/fa";

const ShowCar = () => {
  const product = [
    {
      _id: "65cbb863728fdba5266c6bb6",
      user: "Shauja motors",
      representative: "Noman",
      contact: "0300-00000000",
      email: "shauja123@gmail.com",
      address: "Jaranwala road fsd",
      status: false,
      __v: 0,
    },
    {
      _id: "65cbbbc3728fdba5266c6bbe",
      user: "Pakwheels",
      representative: "Ali",
      email: "pakwheel123@gmail.com",
      address: "Canal road fsd",
      contact: "0300-00000000",
      status: false,
      __v: 0,
    },
    {
      _id: "65cbbbea728fdba5266c6bc0",
      user: "Sandal",
      representative: "Ahmad",
      email: "sandal123@gmail.com",
      address: "Canal road fsd",
      contact: "0300-00000000",
      status: false,
      __v: 0,
    },
    {
      _id: "65cbbc17728fdba5266c6bc2",
      user: "Sandal",
      representative: "Adeel",
      email: "sandal123@gmail.com",
      address: "Canal road fsd",
      contact: "0300-00000000",
      status: true,
      __v: 0,
    },
    {
      _id: "65cbbc3b728fdba5266c6bc4",
      user: "Shauja motors",
      representative: "Burhan",
      email: "shauja123@gmail.com",
      address: "Jaranwala road fsd",
      contact: "0300-00000000",
      status: false,
      __v: 0,
    },
    {
      _id: "65cbbc6d728fdba5266c6bc8",
      user: "Auto Hub",
      representative: "Orhan",
      email: "autohub123@gmail.com",
      address: "Lower canal fsd",
      contact: "0300-00000000",
      status: true,
      __v: 0,
    },
    {
      _id: "65fc1a03d67fd3ba4a90bb37",
      user: "Luxuries",
      representative: "Noman",
      email: "luxuries123@gmail.com",
      address: "Sargoda road fsd",
      contact: "0300-00000000",
      status: false,
      __v: 0,
    },
    {
      _id: "660a7ca5cce27f839f1b0709",
      email: "luxuries123@gmail.com",
      user: "Luxuries",
      representative: "Rizwan",
      contact: "0300-00000000",
      address: "Sargoda road fsd",
      status: true,
      __v: 0,
    },
    {
      _id: "660a7cc6cce27f839f1b070d",
      email: "lucxuries123@gmail.com",
      user: "Luxuries",
      representative: "Usama",
      contact: "0300-00000000",
      address: "Sargoda road fsd",
      status: true,
      __v: 0,
    },
    {
      _id: "6659bc67059c523a5d7eb283",
      user: "Auto Hub",
      representative: "Usama",
      email: "autohub123@gmail.com",
      contact: "0300-00000000",
      address: "Lower canal fsd",
      status: true,
      __v: 0,
    },
    {
      _id: "6659be6a059c523a5d7eb28b",
      user: "Auto Hub",
      representative: "Noman",
      email: "autohub123@gmail.com",
      contact: "0300-00000000",
      address: "Lower canal fsd",
      status: true,
      __v: 0,
    },
  ];

  const [inputValue, setInputValue] = useState("");
  // const [selectState, setSelectState] = useState("");
  // console.log("selectstate", selectState);
  // console.log('console:',inputValue);
  const [car, setCar] = useState(product);

  const filteredContacts = car.filter((item, i) => {
    const searchTerm = inputValue.toLowerCase();
    return (
      item.user.toLowerCase().includes(searchTerm) ||
      item.representative.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.contact.toLowerCase().includes(searchTerm) ||
      item.address.toLowerCase().includes(searchTerm)
    );
  });

  const strAscending = [...filteredContacts].sort((a, b) =>
    a.user > b.user ? 1 : -1
  );

  return (
    <div className=" bg-white rounded-lg pt-4 relative">
      {/* <style>
        {`
          .table-row:nth-child(even) {
            background-color: #e9ecf1;
          }
          .table-row:nth-child(odd) {
            background-color: #ebf8fr;
          }
        `}
      </style> */}
      <div className=" overflow-y-auto">
        <div className="w-[93.6vw] grid place-items-end text-end mb-5">
          <div className="flex border w-[20%]  px-6 py-2 rounded-md border-blue-500">
            {/* <div className="flex gap-2 border-r-2 pr-2">
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
            </div> */}

            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="focus:border-none focus:ring-0 focus:outline-none"
                placeholder="Search"
                name=""
                id=""
              />
              <FaSearch className="translate-y-1" fontSize={20} />
            </div>
          </div>

          {/* <div className="flex  border w-[33%] gap-3 px-6 py-4 shadow-lg rounded-md border-blue-500">
            <div className="flex gap-2 border-r-2 pr-2">
              <select
                name=""
                value={selectState}
                onChange={(e) => setSelectState(e.target.value)}
                className="border-none ring-0 outline-none" 
              >
                <option value="all">All</option>
                <option value=true/option>
                <option value="sold">Sold</option>
              </select>
              <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
              <FaCaretDown color="blue" fontSize={24}/>
            </div>
            <span className="text-3xl">|</span>
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
          </div> */}
        </div>

        <table className="w-[80%] ml-56 mt-2">
          <thead>
            <tr
              style={{}}
              className="text-left text-blue-900 border-t  border-[#ececec]"
            >
              <th>User</th>
              <th>Representative</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="border border-b ">
            {strAscending.map((item, i) => {
              return <Row key={item._id} srNo={i + 1} product={item} />;
            })}
          </tbody>
        </table>
      </div>
      {/* {openPopup && <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable}/> } */}
      {/* <div className="min-h-[100%]  w-full bg-black/60 grid place-items-center absolute top-0  ">
        <div className="w-[22%] shadow-md shadow-white/30 rounded-md h-[30%] bg-white flex flex-col">
          <div className="flex items-center justify-center grow-[4] border-b-2 ">
            <p className="font-semibold font-sans text-center text-lg ">
              Are you sure,your car has <br /> been sold ?
            </p>
          </div>
          <div className="grid place-items-end gap-2 grow-[1]  ">
            <div className="flex gap-2 justify-center mr-2 ">
              <button className="bg-red-600 w-14 h-10 rounded-md -translate-y-2">
                No
              </button>
              <button className="bg-green-800 w-14 h-10 rounded-md -translate-y-2">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ShowCar;

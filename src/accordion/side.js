import { React, useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Side = () => {
  const [accordionOpen, setOpen] = useState(true); // first state
  const [city, setCity] = useState(true); // city state
  const [province, setProvince] = useState(true); // province state
  const [make, setMake] = useState(true); // make state
  const [price, setPrice] = useState(true); // price state
  const [year, setYear] = useState(true); // year state
  const [milage, setMilage] = useState(true); // milage state
  const [registerIn, setRegisterIn] = useState(true); // registerIn state
  const [transmission, setTransmission] = useState(true); // transmission state
  const [color, setColor] = useState(false); // color state
  const [engine, setEngine] = useState(false); // engine state
  const [engineCapacity, setEngineCapacity] = useState(false); // engineCapacity state
  const [assemble, setAssemble] = useState(false); // assemble state
  const [doors, setDoors] = useState(false); // doors state
  const [bodyType, setBodyType] = useState(false); // bodyTypes state
  const [seatingCapacity, setSeatingCapacity] = useState(false); // seatingCapacity state
  const [model, setModel] = useState(false); // model state
  const [sellerType, setSellerType] = useState(false); // seller type state
  const [picture, setPicture] = useState(false); // picture availability state
  const [video, setVideo] = useState(false); // video availability state
  const [ad, setAd] = useState(false); // Ad Type state

  return (
    <div className="p-6">
      <div className="w-[20%] bg-slate-100 flex-col">
        <h1 className="bg-blue-400 p-2 text-white">Show Result By:</h1>
        <button
          onClick={() => setOpen(!accordionOpen)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Search Filters</span>
          {accordionOpen ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden py-2 place-items-center transition-all duration-500 ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden h-[85%] w-[85%] flex">
            <input
              placeholder="e.g. Honda In Lahore"
              className="outline-none ring-0 p-1 h-[100%] w-[86%]"
            ></input>
            <button className="bg-blue-900 text-white h-[100%] w-[14%]">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setCity(!city)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">City</span>
          {city ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            city ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden m-2 flex text-sm">
            <form>
              <input type="checkbox" id="1" name="lahore" value="lahore" />
              <label for="lahore"> Lahore</label>
              <br />
              <input
                type="checkbox"
                id="2"
                name="faisalabad"
                value="faisalabad"
              />
              <label for="faisalabad"> Faisalabad</label>
              <br />
              <input type="checkbox" id="3" name="karachi" value="karachi" />
              <label for="karachi"> karachi</label>
              <br />
              <input type="checkbox" id="4" name="multan" value="multan" />
              <label for="multan"> Multan</label>
              <br />
              <input
                type="checkbox"
                id="5"
                name="islamabad"
                value="islamabad"
              />
              <label for="islamabad"> Islamabad</label>
              <br />
              <br />
              <a className="text-blue-400" href="t">
                <u>more choices...</u>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setProvince(!province)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Province</span>
          {province ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            province
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden m-2 flex text-sm">
            <form>
              <input type="checkbox" id="1" name="punjab" value="punjab" />
              <label for="punjab"> Punjab</label>
              <br />
              <input type="checkbox" id="2" name="sindh" value="sindh" />
              <label for="sindh"> Sindh</label>
              <br />
              <input
                type="checkbox"
                id="3"
                name="balochistan"
                value="balochistan"
              />
              <label for="balochistan"> Balochistan</label>
              <br />
              <input type="checkbox" id="4" name="kpk" value="kpk" />
              <label for="kpk"> kpk</label>
              <br />
              <input
                type="checkbox"
                id="5"
                name="azad kashmir"
                value="azad kashmir"
              />
              <label for="azad kashmir"> Azad Kashmir</label>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setMake(!make)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Make</span>
          {make ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            make ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden m-2 flex text-sm">
            <form>
              <input type="checkbox" id="1" name="toyota" value="toyota" />
              <label for="toyota"> Toyota</label>
              <br />
              <input type="checkbox" id="2" name="honda" value="honda" />
              <label for="honda"> Honda</label>
              <br />
              <input type="checkbox" id="3" name="suzuki" value="suzuki" />
              <label for="suzuki"> Suzuki</label>
              <br />
              <input type="checkbox" id="4" name="nissan" value="nissan" />
              <label for="nissan"> Nissan</label>
              <br />
              <input type="checkbox" id="5" name="changan" value="changan" />
              <label for="changan"> Changan</label>
              <br />
              <br />
              <a className="text-blue-400" href="t">
                <u>more choices...</u>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setPrice(!price)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Price Range</span>
          {price ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden py-2 place-items-center transition-all duration-500 ${
            price ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden  flex border h-[85%] w-[85%]">
            <input
              placeholder="from"
              className="outline-none border p-1  h-[100%] w-[43%] "
            ></input>
            <input
              placeholder="to"
              className="outline-none border p-1 w-[43%] h-[100%]"
            ></input>
            <button className="bg-blue-900 text-white h-[100%] w-[14%]">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setYear(!year)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Year</span>
          {year ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden py-2 place-items-center transition-all duration-500 ${
            year ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden  flex border h-[85%] w-[85%]">
            <input
              placeholder="from"
              className="outline-none border p-1  h-[100%] w-[43%] "
            ></input>
            <input
              placeholder="to"
              className="outline-none border p-1 w-[43%] h-[100%]"
            ></input>
            <button className="bg-blue-900 text-white h-[100%] w-[14%]">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setMilage(!milage)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Milage (KM)</span>
          {milage ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden py-2 place-items-center transition-all duration-500 ${
            milage ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden  flex border h-[85%] w-[85%]">
            <input
              placeholder="from"
              className="outline-none border p-1  h-[100%] w-[43%] "
            ></input>
            <input
              placeholder="to"
              className="outline-none border p-1 w-[43%] h-[100%]"
            ></input>
            <button className="bg-blue-900 text-white h-[100%] w-[14%]">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setRegisterIn(!registerIn)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Register In</span>
          {registerIn ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            registerIn
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input type="checkbox" id="1" name="punjab" value="punjab" />
              <label for="punjab"> Punjab</label>
              <br />
              <input type="checkbox" id="2" name="sindh" value="sindh" />
              <label for="sindh"> Sindh</label>
              <br />
              <input type="checkbox" id="3" name="Lahore" value="Lahore" />
              <label for="Lahore"> Lahore</label>
              <br />
              <input
                type="checkbox"
                id="4"
                name="faisalabad"
                value="faisalabad"
              />
              <label for="faisalabad"> Faisalabad</label>
              <br />
              <input
                type="checkbox"
                id="5"
                name="azad kashmir"
                value="azad kashmir"
              />
              <label for="azad kashmir"> Azad Kashmir</label>
              <br />
              <br />
              <a className="text-blue-400" href="t">
                <u>more choices...</u>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setTransmission(!transmission)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Transmission</span>
          {transmission ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            transmission
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input
                type="checkbox"
                id="1"
                name="automatic"
                value="automatic"
              />
              <label for="automatic"> Automatic</label>
              <br />
              <input type="checkbox" id="2" name="manual" value="manual" />
              <label for="manual"> Manual</label>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setColor(!color)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Color</span>
          {color ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            color ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden m-2 flex text-sm">
            <form>
              <input type="checkbox" id="1" name="black" value="black" />
              <label for="black"> Black</label>
              <br />
              <input type="checkbox" id="2" name="white" value="white" />
              <label for="white"> White</label>
              <br />
              <input type="checkbox" id="3" name="red" value="red" />
              <label for="red"> Red</label>
              <br />
              <input type="checkbox" id="4" name="silver" value="silver" />
              <label for="silver"> Silver</label>
              <br />
              <input type="checkbox" id="5" name="grey" value="grey" />
              <label for="grey"> Grey</label>
              <br />
              <input type="checkbox" id="6" name="blue" value="blue" />
              <label for="blue"> Blue</label>
              <br />
              <br />

              <a href="t" className="text-blue-400">
                <u>more choices...</u>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setEngine(!engine)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Engine Type</span>
          {engine ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            engine ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden m-2 flex text-sm">
            <form>
              <input type="checkbox" id="1" name="petrol" value="petrol" />
              <label for="petrol"> Petrol</label>
              <br />
              <input type="checkbox" id="2" name="hybrid" value="hybrid" />
              <label for="hybrid"> Hybrid</label>
              <br />
              <input type="checkbox" id="3" name="electric" value="electric" />
              <label for="electric"> Electric</label>
              <br />
              <input type="checkbox" id="4" name="cng" value="cng" />
              <label for="cng"> CNG</label>
              <br />
              <input type="checkbox" id="5" name="diesel" value="diesel" />
              <label for="diesel"> Diesel</label>
              <br />
              <br />
              <a href="t" className="text-blue-400">
                <u>more choices...</u>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setEngineCapacity(!engineCapacity)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Engine Capacity (cc)</span>
          {engineCapacity ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden py-2 place-items-center transition-all duration-500 ${
            engineCapacity
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden  flex border h-[85%] w-[85%]">
            <input
              placeholder="from"
              className="outline-none border p-1  h-[100%] w-[43%] "
            ></input>
            <input
              placeholder="to"
              className="outline-none border p-1 w-[43%] h-[100%]"
            ></input>
            <button className="bg-blue-900 text-white h-[100%] w-[14%]">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setAssemble(!assemble)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Assembly</span>
          {assemble ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            assemble
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input type="checkbox" id="1" name="local" value="local" />
              <label for="local"> Local</label>
              <br />
              <input type="checkbox" id="2" name="imported" value="imported" />
              <label for="imported"> Imported</label>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setDoors(!doors)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Number of Doors</span>
          {doors ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            doors ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input type="checkbox" id="1" name="4" value="4" />
              <label for="4"> 4</label>
              <br />
              <input type="checkbox" id="2" name="5" value="5" />
              <label for="5"> 5</label>
              <br />
              <input type="checkbox" id="3" name="2" value="2" />
              <label for="2"> 2</label>
              <br />
              <input type="checkbox" id="4" name="7" value="7" />
              <label for="7"> 7</label>
              <br />
              <input type="checkbox" id="5" name="3" value="3" />
              <label for="3"> 3</label>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setBodyType(!bodyType)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Body Type</span>
          {bodyType ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            bodyType
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <div className="flex gap-3">
                <input type="checkbox" id="1" name="sedan" value="sedan" />
                <label for="sedan" className="flex-col">
                  <img
                    src="sedan.png"
                    alt="sedan"
                    className="w-20 h-10 mix-blend-darken"
                  ></img>{" "}
                  Sedan
                </label>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" id="2" name="suv" value="suv" />
                <label for="suv" className="flex-col gap-1">
                  <img
                    src="suv.png"
                    alt="suv"
                    className="w-20 h-10 mix-blend-darken "
                  ></img>{" "}
                  Suv
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  id="3"
                  name="crossover"
                  value="crossover"
                />
                <label for="crossover" className="flex-col gap-1">
                  <img
                    src="crossover.png"
                    alt="crossover"
                    className="w-20 h-10 mix-blend-darken "
                  ></img>
                  Crossover
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  id="4"
                  name="hatchback"
                  value="hatchback"
                />
                <label for="hatchback" className="flex-col gap-1">
                  <img
                    src="hatchback.jpg"
                    alt="crossover"
                    className="w-20 h-10 mix-blend-darken"
                  ></img>
                  Hatchback
                </label>
              </div>
              <br />
              <a href="t" className="text-blue-400">
                <u>more choices...</u>
              </a>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setSeatingCapacity(!seatingCapacity)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Seating Capacity</span>
          {seatingCapacity ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            seatingCapacity
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input type="checkbox" id="1" name="4" value="4" />
              <label for="4"> 4</label>
              <br />
              <input type="checkbox" id="2" name="5" value="5" />
              <label for="5"> 5</label>
              <br />
              <input type="checkbox" id="3" name="2" value="2" />
              <label for="2"> 2</label>
              <br />
              <input type="checkbox" id="4" name="7" value="7" />
              <label for="7"> 7</label>
              <br />
              <input type="checkbox" id="5" name="3" value="3" />
              <label for="3"> 3</label>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setModel(!model)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Model Category</span>
          {model ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            model ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input type="checkbox" id="1" name="family" value="family" />
              <label for="family"> Family Car</label>
              <br />
              <input type="checkbox" id="2" name="small" value="small" />
              <label for="small"> Small</label>
              <br />
              <input type="checkbox" id="3" name="big" value="big" />
              <label for="big"> Big</label>
              <br />
              <input type="checkbox" id="4" name="luxury" value="luxury" />
              <label for="luxury"> Luxury</label>
              <br />
              <input type="checkbox" id="5" name="old" value="old" />
              <label for="old"> Old</label>
              <br />
              <br />
              <a href="t" className="text-blue-400">
                <u>more choices...</u>
              </a>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setSellerType(!sellerType)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Seller Type</span>
          {sellerType ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            sellerType
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input
                type="checkbox"
                id="1"
                name="individuals"
                value="individuals"
              />
              <label for="individuals"> Individuals</label>
              <br />
              <input type="checkbox" id="2" name="dealers" value="dealers" />
              <label for="dealers"> Dealers</label>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setPicture(!picture)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Picture Availability</span>
          {picture ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            picture
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input
                type="checkbox"
                id="1"
                name="withPicture"
                value="withPicture"
              />
              <label for="withPicture"> With Pictures</label>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setVideo(!video)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Video Availability</span>
          {video ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            video ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input
                type="checkbox"
                id="1"
                name="withVideo"
                value="withVideo"
              />
              <label for="withVideo"> With Video</label>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[20%] bg-slate-100 flex-col">
        <button
          onClick={() => setAd(!ad)}
          className="p-2 flex justify-between w-full"
        >
          <span className="font-[450]">Ad Type</span>
          {ad ? <MdExpandLess /> : <MdExpandMore />}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            ad ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-sm m-2 flex">
            <form>
              <input type="checkbox" id="1" name="featured" value="featured" />
              <label for="featured"> Featured Ads</label>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;

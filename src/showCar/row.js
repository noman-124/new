// import axios from 'axios';
// import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";


const Row = ({ srNo, product /* ,setOpenPopup,setUpdateTable */ }) => {
  // const [able, setAble] = useState(false);
  // console.log('first')
  // const dispatch = useAppDispatch()
  //   const onEdit = () => {
  //     dispatch(setProduct(product))
  //     setOpenPopup(true)
  //   }
  //   const onDelete = async()=>{
  //     dispatch(setLoading(true))
  //     const payload = {
  //       fileKey : product.fileKey
  //     }
  //   await  axios.delete('/api/uploadthing',{data:payload}).then(async(res)=>{
  //     await  axios.delete(`/api/deleteproduct/${product._id}`).then((res)=>{
  //         console.log('res');
  //         setUpdateTable((prevstate)=>!prevstate)
  //       })
  //       .catch((err)=>console.log(err,'second'))
  //       .finally(()=>dispatch(setLoading(false)))
  //     }).catch((err)=>{
  //       console.log(err,'first')
  //       dispatch(setLoading(false))
  //     })
  //   }
  // const [available, setAvailable] = useState("available");
  // // const [toggle,setToggle] = useState(true)
  // const [toggle, setToggle] = useState(product.status);

  // useEffect(() => {
  //   setToggle(product.status);
  // }, [product.status]);

  // const handleToggle = () => {
  //   setToggle(!toggle);
  //   // Add your logic to handle the change in product.status here
  // };
  // console.log(toggle);
  return (
    <>
      <tr className="border-b table-row" key={product._id}>
        <td className="p-2">{product.user}</td>
        <td>{product.representative}</td>
        <td>{product.contact}</td>
        <td>{product.email}</td>
        <td>{product.address}</td>
        <td className="py-2 px-4 border-b">
          {product.status ? (
            <span className="text-2xl">
              <TiTick className="border bg-green-500 text-white" />
            </span>
          ) : (
            <span className=" text-2xl">
              <IoClose className="border bg-red-600 text-white font-extrabold " />
            </span>
          )}
        </td>

        {/* <td className="ml-2 inline-block">
          <img
            src={product.pic}
            width={50}
            height={50}
            className="h-12"
            alt="placeholder"
          />
        </td> */}

        {/* <td>
          <HiPencilSquare className="inline-block mr-4 cursor-pointer hover:text-red-500" />
          <MdDelete className="inline-block cursor-pointer hover:text-red-500" />
        </td> */}
      </tr>
    </>
  );
};

export default Row;

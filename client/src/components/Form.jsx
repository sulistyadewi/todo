"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";

function Form() {
  const [openModal, setOpenModal] = useState(false);
  const toogleModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };
  return (
    <div className="">
      <button
        onClick={toogleModal}
        className="bg-gradient-to-br from-teal-700 to-teal-400 hover:scale-110 mt-8 px-3 py-3 ml-[58rem] rounded-full"
      >
        <IoIosAdd className="text-white w-8 h-8" />
      </button>
      <div
        className={`border-[3px] border-teal-500 bg-gradient-to-b from-white to-teal-50 mt-8 max-w-sm px-6 py-6 mx-auto rounded-lg ${
          openModal ? "" : "hidden"
        }`}
      >
        <form action="">
          <div>
            <IoClose
              onClick={toogleModal}
              className="w-6 h-6 text-slate-600 ml-[19.5rem] hover:text-red-500"
            />
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="" className="mt-2 text-white font-semibold">
              Title
            </label> */}
            <input
              type="text"
              placeholder="Title"
              className="h-12 mt-2 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
            />
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="" className="mt-3 text-white font-semibold">
              Description
            </label> */}
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Description"
              className="mt-3 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
            ></textarea>
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="" className="mt-3 text-white font-semibold">
              Due_Date
            </label> */}
            <input
              type="datetime-local"
              className="h-12 mt-2 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
            />
          </div>
          <button className="mt-4 bg-teal-500 hover:bg-teal-700 text-white font-semibold w-full py-2 rounded-full">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
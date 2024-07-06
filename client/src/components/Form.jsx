"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import baseURL from "@/baseURL";

function Form() {
  let todo = { name: "", desc: "", due_date: "" };
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState(todo);

  const handleOnChange = (e) => {
    setNewToDo({
      ...newToDo,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    console.log(newToDo, "ini new todo");
    console.log(token, "ini token");
    try {
      let respons = await fetch(`http://localhost:3000/todo`, {
        method: "POST",
        headers: { "Content-type": "application/json", token: token },
        body: JSON.stringify(newToDo),
      });

      console.log(respons.status);
      if (respons.ok) {
        let todo = await respons.json();
        localStorage.setItem("add", todo.add);
        setNewToDo({ name: "", desc: "", due_date: "" });
        setOpenModal(false);
        router.replace("/todo");
      } else {
        let errData = await respons.json();
        console.log(errData);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [openModal, setOpenModal] = useState(false);
  const toogleModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  return (
    <div className="">
      <div className="relative">
        <button
          onClick={toogleModal}
          className="bg-gradient-to-br from-teal-700 to-teal-400 absolute hover:scale-110 mt-4  px-3 py-3 ml-[76rem] rounded-full"
        >
          <IoIosAdd className="text-white w-8 h-8" />
        </button>
      </div>
      <div
        className={`border-[3px] border-teal-500 bg-gradient-to-b from-white to-teal-50 mt-8 max-w-sm px-6 py-6 mx-auto rounded-lg ${
          openModal ? "" : "hidden"
        }`}
      >
        <form action="" onSubmit={handleSubmit} className="">
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
              onChange={handleOnChange}
              placeholder="Title"
              name="name"
              value={newToDo.name}
              className="h-12 mt-2 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
            />
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="" className="mt-3 text-white font-semibold">
              Description
            </label> */}
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="5"
              onChange={handleOnChange}
              placeholder="Description"
              value={newToDo.desc}
              className="mt-3 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
            ></textarea>
          </div>
          <div className="flex flex-col">
            {/* <label htmlFor="" className="mt-3 text-white font-semibold">
              Due_Date
            </label> */}
            <input
              onChange={handleOnChange}
              type="date"
              value={newToDo.due_date}
              name="due_date"
              className="h-12 mt-2 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-teal-500 hover:bg-teal-700 text-white font-semibold w-full py-2 rounded-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Form from "@/components/Form";
import auth from "@/HOC/auth";
import Link from "next/link";
import baseURL from "@/baseURL";

function ToDo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${baseURL}/todo`, {
        method: "GET",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setTodos(data);
    };
    fetchData();
  }, []);
  console.log(todos, "ini todos");
  return (
    <div>
      {/* //   {toDos.map((toDo, index) => ( */}
      <Form />
      <div className="mt-5 max-w-sm mx-auto border-2 border-teal-300 p-6 rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="#CBD5E1"
          className="w-7 h-7"
        >
          <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z" />
        </svg>
        <h2 className="font-semibold mt-4 text-xl">title</h2>
        <p className="mt-3 text-slate-400 px-2 text-lg">"description"</p>
        <p className="mt-3 px-2 text-slate-400">due_date</p>
        <div className="flex gap-3 mt-4 px-2">
          <button className="bg-amber-500 px-4 py-2 text-white rounded-md font-semibold">
            Update
          </button>
          <button className="bg-teal-500 px-4 py-2 text-white rounded-md font-semibold">
            Done
          </button>
        </div>
      </div>
      <Link href={"/logOut"} className="bg-blue-500 text-white">
        Log Out
      </Link>
      {/* // ))} */}
    </div>
  );
}

export default auth(ToDo);

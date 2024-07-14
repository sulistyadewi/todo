"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Form from "@/components/Form";
import auth from "@/HOC/auth";
import Link from "next/link";
import baseURL from "@/baseURL";
import Error from "next/error";
import Update from "@/components/Update";
import Swal from "sweetalert2";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        let token = localStorage.getItem("token");
        console.log(token, "ini dari todo");
        try {
          let respons = await fetch(`${baseURL}/todo`, {
            method: "GET",
            headers: { "Content-type": "application/json", token },
          });
          if (!respons.ok) {
            throw new Error("failed to patch todo");
          }
          let data = await respons.json();
          setTodos(data.data);
        } catch (err) {
          console.log(err, "err dari catch");
        }
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Silahkan Login");
      }
      let respons = await fetch(`${baseURL}/todo/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json", token },
      });
      if (!respons.ok) {
        throw new Error("Gagal Menghapus Todo");
      }
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      Swal.fire("Delete", "Todo has been delete", "success");
    } catch (err) {}
  };

  const formatDate = (dateString) => {
    let date = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, date);
  };

  const handleUpdate = async (id, updateTodo) => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Silahkan Login");
      }
      let respons = await fetch(`${baseURL}/todo/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json", token },
        body: JSON.stringify(updateTodo),
      });
      if (!respons.ok) {
        // throw new Error("Gagal Mengupdate");
        const errData = await respons.json();
        const errMessage = errData.errors.join("<br>");
        Swal.fire("Error!", errMessage, "error");
        return;
      }
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updateTodo } : todo
        )
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAdd = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const [openModal, setOpenModal] = useState();
  const toogleModal = () => {
    setOpenModal(!openModal);
  };

  console.log(todos, "ini todos");

  return (
    <div className="mb-4">
      {/* //   {toDos.map((toDo, index) => ( */}
      <div className="mt-4">
        <Link
          href={"/logOut"}
          className="bg-black text-white font-semibold py-2 px-3 rounded-md ml-4"
        >
          Log Out
        </Link>
      </div>
      <Form handleAdd={handleAdd} />
      <div className="grid grid-cols-4 items-center justify-center">
        {todos && todos.length > 0 ? (
          todos.map((todo, index) =>
            todo.status == false ? (
              <div
                key={index}
                className="mt-24 max-w-sm mx-auto border-2 border-red-300 p-6 rounded-lg shadow-md "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="#CBD5E1"
                  className="w-7 h-7"
                >
                  <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z" />
                </svg>

                <h2 className="font-semibold mt-4 text-xl">{todo.name}</h2>
                <p className="mt-3 text-slate-400 px-2 text-lg">{todo.desc}</p>
                <p className="mt-3 px-2 text-slate-400">
                  {formatDate(todo.due_date)}
                </p>
                <div className="flex gap-3 mt-4 px-2">
                  <button
                    onClick={() => setSelectedTodo(todo)}
                    className="bg-amber-500 hover:bg-amber-700 px-4 py-2 text-white rounded-md font-semibold"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-teal-500 hover:bg-teal-700 px-4 py-2 text-white rounded-md font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="mt-24 max-w-sm mx-auto border-2 border-teal-300 p-6 rounded-lg shadow-md "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="#CBD5E1"
                  className="w-7 h-7"
                >
                  <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z" />
                </svg>

                <h2 className="font-semibold mt-4 text-xl">{todo.name}</h2>
                <p className="mt-3 text-slate-400 px-2 text-lg">{todo.desc}</p>
                <p className="mt-3 px-2 text-slate-400">
                  {formatDate(todo.due_date)}
                </p>
                <div className="flex gap-3 mt-4 px-2">
                  <button
                    onClick={() => setSelectedTodo(todo)}
                    className="bg-amber-500 hover:bg-amber-700 px-4 py-2 text-white rounded-md font-semibold"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-teal-500 hover:bg-teal-700 px-4 py-2 text-white rounded-md font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>
            )
          )
        ) : (
          <div className="relative">
            <div className="absolute flex items-center justify-center mx-auto w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
        {selectedTodo && (
          <Update
            todo={selectedTodo}
            formUpdate={handleUpdate}
            onClose={() => setSelectedTodo(null)}
          />
        )}
      </div>
    </div>
  );
}

export default auth(ToDo);

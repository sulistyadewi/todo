"use client";
import React, { useEffect, useState } from "react";

function Update({ todo, formUpdate, onClose }) {
  const [name, setname] = useState(todo.name);
  const [desc, setDesc] = useState(todo.desc);
  const [due_date, setDue_date] = useState("");
  useEffect(() => {
    if (todo.due_date) {
      let formatDueDate = new Date(todo.due_date).toISOString().split("T")[0];
      setDue_date(formatDueDate);
    }
  }, [todo.due_date]);

  const handleSubmit = (event) => {
    event.preventDefault();
    formUpdate(todo.id, { name, desc, due_date: due_date });
    onClose();
  };

  return (
    <div className="border-[3px] border-amber-500 bg-gradient-to-b from-white to-amber-50 mt-8 max-w-sm px-6 py-6 mx-auto rounded-lg">
      <form action="" onSubmit={handleSubmit}>
        {/* <div>
          <IoClose className="w-6 h-6 text-slate-600 ml-[19.5rem] hover:text-red-500" />
        </div> */}
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Title"
            className="h-12 mt-2 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
          />
        </div>
        <div>
          <textarea
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id=""
            cols="30"
            rows="5"
            placeholder="Description"
            className="h-12 mt-2 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
          ></textarea>
        </div>
        <div>
          <input
            type="date"
            name="due_date"
            value={due_date}
            onChange={(e) => setDue_date(e.target.value)}
            className="h-12 mt-2 p-1 border-b-2 border-gray-200 rounded text-slate-400 shadow-md outline-slate-500"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="mt-4 bg-amber-500 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-full"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;

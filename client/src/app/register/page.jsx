"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(`http://localhost:3000/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      router.replace("/login");
    } else {
      alert("registration failed");
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center gap-40">
        <div className="flex items-end basis-1/2">
          <div className="relative">
            <h1 className="text-3xl text-white font-semibold tracking-widest z-50 absolute ml-[21.5rem] mt-[19rem]">
              Register
            </h1>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-96 h-96 absolute ml-56 mt-32 z-40"
            >
              <path
                fill="#0D9488"
                d="M38.2,-60.7C49.5,-59.6,58.6,-49.4,65.5,-37.7C72.3,-26.1,76.9,-13,77.3,0.2C77.7,13.5,74,27,64.7,34.4C55.3,41.7,40.4,42.9,28.7,49.7C17,56.4,8.5,68.7,-1.2,70.7C-10.9,72.8,-21.8,64.7,-31,56.6C-40.3,48.4,-47.9,40.2,-58.1,30.8C-68.3,21.4,-81.1,10.7,-83,-1.1C-85,-13,-76.2,-25.9,-65.2,-34.1C-54.3,-42.2,-41.3,-45.5,-30,-46.7C-18.8,-47.8,-9.4,-46.8,2,-50.3C13.4,-53.8,26.9,-61.8,38.2,-60.7Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-96 h-96 absolute ml-64 mt-36"
            >
              <path
                fill="none"
                stroke="#0D9488"
                strokeWidth={3}
                d="M38.2,-60.7C49.5,-59.6,58.6,-49.4,65.5,-37.7C72.3,-26.1,76.9,-13,77.3,0.2C77.7,13.5,74,27,64.7,34.4C55.3,41.7,40.4,42.9,28.7,49.7C17,56.4,8.5,68.7,-1.2,70.7C-10.9,72.8,-21.8,64.7,-31,56.6C-40.3,48.4,-47.9,40.2,-58.1,30.8C-68.3,21.4,-81.1,10.7,-83,-1.1C-85,-13,-76.2,-25.9,-65.2,-34.1C-54.3,-42.2,-41.3,-45.5,-30,-46.7C-18.8,-47.8,-9.4,-46.8,2,-50.3C13.4,-53.8,26.9,-61.8,38.2,-60.7Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-72 h-72 ml-52 absolute mt-52"
            >
              <path
                fill="#10B2A3"
                d="M38.8,-60.1C50.8,-60.2,61.7,-51,65.6,-39.5C69.6,-27.9,66.6,-13.9,64.6,-1.1C62.7,11.7,61.6,23.3,55.9,31.8C50.2,40.3,39.8,45.7,29.7,56.4C19.6,67.2,9.8,83.4,-1.6,86.2C-13.1,89.1,-26.2,78.6,-32.6,65.7C-39,52.8,-38.7,37.5,-42,26.1C-45.3,14.8,-52.2,7.4,-55.1,-1.7C-58,-10.7,-56.9,-21.5,-53,-31.8C-49.1,-42.2,-42.6,-52.3,-33.3,-53.8C-24,-55.4,-12,-48.5,0.7,-49.6C13.3,-50.8,26.7,-60.1,38.8,-60.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-72 h-72 ml-52 absolute mt-32"
            >
              <path
                fill="#0A766D"
                d="M27.4,-42.4C38.4,-35.6,52,-32.8,62.8,-24.2C73.6,-15.7,81.5,-1.4,79.5,11.4C77.6,24.2,65.8,35.5,53.8,43.4C41.9,51.4,29.9,56.1,19.1,54.5C8.3,52.8,-1.3,44.9,-14.3,43.4C-27.2,42,-43.6,47,-54.1,42.6C-64.6,38.2,-69.2,24.4,-66.2,12.6C-63.1,0.7,-52.4,-9.2,-46.3,-20.5C-40.1,-31.8,-38.5,-44.6,-31.5,-53.2C-24.6,-61.8,-12.3,-66.2,-2,-63.1C8.2,-59.9,16.5,-49.2,27.4,-42.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-72 h-72 ml-[10.5rem] absolute mt-48"
            >
              <path
                fill="none"
                stroke="#0A766D"
                strokeWidth={3}
                d="M27.4,-42.4C38.4,-35.6,52,-32.8,62.8,-24.2C73.6,-15.7,81.5,-1.4,79.5,11.4C77.6,24.2,65.8,35.5,53.8,43.4C41.9,51.4,29.9,56.1,19.1,54.5C8.3,52.8,-1.3,44.9,-14.3,43.4C-27.2,42,-43.6,47,-54.1,42.6C-64.6,38.2,-69.2,24.4,-66.2,12.6C-63.1,0.7,-52.4,-9.2,-46.3,-20.5C-40.1,-31.8,-38.5,-44.6,-31.5,-53.2C-24.6,-61.8,-12.3,-66.2,-2,-63.1C8.2,-59.9,16.5,-49.2,27.4,-42.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div className="basis-1/2 relative">
          <div className="bg-white max-w-md px-6 py-6 rounded-lg absolute mt-44">
            <form action="" onSubmit={handleSubmit} className="">
              <div className="flex flex-col">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="h-12 mt-4 p-1 rounded border-b-2 border-slate-300"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="h-12 mt-4 p-1 rounded border-b-2 border-slate-300"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-teal-600 text-white w-full py-2 rounded-full"
              >
                Register
              </button>
              <p>
                Have an account <Link href={"/login"}>login now!</Link>
              </p>
            </form>
          </div>
          <div className="relative">
            <h6 className="text-slate-500 absolute mt-[29rem] ml-20">
              Or register with
            </h6>
            <ul className="absolute flex gap-8 mt-[32rem] ml-10">
              <li className="bg-gray-200 px-3 py-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  className="w-6 h-6"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </li>
              <li className="bg-gray-200 px-3 py-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </li>
              <li className="bg-gray-200 px-3 py-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;

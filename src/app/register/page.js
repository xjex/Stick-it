"use client";
import React from "react";
import supabase from "@/components/supabaseClient";
import { useState } from "react";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const createAccount = async () => {
    // const { user, session, error } = await supabase.auth.signUp({
    //   email: email,
    //   password: password,
    //   displayName: displayName,
    //   phone: phone,
    // });
    // console.log(email, password);
    // console.log(user, session, error);

    console.log("Not implemented yet");
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      {/* create signup */}

      <div className=" flex flex-col p-4 max-w-2xl shadow-md rounded-md">
        <input
          className="input input-bordered input-primary border p-2 mb-4"
          placeholder="Email"
          spellCheck="false"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          className="input input-bordered input-primary border p-2 mb-4"
          placeholder="Password"
          spellCheck="false"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <input
          className="input input-bordered input-primary border p-2 mb-4"
          placeholder="Display Name"
          spellCheck="false"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />

        <input
          className="input input-bordered input-primary border p-2 mb-4"
          placeholder="Phone"
          spellCheck="false"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <button
          className="btn btn-primary btn-outline btn-sm"
          onClick={createAccount}
        >
          Sign Up
        </button>

        <div className="flex justify-center items-center my-2">
          <div className="border-t border-gray-300 w-full"></div>
          <div className="mx-2 text-sm text-gray-500">or</div>
          <div className="border-t border-gray-300 w-full"></div>
        </div>
        <div className="icons flex justify-center text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
        </div>

        <div className="text-center  text-sm m-5 ">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";

import React from "react";
import { NewPost } from "./Contents/newpost";
import MCE from "./tiny-editor";
import { useState } from "react";

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const closeImg = () => {
    setIsExpanded(false);
  };

  return (
    <div className="navbar shadow-md">
      <div className="navbar-start text-white">
        <details className="dropdown " role="button">
          {/* <summary className="m-1 btn">open or close</summary> */}
          <summary tabIndex="0" role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </summary>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content y-3 mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Retro"
                value="retro"
              />
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Nord"
                value="nord"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Coffee"
                value="coffee"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
          </ul>
        </details>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-white">Stick Up!</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle  text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {/* <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>{" "}
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> */}

        {/* modal */}
        <button
          className="btn btn-ghost btn-circle  text-white"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          New Post
        </button>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {!isExpanded ? (
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              ) : (
                <span
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={closeImg}
                >
                  ✕
                </span>
              )}

              {/* <MCE /> */}
              <NewPost showImage={isExpanded} setShowImage={setIsExpanded} />
            </form>
          </div>
        </dialog>
        {/* modal */}
      </div>
    </div>
  );
};

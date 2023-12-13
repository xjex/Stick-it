"use client";
import React from "react";
import { useModalShowPost } from "../hooks/Moda-ShowPost";
import { useSelector } from "react-redux";
const ShowPost = () => {
  const { postData, test, setPostData, changeData } = useModalShowPost();

  const id = useSelector((state) => state.counter.id);
  const img = useSelector((state) => state.counter.image);
  const title = useSelector((state) => state.counter.title);
  const description = useSelector((state) => state.counter.description);

  return (
    <div>
      {/* <button
        className="btn"
        onClick={() => document.getElementById("showModal").showModal()}
      >
        open modal
      </button> */}
      <dialog id="showModal" className="modal">
        <div className="modal-box text-center ">
          <h3 className="font-bold text-lg">{title}</h3>
          <img src={img} className="w-full" />
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ShowPost;

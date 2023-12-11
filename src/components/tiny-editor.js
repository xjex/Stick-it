"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function MCE() {
  const log = () => {
    if (typeof window !== "undefined") {
      console.log(window.tinyMCE.activeEditor.getContent());
    }
  };
  return (
    <main className=" flex flex-col p-4 max-w-2xl rounded-md">
      <div className="heading text-center font-bold text-2xl m-5">New Post</div>
      <Editor
        apiKey="aexky8s7zovkp4iajdsw3erwmeoisy1e5nar77af47mk00zm"
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",

          skin: "snow",
          selector: "textarea",
        }}
        initialValue="Welcome to TinyMCE!"
      />

      <div className="buttons flex pt-5">
        <div className="btn border p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
          Cancel
        </div>
        <button className="btn btn-outline btn-success  onClick={log} ">
          Post
        </button>
      </div>
    </main>
  );
}

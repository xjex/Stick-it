"use client";
import React, { useState, useEffect } from "react";
import supabase from "../supabaseClient";
export const NewPost = (props) => {
  const isExpanded = props.showImage;
  const setIsExpanded = props.setShowImage;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [getId, setGetId] = useState("");
  const [File, setFile] = useState({});
  const [textCount, setTextCount] = useState(0);

  useEffect(() => {
    const count = description.length;
    setTextCount(count);
  }, [description]);

  const textColor = (num) => {
    if (num == 150) {
      return "text-red-500 ";
    } else if (num >= 50 && num <= 99) {
      return "text-yellow-500";
    } else if (num >= 100 && num <= 149) {
      return "text-orange-500";
    } else {
      return "text-green-500";
    }
  };
  const submitPost = async () => {
    try {
      const { data, error } = await supabase
        .from("Sticky")
        .insert([
          {
            title: title,
            content: description,
            likes: 0,
          },
        ])
        .select("id");

      const returningID = data.map((item) => {
        return item.id;
      });
      //upload image
      try {
        const avatarFile = File;
        const fileExt = avatarFile.name.split(".").pop();
        const fileName = `${returningID}.${fileExt}`;
        const filePath = `public/${fileName}`;
        const { data, error } = await supabase.storage
          .from("sticky")
          .upload(filePath, avatarFile, {
            cacheControl: "3600",
            upsert: false,
          });
        //get image url
        try {
          const { data } = supabase.storage
            .from("sticky")
            .getPublicUrl(filePath);

          const dt = data.publicUrl;

          //update image url
          try {
            const { data, error } = await supabase
              .from("Sticky")
              .update({ img_url: dt })
              .eq("id", returningID);
            //console.log(data, error);
          } catch (error) {
            //console.log(error);
          }

          //console.log(data.publicUrl);
        } catch (error) {
          //console.log(error);
        }

        //console.log(data, error);
      } catch (error) {
        //console.log(error);
      }

      //clear input
      setTitle("");
      setDescription("");
      setImage("");
      setIsExpanded(false);
    } catch (error) {}
  };

  const uploadImage = async (e, id) => {
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    setFile(file);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const countText = (e) => {
    //console.log(count);
  };
  return (
    <div>
      {!isExpanded ? (
        <div className=" text-center font-bold text-2xl m-5 ">New Post</div>
      ) : (
        <div className=" text-center font-bold text-xl m-2 ">Image Preview</div>
      )}
      {isExpanded ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src={image}
            className="object-scale-down rounded-lg"
            onClick={(e) => setIsExpanded(false)}
          />
        </div>
      ) : (
        <div className=" flex flex-col p-4 max-w-2xl rounded-md">
          <input
            className="input input-bordered input-primary border p-2 mb-4"
            placeholder="Title"
            spellCheck="false"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <textarea
            className="textarea textarea-primary sec p-3 h-60 borderoutline-none"
            spellCheck="false"
            value={description}
            maxlength="150"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe everything about this post here"
          ></textarea>

          <div className="icons flex m-2  ">
            <label
              for="upload-photo"
              className="tooltip  tooltip-right tooltip-primary  "
              data-tip="Upload Image"
            >
              <svg
                className="mr-2 hover:scale-110 cursor-pointer transition border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </label>
            <input
              type="file"
              onChange={uploadImage}
              accept="image/*"
              id="upload-photo"
              className="hidden"
            />

            <div
              className={`${textColor(
                textCount
              )}  count ml-auto text-xs font-semibold`}
            >
              {textCount}/150
            </div>
          </div>
          {image && (
            <div className=" ">
              <div className="flex justify-center">
                {/* add x remove button */}
                <div
                  className="avatar indicator  tooltip  tooltip-top "
                  data-tip="Click to Preview Image"
                >
                  <span
                    className=" indicator-item badge badge-ghost hover:badge-error cursor-pointer"
                    onClick={(x) => setImage("")}
                  >
                    ✕
                  </span>
                  <div className="object-contains object-top h-48 w-96   rounded-lg">
                    <img
                      class="object-cover h-48 w-96"
                      src={image}
                      alt=""
                      onClick={(e) => setIsExpanded(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center mt-2">
            <button
              className="btn btn-wide btn-outline btn-primary full"
              onClick={submitPost}
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";

import NoPost from "./noPost";
import { BLoader } from "../Loaders/button_loader";

import { useSelector, useDispatch } from "react-redux";
import {
  getPostData,
  decrement,
  incrementByAmount,
  selectCount,
} from "../redux/slice";

export const UserPost = (props) => {
  const posts = props.data;

  const [likes, setLikes] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLike = async (id, n_likes) => {
    const { data, error } = await supabase
      .from("Sticky")
      .update({ likes: n_likes + 1 })
      .eq("id", id);

    if (error) {
      //console.log(error);
    } else {
      setLikes(likes + 1);
    }
  };

  const handleDislike = async (id, n_likes) => {
    const { data, error } = await supabase
      .from("Sticky")
      .update({ likes: n_likes - 1 })
      .eq("id", id);
    if (error) {
      //console.log(error);
    } else {
      setLikes(likes - 1);
    }
  };

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className=" flex flex-row  flex-wrap space-4 items-center justify-center">
      {(posts && posts.length === 0 && <NoPost />) ||
        (posts &&
          posts.map((post) => {
            return (
              <div
                className="card shadow-xl xl:hover:scale-105 w-96 bg-primary text-primary-content h- max-w-250 m-3  xl:transition xl:ease-in md:hover:scale-105 md:transition lg:transition lg:ease-in "
                key={post.id}
              >
                <div className="card-body   ">
                  <div className="flex justify-between">
                    {/*  */}
                    <span className="badge ">{post.date}</span>
                    <span className="badge badge-outline">
                      {post.likes} {selectCount} 🧡
                    </span>
                  </div>
                  {post.img_url ? (
                    <img
                      className=" aspect-square object-center object-contain"
                      onClick={() =>
                        dispatch(
                          getPostData({
                            id: post.id,
                            title: post.title,
                            description: post.content,
                            image: post.img_url,
                            likes: post.likes,
                          })
                        )
                      }
                      src={post.img_url}
                      alt=""
                    />
                  ) : (
                    <div></div>
                  )}

                  <span className="card-title">{post.title}</span>
                  <p className=" line-clamp-3 text-ellipsis overflow-hidden max-w-10 ">
                    {post.content}
                  </p>
                  <div className="card-actions justify-end m-2">
                    <div className="">
                      <button
                        className="btn"
                        onClick={(e) => handleLike(post.id, post.likes)}
                      >
                        {(loading && <BLoader />) || "🧡"}
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="btn"
                        onClick={(e) => handleDislike(post.id, post.likes)}
                      >
                        {(loading && <BLoader />) || "💔"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }))}
    </main>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { useRouter } from "next/navigation";
import Counter from "../Loaders/counter";
import { useDateValidation } from "@/components/hooks/useDateValidation";
import NoPost from "./noPost";
import { BLoader } from "../Loaders/button_loader";
export const UserPost = (props) => {
  const posts = props.data;
  const { hr, mn, sec } = useDateValidation();
  const router = useRouter();
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

  return (
    <main className=" flex flex-row  flex-wrap space-4 items-center justify-center">
      {(posts && posts.length === 0 && <NoPost />) ||
        (posts &&
          posts.map((post) => {
            return (
              <div
                className="card  xl:hover:scale-105 w-96 bg-primary text-primary-content h- max-w-250 m-3  xl:transition xl:ease-in md:hover:scale-105 lg:transition lg:ease-in "
                key={post.id}
              >
                <div className="card-body ">
                  <div className="flex justify-between">
                    {/*  */}
                    <span className="badge ">{post.date}</span>
                    <span className="badge badge-outline">{post.likes} 🧡</span>
                  </div>
                  {post.img_url ? (
                    <img
                      className=" aspect-square object-center object-contain"
                      src={post.img_url}
                      alt=""
                    />
                  ) : (
                    <div></div>
                  )}

                  <h2 className="card-title">{post.title}</h2>
                  <p className="text-ellipsis overflow-hidden max-w-300 max-h-20">
                    {post.content}
                  </p>

                  <div className="card-actions  justify-end">
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

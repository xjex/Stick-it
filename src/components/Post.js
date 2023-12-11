"use client";
import React, { useEffect, useState } from "react";
import supabase from "./supabaseClient";
import { useRouter } from "next/navigation";
export const UserPost = (props) => {
  const posts = props.data;
  const router = useRouter();
  const [likes, setLikes] = useState(0);
  useEffect(() => {}, [posts]);

  const getLikes = async (id) => {
    const { data, error } = await supabase
      .from("Sticky")
      .select("likes")
      .eq("id", id);
    if (error) {
      console.log(error);
    } else {
      return data;
    }
    console.log(data);
  };

  const handleLike = async (id) => {
    getLikes(id).then((data) => {
      setLikes(data[0].likes);
    });

    const { data, error } = await supabase
      .from("Sticky")
      .update({ likes: likes + 1 })
      .eq("id", id)
      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    setLikes(0);
  };

  const handleDislike = async (id) => {
    getLikes(id).then((data) => {
      setLikes(data[0].likes);
    });

    const { data, error } = await supabase
      .from("Sticky")
      .update({ likes: likes - 1 })
      .eq("id", id)
      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    setLikes(0);
  };

  return (
    <main className=" flex flex-row  flex-wrap space-4 items-center justify-center">
      {posts &&
        posts.map((post) => {
          return (
            <div
              className="card w-96 bg-primary text-primary-content m-3"
              key={post.id}
            >
              <div className="card-body">
                <div className="flex justify-between">
                  <span className="badge ">{post.date}</span>
                  <span className="badge badge-outline">{post.likes} like</span>
                </div>
                <h2 className="card-title">{post.title}</h2>
                <p>{post.content}</p>

                <div className="card-actions  justify-end">
                  <div className="">
                    <button
                      className="btn"
                      onClick={(e) => handleLike(post.id)}
                    >
                      👍
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="btn"
                      onClick={(e) => handleDislike(post.id)}
                    >
                      💔
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </main>
  );
};

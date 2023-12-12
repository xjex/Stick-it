"use client";
import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { useRouter } from "next/navigation";
import Counter from "../Loaders/counter";
import { useDateValidation } from "@/components/hooks/useDateValidation";
import NoPost from "./noPost";
export const UserPost = (props) => {
  const posts = props.data;
  const { hr, mn, sec } = useDateValidation();
  const router = useRouter();
  const [likes, setLikes] = useState(0);
  const [isAllowVote, setIsAllowVote] = useState(false);
  const [post_id, setId] = useState(null);
  useEffect(() => {
    if (post_id === null) return;
    else {
      console.log("useeffect triggered");
    }
  }, [post_id]);

  //vote only once

  const getLikes = async () => {
    const { data, error } = await supabase
      .from("Sticky")
      .select("likes")
      .eq("id", post_id);
    if (data) {
      setLikes(data[0].likes);
    } else {
      console.log(error);
    }
  };

  const handleLike = async (id) => {
    setId(id);
    await getLikes();
    const { data, error } = await supabase
      .from("Sticky")
      .update({ likes: likes + 1 })
      .eq("id", id);

    if (error) {
      console.log(error);
    } else {
      setLikes(likes + 1);
      setIsAllowVote(true);
    }
    // console.log(postlikes);
  };

  const handleDislike = async (id) => {
    console.log(id);
    setId(id);
    await getLikes();
    const { data, error } = await supabase
      .from("Sticky")
      .update({ likes: likes - 1 })
      .eq("id", id);

    if (error) {
      console.log(error);
    } else {
      setLikes(likes - 1);
      setIsAllowVote(true);
    }
    console.log(likes);
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
                  {/*  */}
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

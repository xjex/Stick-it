"use client";
import Image from "next/image";
import { Nav } from "../components/nav";
import { NewPost } from "@/components/newpost";
import MCE from "@/components/tiny-editor";
import { UserPost } from "@/components/Post";
import supabase from "@/components/supabaseClient";
import React, { useEffect, useState } from "react";
import { useDateValidation } from "./hooks/useDateValidation";
import { useRouter } from "next/navigation";
export default function Home() {
  const [fetchData, setFetchData] = useState(null);
  const { formatDate } = useDateValidation();
  const router = useRouter();

  useEffect(() => {
    supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Sticky" },
        (payload) => {
          console.log("Change received!", payload);
          fetch();
        }
      )
      .subscribe();

    const fetch = async () => {
      const { data, error } = await supabase
        .from("Sticky")
        .select("*")
        .eq("archived", false);

      if (data) {
        console.log("sotrrrt");
        const responsedata = data
          .filter((item) => formatDate(item.created_at) !== "Invalid")
          .map((item) => ({
            id: item.id,
            title: item.title,
            content: item.content,
            likes: item.likes,
            date: formatDate(item.created_at),
          })) //sortby id here
          .sort((a, b) => b.id - a.id);

        const invalidData = data.filter(
          (item) => formatDate(item.created_at) === "Invalid"
        );

        for (const item of invalidData) {
          try {
            await supabase
              .from("Sticky")
              .update({ archived: true })
              .eq("id", item.id)
              .select();
            console.log(`Item with ID ${item.id} archived successfully.`);
          } catch (error) {
            console.error(`Error archiving item with ID ${item.id}:`, error);
          }
        }

        setFetchData(responsedata);
      }
    };

    fetch();

    //sort fetchdata by ID
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>
        <div className="text-center font-bold text-3xl p-10">
          24 hour posting
        </div>
        <UserPost data={fetchData} />
      </div>
    </main>
  );
}

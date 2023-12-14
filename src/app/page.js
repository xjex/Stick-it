"use client";
import Image from "next/image";

import { UserPost } from "@/components/Contents/Post";
import supabase from "@/components/supabaseClient";
import React, { useEffect, useState } from "react";
import { useDateValidation } from "../components/hooks/useDateValidation";
import { useRouter } from "next/navigation";
import { Helmet } from "react-helmet";
import { Loader } from "@/components/Loaders/loader";
import Head from "next/head";
import ShowPost from "@/components/Contents/showPost";

// redux
import { Provider } from "react-redux";
import store from "@/components/redux/store";
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
        // Sorting and Data Manipulation
        const responsedata = data
          .filter((item) => formatDate(item.created_at) !== "Invalid")
          .map((item) => ({
            id: item.id,
            title: item.title,
            content: item.content,
            likes: item.likes,
            date: formatDate(item.created_at),
            img_url: item.img_url,
          })) //sortby id here
          .sort((a, b) => b.id - a.id);

        const invalidData = data.filter(
          (item) => formatDate(item.created_at) === "Invalid"
        );

        //delete invalid data
        invalidData.map(async (item) => {
          try {
            await supabase
              .from("Sticky")
              .update({ archived: true })
              .eq("id", item.id)
              .select();
            // console.log(`Item with ID ${item.id} archived successfully.`);
          } catch (error) {
            // console.error(`Error archiving item with ID ${item.id}:`, error);
          }
        });
        setFetchData(responsedata);
      }
    };

    fetch();

    //sort fetchdata by ID
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Head>
        <title>Home| Stick-up! </title>
        <meta
          name="description"
          content="A simple sticky note app that allows you to post your thoughts and ideas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Sticky, Notes, Stick-up, Stickup" />
        <meta name="author" content="Stick-up" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@stickup" />
        <meta name="twitter:creator" content="@stickup" />
        <meta property="og:url" content="https://stick-up.vercel.app/" />
        <meta property="og:title" content="Stick-up" />
        <meta
          property="og:description"
          content="A simple sticky note app that allows you to post your thoughts and ideas."
        />
        <meta
          property="og:image"
          content="https://stick-up.vercel.app/og.png"
        />
        <meta property="og:image:alt" content="Stick-up" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Additional meta tags */}
      </Head>
      <Provider store={store}>
        <div>
          <div className="text-center font-bold text-3xl p-10">
            Everything will be deleted after 24 hours...
          </div>
          {(fetchData && <UserPost data={fetchData} />) || <Loader />}
        </div>
        <ShowPost />
      </Provider>
    </main>
  );
}

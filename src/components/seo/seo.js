import React from "react";
import Head from "next/head";
export const SEO = (props) => {
  // const title = props.title;
  // const description = props.description;
  // const image = props.image;
  // const url = props.url;
  // const keywords = props.keywords;
  // const author = props.author;
  // const robots = props.robots;
  return (
    <>
      <Head>
        <title>Home| Stick-up! </title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Stick-up! is a social media platform that allows users to post their thoughts and ideas in a sticky note format."
        />
        <meta
          name="keywords"
          content="social media, sticky notes, stick-up, stick, up, stickup, stick-up!, stick-up!, stickup!, stick up,"
        />
        <meta name="author" content="Stick-up!" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Home| Stick-up! " />
        <meta
          property="og:description"
          content="Stick-up! is a social media platform that allows users to post their thoughts and ideas in a sticky note format."
        />
        <meta
          property="og:image"
          content="https://xleahmgrjfdmuxgfgcog.supabase.co/storage/v1/object/public/sticky/meta/Stickup.PNG?t=2023-12-14T08%3A39%3A26.489Z"
        />
        <meta property="og:url" content="https://stick-up.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stick-up!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home| Stick-up! " />
        <meta
          name="twitter:description"
          content="Stick-up! is a social media platform that allows users to post their thoughts and ideas in a sticky note format."
        />
        <meta
          name="twitter:image"
          content="https://xleahmgrjfdmuxgfgcog.supabase.co/storage/v1/object/public/sticky/meta/Stickup.PNG?t=2023-12-14T08%3A39%3A26.489Z"
        />
        <meta name="twitter:site" content="@stickup" />
        <meta name="twitter:creator" content="@stickup" />
        <meta name="twitter:domain" content="stick-up.vercel.app" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Stick-up!" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="3 minutes" />
        <meta name="twitter:label3" content="Published on 2023" />
        <meta name="twitter:data3" content="2023-12-14T08:39:26.489Z" />

        {/* Additional meta tags */}
      </Head>
    </>
  );
};

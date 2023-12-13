import React, { useState } from "react";

export const useModalShowPost = () => {
  const [postData, setPostData] = useState(null);

  const changeData = (data) => {
    return postData;
  };

  return {
    setPostData,
    postData,
    changeData,
  };
};

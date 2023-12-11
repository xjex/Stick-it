import React, { useState } from "react";

export const useModalPost = () => {
  const [showModal, setShowModal] = useState(false);

  return {
    showModal,
    setShowModal,
  };
};

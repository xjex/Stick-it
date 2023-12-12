import { useState, useEffect } from "react";

export const useDateValidation = () => {
  const [mn, setMinutes] = useState(0);
  const [hr, setHours] = useState(0);
  const [sec, setSec] = useState(0);

  const setStates = (mn, hr, sec) => {
    setMinutes(mn);
    setHours(hr);
    setSec(sec);
  };
  const formatDate = (date, timeZone = "UTC") => {
    const acceptedDate = new Date(date);
    const currentDate = new Date();

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone,
    };

    const formattedDate = acceptedDate.toLocaleString("en-US", options);

    const timeDifference = currentDate.getTime() - acceptedDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const t_hours = Math.floor(seconds / 3600);
    const t_minutes = Math.floor((seconds % 3600) / 60);
    const t_seconds = seconds % 60;

    setStates(t_minutes, t_hours, t_seconds);
    if (seconds <= 0) {
      return "Just now";
    } else if (seconds < 60) {
      return seconds + (seconds === 1 ? " second ago" : " seconds ago");
    } else if (minutes < 60) {
      return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
    } else if (hours < 24) {
      return hours + (hours === 1 ? " hour ago" : " hours ago");
    } else {
      return "Invalid";
    }
  };

  return {
    formatDate,
    hr,
    mn,
    sec,
    setHours,
    setMinutes,
    setSec,
  };
};

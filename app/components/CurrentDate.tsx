"use client";
import { useState, useEffect } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState("");

  setTimeout(() => {
    const month =
      new Date().getMonth() < 10
        ? `0${new Date().getMonth()}`
        : new Date().getMonth();
    const day =
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate();
    const currentDay = `${day}/${month}/${new Date().getFullYear()}`;

    const hours =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : new Date().getHours();
    const minutes =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : new Date().getMinutes();
    const seconds =
      new Date().getSeconds() < 10
        ? `0${new Date().getSeconds()}`
        : new Date().getSeconds();
    const currentTime = `${hours}:${minutes}:${seconds}`;
    setCurrentDate(`, ${currentDay} - ${currentTime}`);
  }, 1000);

  return <p>Lisbon{currentDate}</p>;
}

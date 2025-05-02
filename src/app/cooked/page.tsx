"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cooked() {
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);

  useEffect(() => {
    // This code will only run in the browser
    const visits = sessionStorage.getItem("cooked-visits") ?? "0";
    if (!visits) {
      sessionStorage.setItem("cooked-visits", "1");
    } else {
      sessionStorage.setItem(
        "cooked-visits",
        (parseInt(visits) + 1).toString()
      );
    }

    setShouldShow(parseInt(visits) % 3 === 2);
  }, []);

  if (shouldShow === false) {
    return notFound();
  }

  if (shouldShow === null) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QVR5oE5mzhc?si=4Wb_Uv3zXkj-LEqL?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

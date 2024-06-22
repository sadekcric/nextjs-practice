"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((d) => (
        <div key={d.title}>
          <Link href={`/Home/${d.title}`}>{d.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default page;

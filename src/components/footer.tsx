"use client";

import { useRouter } from "next/navigation";

export default function footer() {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          router.push("/map");
        }}
      >
        Map
      </button>
      <button>Profile</button>
    </>
  );
}

import React from "react";

export default function NavigatingButton({ text }: { text: string }) {
  return (
    <button className="border-none bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white duration-200 hover:bg-accent-hover">
      {text}
    </button>
  );
}

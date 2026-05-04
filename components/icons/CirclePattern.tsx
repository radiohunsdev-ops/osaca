"use client";

export default function CirclePattern() {
  return (
    <svg
      width="260"
      height="260"
      viewBox="0 0 200 200"
      fill="none"
      className="opacity-90"
    >
      <circle
        cx="70"
        cy="70"
        r="45"
        stroke="white"
        strokeWidth="20"
      />
      <circle
        cx="130"
        cy="70"
        r="45"
        stroke="white"
        strokeWidth="20"
      />
      <circle
        cx="70"
        cy="130"
        r="45"
        stroke="white"
        strokeWidth="20"
      />
      <circle
        cx="130"
        cy="130"
        r="45"
        stroke="white"
        strokeWidth="20"
      />
    </svg>
  );
}
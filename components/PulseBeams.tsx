"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ConnectionPoint {
  cx: number;
  cy: number;
  r: number;
}

interface Beam {
  path: string;
  duration: number;
  delay: number;
  x1: [string, string];
  y1: [string, string];
  x2: [string, string];
  y2: [string, string];
  points?: ConnectionPoint[];
}

const beams: Beam[] = [
  {
    path: "M 60 80 C 180 60, 340 160, 520 120",
    duration: 4,
    delay: 0,
    x1: ["60", "520"],
    y1: ["80", "120"],
    x2: ["200", "400"],
    y2: ["70", "130"],
    points: [
      { cx: 60, cy: 80, r: 4 },
      { cx: 520, cy: 120, r: 4 },
    ],
  },
  {
    path: "M 520 120 C 490 220, 460 310, 500 420",
    duration: 4.5,
    delay: 0.8,
    x1: ["520", "500"],
    y1: ["120", "420"],
    x2: ["490", "500"],
    y2: ["200", "400"],
    points: [{ cx: 500, cy: 420, r: 4 }],
  },
  {
    path: "M 60 80 C 100 180, 140 320, 180 440",
    duration: 5,
    delay: 1.4,
    x1: ["60", "180"],
    y1: ["80", "440"],
    x2: ["80", "160"],
    y2: ["180", "400"],
    points: [{ cx: 180, cy: 440, r: 4 }],
  },
  {
    path: "M 180 440 C 280 415, 390 425, 500 420",
    duration: 3.8,
    delay: 2,
    x1: ["180", "500"],
    y1: ["440", "420"],
    x2: ["300", "460"],
    y2: ["435", "422"],
  },
  {
    path: "M 300 30 C 340 130, 380 220, 330 320",
    duration: 4.2,
    delay: 0.5,
    x1: ["300", "330"],
    y1: ["30", "320"],
    x2: ["320", "340"],
    y2: ["100", "290"],
    points: [{ cx: 300, cy: 30, r: 3 }],
  },
  {
    path: "M 330 320 C 360 370, 420 395, 500 420",
    duration: 3.5,
    delay: 2.8,
    x1: ["330", "500"],
    y1: ["320", "420"],
    x2: ["380", "480"],
    y2: ["340", "415"],
  },
];

interface PulseBeamsProps {
  className?: string;
}

export function PulseBeams({ className }: PulseBeamsProps) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none", className)}>
      <svg
        width="600"
        height="500"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70"
      >
        {beams.map((beam, i) => (
          <path
            key={`base-${i}`}
            d={beam.path}
            stroke="rgba(15,52,96,0.15)"
            strokeWidth="1.5"
            fill="none"
          />
        ))}

        {beams.map((beam, i) => (
          <path
            key={`glow-${i}`}
            d={beam.path}
            stroke={`url(#beam-grad-${i})`}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        ))}

        {beams.map((beam, i) =>
          beam.points?.map((pt, j) => (
            <React.Fragment key={`pt-${i}-${j}`}>
              <circle cx={pt.cx} cy={pt.cy} r={pt.r + 3} fill="rgba(15,52,96,0.06)" />
              <circle cx={pt.cx} cy={pt.cy} r={pt.r} fill="rgba(15,52,96,0.2)" stroke="rgba(232,192,125,0.5)" strokeWidth="1" />
              <circle cx={pt.cx} cy={pt.cy} r={pt.r - 1.5} fill="#E8C07D" fillOpacity="0.6" />
            </React.Fragment>
          ))
        )}

        <defs>
          {beams.map((beam, i) => (
            <motion.linearGradient
              key={`grad-${i}`}
              id={`beam-grad-${i}`}
              gradientUnits="userSpaceOnUse"
              initial={{ x1: beam.x1[0], y1: beam.y1[0], x2: beam.x2[0], y2: beam.y2[0] }}
              animate={{ x1: beam.x1[1], y1: beam.y1[1], x2: beam.x2[1], y2: beam.y2[1] }}
              transition={{
                duration: beam.duration,
                delay: beam.delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 0.5,
              }}
            >
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
              <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#E8C07D" stopOpacity="1" />
              <stop offset="100%" stopColor="#0F3460" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}

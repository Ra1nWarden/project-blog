"use client";
import { MotionConfig } from "framer-motion";
import React from "react";

function FramerMotionPreferences({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default FramerMotionPreferences;

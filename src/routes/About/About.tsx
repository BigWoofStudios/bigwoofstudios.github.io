import { Component } from "solid-js";
import { Typography } from "#components";

export const About: Component = () => {
  return (
    <>
      <Typography as="h1">About</Typography>
      <Typography>
        Big Woof Studios is an indie game studio in its earliest days.
      </Typography>
    </>
  );
};

import { Component } from "solid-js";
import styles from "./Divider.module.css";

export type DividerProps = {
  vertical?: boolean;
};

export const Divider: Component<DividerProps> = (props) => {
  return (
    <div
      classList={{
        [styles.divider]: true,
        [styles.vertical]: props.vertical,
      }}
    />
  );
};

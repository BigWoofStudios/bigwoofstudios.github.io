import { ParentComponent } from "solid-js";
import styles from "./List.module.css";

export const List: ParentComponent = (props) => {
  return <ul class={styles.list}>{props.children}</ul>;
};

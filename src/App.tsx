import { ParentComponent } from "solid-js";
import { GlobalHeader } from "#components";
import styles from "./App.module.css";

export const App: ParentComponent = (props) => {
  return (
    <>
      <GlobalHeader />
      <main class={styles.main}>{props.children}</main>
    </>
  );
};

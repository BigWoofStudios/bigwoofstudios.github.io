import { ParentComponent } from "solid-js";
import styles from "./Link.module.css";

export const Link: ParentComponent<
  Partial<Omit<HTMLAnchorElement, "children">>
> = (props) => {
  return (
    <a
      class={styles.a}
      href={props.href}
      download={props.download}
      aria-label={props.ariaLabel || undefined}
      target={props.target}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </a>
  );
};

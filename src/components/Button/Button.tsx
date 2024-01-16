import { ParentComponent } from "solid-js";
import styles from "./Button.module.css";

export type ButtonProps = {
  onClick: () => void;
};

export const Button: ParentComponent<ButtonProps> = (props) => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button onClick={onClick} class={styles.button}>
      {props.children}
    </button>
  );
};

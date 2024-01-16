import {
  Match,
  ParentComponent,
  Switch,
  createSignal,
  mergeProps,
} from "solid-js";
import styles from "./Typography.module.css";

export type TypographyProps = {
  as?: "span" | "p" | "i" | "h1" | "h2" | "h3";
  "text-align"?: "left" | "center" | "justify";
};

const defaultProps: Required<TypographyProps> = {
  as: "p",
  "text-align": "left",
};

export const Typography: ParentComponent<TypographyProps> = (props) => {
  const merged = mergeProps(defaultProps, props);
  const [classList] = createSignal({
    [styles[merged.as]]: true,
    [styles[`text-align-${merged["text-align"]}`]]: true,
  });

  return (
    <Switch>
      <Match when={merged.as === "span"}>
        <span classList={classList()}>{merged.children}</span>
      </Match>

      <Match when={merged.as === "p"}>
        <p classList={classList()}>{merged.children}</p>
      </Match>

      <Match when={merged.as === "i"}>
        <i classList={classList()}>{merged.children}</i>
      </Match>

      <Match when={merged.as === "h1"}>
        <h1 classList={classList()}>{merged.children}</h1>
      </Match>

      <Match when={merged.as === "h2"}>
        <h2 classList={classList()}>{merged.children}</h2>
      </Match>

      <Match when={merged.as === "h3"}>
        <h3 classList={classList()}>{merged.children}</h3>
      </Match>
    </Switch>
  );
};

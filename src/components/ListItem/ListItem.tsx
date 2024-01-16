import { ParentComponent, Show } from "solid-js";
import styles from "./ListItem.module.css";
import { Divider, Link } from "..";

export type ListItemProps = Partial<Omit<HTMLAnchorElement, "children">> &
  Partial<HTMLLIElement> & {
    divider?: boolean;
  };

export const ListItem: ParentComponent<Omit<ListItemProps, "children">> = (
  props,
) => {
  return (
    <>
      <Show when={props.href}>
        <Link href={props.href}>
          <li
            classList={{
              [styles.listItem]: true,
              [styles.clickable]: Boolean(props.href),
            }}
          >
            {props.children}
          </li>
        </Link>
      </Show>

      <Show when={!props.href}>
        <li class={styles.listItem}>{props.children}</li>
      </Show>

      <Show when={props.divider}>
        <Divider />
      </Show>
    </>
  );
};

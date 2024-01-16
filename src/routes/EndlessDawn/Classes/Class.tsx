import { useParams } from "@solidjs/router";
import { For, ParentComponent, Show } from "solid-js";
import { Divider, Typography } from "#components";
import { classes } from "./data";

export const Class: ParentComponent = () => {
  const params = useParams();
  const gameClass = classes.find(
    ({ name }) => decodeURIComponent(params.class) === name.toLocaleLowerCase(),
  );

  return (
    <>
      <Show when={gameClass}>
        <Typography as="h1">{gameClass!.name}</Typography>
        <Divider />
        <Typography>{gameClass!.description}</Typography>
        <Typography as="h3">Origin</Typography>
        <For each={gameClass!.origin}>
          {(paragraph) => <Typography>{paragraph}</Typography>}
        </For>
      </Show>
    </>
  );
};

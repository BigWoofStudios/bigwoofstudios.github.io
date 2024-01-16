import { useParams } from "@solidjs/router";
import { ParentComponent, Show } from "solid-js";
import { Divider, Typography } from "#components";
import { races } from "./data";

export const Race: ParentComponent = () => {
  const params = useParams();
  const race = races.find(
    ({ name }) => decodeURIComponent(params.race) === name.toLocaleLowerCase(),
  );

  return (
    <>
      <Show when={race}>
        <Typography as="h1">{race!.name}</Typography>
        <Divider />
        <Typography>{race!.description}</Typography>
        <Typography as="h3">Culture</Typography>
        <Typography>{race!.culture}</Typography>
        <Typography as="h3">Role</Typography>
        <Typography>{race!.role}</Typography>
      </Show>
    </>
  );
};

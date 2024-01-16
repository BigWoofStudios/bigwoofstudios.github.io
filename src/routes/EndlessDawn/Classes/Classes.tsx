import { Component } from "solid-js";
import { Divider, List, ListItem, Typography } from "#components";

export const Classes: Component = () => {
  return (
    <>
      <Typography as="h1">Endless Dawn: Classes</Typography>
      <Divider />
      <List>
        <ListItem href="/endless-dawn/classes/wizard">Wizard</ListItem>
        <ListItem href="/endless-dawn/classes/warlock">Warlock</ListItem>
        <ListItem href="/endless-dawn/classes/cleric">Cleric</ListItem>
        <ListItem href="/endless-dawn/classes/paladin">Paladin</ListItem>
        <ListItem href="/endless-dawn/classes/warrior">Warrior</ListItem>
        <ListItem href="/endless-dawn/classes/ranger">Ranger</ListItem>
        <ListItem href="/endless-dawn/classes/monk">Monk</ListItem>
      </List>
    </>
  );
};

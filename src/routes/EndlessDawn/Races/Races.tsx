import { Divider, List, ListItem, Typography } from "#components";
import { Component } from "solid-js";

export const Races: Component = () => {
  return (
    <>
      <Typography as="h1">Endless Dawn: Races</Typography>
      <Divider />
      <List>
        <ListItem href="/endless-dawn/races/human">Human</ListItem>
        <ListItem href="/endless-dawn/races/elf">Elf</ListItem>
        <ListItem href="/endless-dawn/races/dwarf">Dwarf</ListItem>
        <ListItem href="/endless-dawn/races/tormŏg">Tormŏg</ListItem>
        <ListItem href="/endless-dawn/races/lümycus">Lümycus</ListItem>
        <ListItem href="/endless-dawn/races/dral'kath">Dral'kath</ListItem>
      </List>
    </>
  );
};

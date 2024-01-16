import { Component } from "solid-js";
import EndlessDawnLogo from "#assets/endless-dawn-logo.png";
import { Divider, Link, Typography } from "#components";
import styles from "./EndlessDawn.module.css";

export const EndlessDawn: Component = () => {
  return (
    <>
      <img
        src={EndlessDawnLogo}
        alt="Endless Dawn"
        aria-label="Endless Dawn logo"
        class={styles.logo}
      />
      <Typography as="i">
        In the mystical lands of Eldermyst, a saga of unity, creation, and the
        reawakening of an ancient evil unfolds across the ages.
      </Typography>
      <Divider />
      <Typography>
        Embark on an epic journey in Endless Dawn, where ancient magic meets
        untamed wilderness in the mystical realm of Eldermyst. Forge your path
        as a hero among legends, uniting races against a darkness that has
        awakened once more. Arm yourself with enchanted weapons and arcane
        knowledge, explore forgotten ruins, and challenge the might of foes both
        seen and unseen. Your saga begins now—will you rise as the beacon of
        hope in a land on the brink of eternal shadow? Join Endless Dawn and
        etch your tale into the annals of time.
      </Typography>
      <Link href="/endless-dawn/lore">Read the lore</Link>
      <Divider vertical />
      <Link href="/endless-dawn/races">Races</Link>
      <Divider vertical />
      <Link href="/endless-dawn/classes">Classes</Link>
    </>
  );
};

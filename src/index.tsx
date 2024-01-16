/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router } from "@solidjs/router";
import { App } from "./App";
import { EndlessDawn, Home, NotFound } from "./routes";
import { Lore, Races, Race } from "./routes/EndlessDawn";

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/endless-dawn" component={EndlessDawn} />
      <Route path="/endless-dawn/lore" component={Lore} />
      <Route path="/endless-dawn/races" component={Races} />
      <Route path="/endless-dawn/races/:race" component={Race} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")!,
);

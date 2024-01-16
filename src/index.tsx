/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Route, Router } from "@solidjs/router";
import { App } from "./App";
import { About, EndlessDawn, Home, NotFound } from "./routes";
import { Lore, Races, Race, Classes, Class } from "./routes/EndlessDawn";

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/endless-dawn" component={EndlessDawn} />
      <Route path="/endless-dawn/lore" component={Lore} />
      <Route path="/endless-dawn/races" component={Races} />
      <Route path="/endless-dawn/races/:race" component={Race} />
      <Route path="/endless-dawn/classes" component={Classes} />
      <Route path="/endless-dawn/classes/:class" component={Class} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")!,
);

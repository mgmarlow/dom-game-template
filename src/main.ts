import {
  init,
  styleModule,
  propsModule,
  eventListenersModule,
  attributesModule,
  VNode,
} from "snabbdom";
import store from "./game";
import { view } from "./view";

let vnode: VNode;

const patch = init([
  propsModule,
  eventListenersModule,
  styleModule,
  attributesModule,
]);

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector<HTMLDivElement>("#app")!;

  store.subscribe(() => {
    vnode = patch(vnode, view(store.getState(), store.dispatch));
  });

  // Initial render.
  vnode = patch(container, view(store.getState(), store.dispatch));
});

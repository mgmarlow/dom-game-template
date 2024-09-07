import { h } from "snabbdom";
import {
  type GameState,
  type GameDispatch,
  increment,
  decrement,
} from "./game";

export const view = (game: GameState, dispatch: GameDispatch) => {
  return h("div", [
    h("p", `count: ${game.count}`),
    h("button", { on: { click: () => dispatch(increment()) } }, "+"),
    h("button", { on: { click: () => dispatch(decrement()) } }, "-"),
  ]);
};

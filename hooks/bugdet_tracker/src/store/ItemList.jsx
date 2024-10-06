import { createContext } from "react";

export const ItemList = createContext({
  item: [],
  addBugdet: () => {},
  deleteBugdet: () => {},
  resetBugdet: () => {},
});

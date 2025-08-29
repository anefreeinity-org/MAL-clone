import { Completed } from "./completed";
import { Dropped } from "./dropped";
import { OnHold } from "./on-hold";
import { PlanToWatch } from "./plan-to-watch";
import { Watching } from "./watching";

export const profileTabs = [
  {
    title_sidebar: "Watching",
    episodes: 0,
    path: "watching",
    element: (
      <>
      <Watching />
      </>
    )
  },
  {
    title_sidebar: "Completed",
    episodes: 0,
    path: "completed",
    element: (
      <>
      <Completed />
      </>
    )
  },
  {
    title_sidebar: "On Hold",
    episodes: 0,
    path: "on-hold",
    element: (
      <>
      <OnHold />
      </>
    )
  },
  {
    title_sidebar: "Dropped",
    episodes: 0,
    path: "dropped",
    element: (
      <>
      <Dropped />
      </>
    )
  },
  {
    title_sidebar: "Plan to Watch",
    episodes: 0,
    path: "plan-to-watch",
    element: (
      <>
      <PlanToWatch />
      </>
    )
  },
];
import { blockBreadCrumbs, blockTitle } from "./jira";

window.setInterval(() => {
  blockBreadCrumbs();
  blockTitle();
}, 1000);

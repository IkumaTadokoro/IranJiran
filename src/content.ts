import { switchBreadCrumbs, switchPageTitle } from "./jira";

let isShowBreadCrumbs: boolean;
let isShowPageTitle: boolean;

window.setInterval(() => {
  chrome.storage.sync.get(
    ["isShowBreadCrumbs", "isShowPageTitle"],
    (result) => {
      isShowBreadCrumbs =
        result["isShowBreadCrumbs"] === "false" ? false : true;
      isShowPageTitle = result["isShowPageTitle"] === "false" ? false : true;
    }
  );
  switchBreadCrumbs(isShowBreadCrumbs);
  switchPageTitle(isShowPageTitle);
}, 500);

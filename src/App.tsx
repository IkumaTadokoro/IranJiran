import React, { useEffect } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Header } from "./Header";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [isShowBreadCrumbs, setIsShowBreadCrumbs] = useLocalStorage<boolean>(
    "isShowBreadCrumbs",
    false
  );

  const [isShowPageTitle, setIsShowPageTitle] = useLocalStorage<boolean>(
    "isShowPageTitle",
    false
  );

  useEffect(() => {
    const fetch = async () => {
      const isShowBreadCrumbs =
        (await chrome.storage.sync.get("isShowBreadCrumbs"))[
          "isShowBreadCrumbs"
        ] === "false"
          ? false
          : true;
      const isShowPageTitle =
        (await chrome.storage.sync.get("isShowPageTitle"))[
          "isShowPageTitle"
        ] === "false"
          ? false
          : true;
      setIsShowBreadCrumbs(isShowBreadCrumbs);
      setIsShowPageTitle(isShowPageTitle);
    };
    fetch();
  }, []);

  return (
    <div className="w-[350px] bg-white text-gray-600 px-8 py-4">
      <Header />
      {isShowBreadCrumbs}
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isShowBreadCrumbs}
              onChange={(e) => {
                setIsShowBreadCrumbs(e.target.checked);
              }}
              size="small"
            />
          }
          label={<span className="text-sm">パンくずリスト</span>}
          labelPlacement="start"
          sx={{ m: 0, justifyContent: "start" }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={isShowPageTitle}
              onChange={(e) => {
                setIsShowPageTitle(e.target.checked);
              }}
              size="small"
            />
          }
          label={<span className="text-sm">ページタイトル</span>}
          labelPlacement="start"
          sx={{ m: 0, justifyContent: "start" }}
        />
      </FormGroup>
    </div>
  );
}

export default App;

export const switchBreadCrumbs = (isShowBreadCrumbs: boolean) => {
  const breadCrumbs = document
    .querySelector('nav[aria-label="Breadcrumbs"]')!
    .closest("div");

  if (isShowBreadCrumbs) {
    breadCrumbs!.removeAttribute("style");
  } else {
    breadCrumbs!.style.display = "none";
  }
};

export const switchPageTitle = (isShowPageTitle: boolean) => {
  const h1 = document.querySelector("h1");
  if (h1) {
    const boardHeader = h1.closest(
      "div[data-test-id='software-board.board'] > div > div > div > div"
    ) as HTMLDivElement;
    const backlogHeader = h1.closest(
      "div[data-test-id='software-backlog.backlog'] > div > div > div"
    ) as HTMLDivElement;

    const header = boardHeader || backlogHeader;
    if (!header) {
      return;
    }

    if (isShowPageTitle) {
      header.removeAttribute("style");
    } else {
      header.style.display = "none";
    }
  } else {
    return;
  }
};

export const blockBreadCrumbs = () => {
  document
    .querySelector('nav[aria-label="Breadcrumbs"]')!
    .closest("div")!.style.display = "none";
};

export const blockTitle = () => {
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

    header.style.display = "none";
  } else {
    return;
  }
};

chrome.action.onClicked.addListener(() => {
  chrome.windows.create(
    {
      url: chrome.runtime.getURL("index.html"),
      type: "panel",
      width: 700,
    },
    (window) => {
      window.alwaysOnTop = true;
    }
  );
});

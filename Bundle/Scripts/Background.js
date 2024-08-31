// Source/Background/mod.ts
console.debug("Test");
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true
  });
});

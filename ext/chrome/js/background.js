chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'nagini',
    title: 'Open with Nagini',
    type: 'normal',
    contexts: ['selection']
  });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: copyTextToClipboard,
    args: [info.selectionText]
  });
  chrome.tabs.create({
    url: 'https://ltpquang.github.io/nagini?c=1'
  });
});

function copyTextToClipboard(text) {
  let copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.focus();
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.remove();
}

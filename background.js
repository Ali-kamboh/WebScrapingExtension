// TODO: Implement the background tasks and communication with popup.js
// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === "scrapeData") {
      // TODO: Implement the logic to handle scraping and data extraction
    }
  });
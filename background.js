var oldRedditUrlRewriterListener = function(details) {
    if (/^https?:\/\/www.reddit.com\/(r|u)\//.test(details.url)) {
        return {
            redirectUrl: details.url.replace('www.reddit.com', 'old.reddit.com')
        };
    }
};

browser.webRequest.onBeforeRequest.addListener(
    oldRedditUrlRewriterListener, {urls: ['https://www.reddit.com/*']}, ['blocking']);
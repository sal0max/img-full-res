// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    return document
        .querySelector("meta[property='og:image']")
        .getAttribute("content")
        .replace(/width=\d+/g, "width=1920");
}

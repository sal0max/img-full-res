// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    const url = document
        .querySelector("meta[name=\"twitter:image\"]")
        .getAttribute("content")
    // replace "/wide" with "/original", to get the original aspect ratio
    return url.substring(0, url.indexOf("/wide")) + "/original"
}

// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    const url = document
        .querySelector(".article .image-placeholder__image")
        .getAttribute("src")
    // trim after ".jpeg"
    return url.substring(0, url.indexOf("?"))
}

// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    return document
        .querySelector(".photo-show__img")
        .getAttribute("src")
}

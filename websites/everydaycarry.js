// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    return JSON.parse(
        document
            .querySelectorAll('script[type="application/ld+json"]')[1]
            .textContent
    ).image.url
}

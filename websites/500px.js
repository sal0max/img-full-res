// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    return document
        .querySelector("#copyrightTooltipContainer>*>img")
        .getAttribute("src")
}

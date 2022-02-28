// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    return document
        .querySelector(".ts-image")
        .getAttribute("src")
        // get large size:
        // old e.g.: https://www.tagesschau.de/multimedia/bilder/queen-315~_v-videowebm.jpg
        // new e.g.: https://www.tagesschau.de/multimedia/bilder/queen-315.jpg
        .replace(RegExp("~.*(?=\\.\\w+)"), "")
        // if relative url is used: add domain
        .replace(RegExp("^\\/"), "https://www.tagesschau.de/")
}

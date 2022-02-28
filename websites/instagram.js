// noinspection JSUnresolvedVariable,JSUnresolvedFunction

// TODO: on large galleries, max 3 items (before, current, next) are available
// possible solution: API call?
document
    .querySelectorAll("article div>img,video")
    .forEach(function (img) {
        browser.runtime.sendMessage({"image": img.src})
    })

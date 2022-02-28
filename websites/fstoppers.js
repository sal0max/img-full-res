// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    // check if image is opened in a fancybox
    let image = document
        .querySelector(".fancybox-slide--current .fancybox-image")
    if (image !== null) {
        // it is!
        image = image.getAttribute("src")
    } else {
        // it isn't: standalone photo
        image = document
            .querySelector("div.photo")
            .getAttribute("data-xlarge");
    }

    return image
}

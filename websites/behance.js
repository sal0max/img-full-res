// noinspection JSUnresolvedVariable,JSUnresolvedFunction

function fullRes(url) {
    return url.replace(RegExp("(/disp/)|(/hd/)|(/max_1200/)|(/1400/)"), "/source/")
}

document
    .querySelectorAll(".js-project-lightbox-link img")
    .forEach(function (img) {
        browser.runtime.sendMessage(
            {"image": fullRes(img.src)}
        )
    })

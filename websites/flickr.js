// noinspection JSUnresolvedVariable,JSUnresolvedFunction

browser.runtime.sendMessage({
    "image": getUrl()
})

function getUrl() {
    const parser = new DOMParser
    const xhr = new XMLHttpRequest;

    // open page with overview of all available sizes
    xhr.open("GET", document.URL.replace(/(.*\/\d+)(.*)/g, "$1") + "/sizes/s/", !1)
    xhr.send()

    // get link to the page with the largest size
    let doc = parser.parseFromString(xhr.responseText, "text/html")
    let largestLink = doc
        .querySelectorAll(".sizes-list>li a")
    largestLink = largestLink[largestLink.length - 1]

    // open the website with the largest image
    xhr.open("GET", largestLink, !1)
    xhr.send()

    // get large image
    doc = parser.parseFromString(xhr.responseText, "text/html")
    return doc.querySelector("#allsizes-photo>img").getAttribute("src");
}

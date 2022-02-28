// noinspection JSUnresolvedVariable,JSDeprecatedSymbols,JSUnresolvedFunction,JSCheckFunctionSignatures

/*
 All supported websites
 */
const sites = [
    {regexp: ".*1x.com/photo/.+",               script: "1x.js"},
    {regexp: ".*500px.com/photo/.+",            script: "500px.js"},
    {regexp: ".*behance.net/gallery/\\d+/.+",   script: "behance.js"},
    {regexp: ".*everydaycarry.com/posts/.+",    script: "everydaycarry.js"},
    {regexp: ".*flickr.com/photos/.+",          script: "flickr.js"},
    {regexp: ".*fotocommunity.de/photo/.+",     script: "fotocommunity.js"},
    {regexp: ".*fstoppers.com/(photo|potd)/.+", script: "fstoppers.js"},
    {regexp: ".*instagram.com/p/.+",            script: "instagram.js"},
    {regexp: ".*nzz.ch/\\w+/.*\\.\\d+",         script: "nzz.js"},
    {regexp: ".*tagesschau.de(/.+)+\\.html",    script: "tagesschau.js"},
    {regexp: ".*zeit.de/.+(/.+)+",              script: "zeit.js"}
]

/*
 When first loaded, initialize the page action for all tabs
*/
const gettingAllTabs = browser.tabs.query({})
gettingAllTabs.then((tabs) => {
    for (const tab of tabs) {
        updateShowAction(tab)
    }
})

/*
 Each time a tab is updated, reset the page action for that tab
*/
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
    updateShowAction(tab)
})

/*
 Initialize the page action: show or hide page action, when needed
*/
function updateShowAction(tab) {
    if (findMatch(tab) !== undefined) {
        browser.pageAction.show(tab.id)
    } else {
        browser.pageAction.hide(tab.id)
    }
}

/*
 The page action is clicked: open the image(s)
*/
browser.pageAction.onClicked.addListener((tab) => {
    // find all images on the given page
    const match = findMatch(tab)
    browser.tabs.executeScript(tab.id, {
        file: "websites/" + match.script,
    })
})

/*
 Listen for messages to open a new tab
 */
browser.runtime.onMessage.addListener(function (message) {
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) =>
        browser.tabs.create(
            {
                "active": false,
                "index": tabs[0].index + 1,
                "url": message.image,
            })
    )
})


/*
 See if the website in the given tab is supported
 Returns the match if it is supported, else undefined
 */
function findMatch(tab) {
    return sites.find(site => tab.url.match(site.regexp))
}

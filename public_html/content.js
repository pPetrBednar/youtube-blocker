// Insert lowercase only
var blacklist = [
    "react",
    "reaction",
    "watching",
    "watches"
];

function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
        var substring = substrings[i];
        if (str.indexOf(substring) != -1) {
            return substring;
        }
    }
    return null;
}

function isBlacklisted(text) {
    if (containsAny(text, blacklist) == null) {
        return false;
    } else {
        return true;
    }
}

console.log("Bait Blocker");

function search() {
    var elements = document.querySelectorAll("#video-title");
    elements.forEach(el => {
        if (isBlacklisted(el.innerHTML.toLowerCase())) {
            // Console warnings
            console.warn("Removed:\n" + el.innerHTML);
            el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        }
    });

}

document.addEventListener('DOMContentLoaded', onload(), false);

function onload() {
    search();
    document.addEventListener('scroll', function (e) {
        search();
    });
}



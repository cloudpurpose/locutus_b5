/* globals feather:false */

function resizeFooterSpacer(footerSpacerSize) {
    document.getElementById("footer-spacer").style.height = footerSpacerSize;
}

function resizeAndPositionFooter() {
    var windowHeight = window.innerHeight;
    var mainContentHeight = document.getElementById("main-area").offsetHeight;
    var footerSpacerSize = windowHeight - mainContentHeight - 180;
    if (footerSpacerSize > 180) {
        resizeFooterSpacer(footerSpacerSize + 'px');
    }
}

window.addEventListener("resize", function(){
    resizeAndPositionFooter();
});

(function () {
    resizeAndPositionFooter();
})()
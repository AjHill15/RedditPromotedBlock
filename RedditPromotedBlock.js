// ==UserScript==
// @name     reddit ad block
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js 
// ==/UserScript==

$(document).ready(function () {
    if(window.location.href.indexOf("reddit") > -1) {
       $(".promoted").hide()
    }
});

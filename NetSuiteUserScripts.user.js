// ==UserScript==
// @name PCC Netsuite UserScript
// @version 1.0
// @description Float item sublist header on scroll
// @updateURL    https://github.com/nschumer-pcc/Netsuite-User-Scripts/blob/master/NetSuiteUserScripts.user.js
// @downloadURL  https://github.com/nschumer-pcc/Netsuite-User-Scripts/blob/master/NetSuiteUserScripts.user.js
// @match https://*.netsuite.com/*
// grant none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
(function($, undefined) {
    $(document).ready(checkItemTable);

    //Checks if item table has loaded yet. If it has it floats the header if needed. If it hasn't, it waits and tries again.
    function checkItemTable() {
        if ($('.uir-machine-table-container').outerHeight() > 100) {
            const windowHeight = $(window).height();
            $('.uir-machine-table-container')
                .filter((index, elem) => $(elem).height() > windowHeight)
                .css('height', '70vh')
                .on('scroll', (event) => {
                    const headerElem = $(event.target).find('.uir-machine-headerrow');
                    headerElem.css('transform', `translate(0, ${event.target.scrollTop}px)`);
                })
        } else {
            setTimeout(checkItemTable, 50);
        }
    }
})(window.jQuery.noConflict(true));



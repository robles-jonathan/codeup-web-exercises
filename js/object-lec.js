"use strict";
(function() {
    var company = {
        name: "Regulus",
        workers: 500,
        clients: 20000,
        closing: function () {
            return "closing at 4 pm."
        }
    }
    console.log(company);
    console.log(company.clients);
    console.log(company.workers);
    console.log(company.closing());
})();

/**
 * I own a company named Regulus. I employ 500 workers. I have 20000 clients.
 *
 */
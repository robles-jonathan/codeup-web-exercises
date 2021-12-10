"use strict";

$(document).ready(() => {

    const getLastCommit = (user) => {
        let eventsURL = `https://api.github.com/users/${user}/events`;
        fetch(eventsURL, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                for (let event of data) {
                    if (event.type === "PushEvent") {
                        console.log(new Date(event.created_at));
                        break;
                    }
                }
            });
    }

    // fetch('https://api.github.com/users')
    //     .then(resp => resp.json()).then(data => console.log(data))
    //     .catch(error => console.error(error));
    //
    //
    // let repo = 'codeup-web-exercises'
    // let url = `https://api.github.com/repos/${user}/${repo}/commits`;
    // fetch(url, {headers: {'Authorization': 'GITHUB_KEY'}}).then(resp => resp.json()).then(data => console.log(data));
    // fetch(url, {headers: {'Authorization': 'GITHUB_KEY'}}).then(resp => resp.json()).then(data => console.log(data[0].commit.author.date));

    getLastCommit('robles-jonathan');

    const wait = (milli) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, milli);
        });
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//     function makeRequest(milli) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (Math.random() > 0.1) {
//                     resolve('Here is your data: ...');
//                 } else {
//                     reject('Network Connection Error!');
//                 }
//             }, milli);
//         });
//     }
//
//     const request = makeRequest(5000);
//     console.log(request); // pending promise
//     request.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
//     request.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"
})();



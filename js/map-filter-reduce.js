'use strict';
$(document).ready(()=> {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
    /** Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
      Use .map to create an array of strings where each element is a user's email address
      Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
      Use .reduce to get the longest email from the list of users.
      Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
     Bonus
      Use .reduce to get the unique list of languages from the list of users.
     **/

    let threeOrMoreLanguages = users.filter(user => user.languages.length >= 3);
    console.log(threeOrMoreLanguages)

    let arrayOfEmails = users.map(user => user.email);
    console.log(arrayOfEmails);

    let totalYears = users.reduce((total, user) => {return total + user.yearsOfExperience},0)
    console.log(totalYears)

    let averageYears = totalYears/users.length;
    console.log(averageYears);


    //IF STATTEMENT
    // let longestEmail = users.reduce((longestEmail, currentEmail) => {
    //     if(longestEmail.email.length > currentEmail.email.length){
    //         return longestEmail;
    //     }else{
    //         return currentEmail;
    //     }
    // })
    // console.log(longestEmail)


    //TERNARY OPERATOR
    let longestEmail = users.reduce((longestEmail, currentEmail) => longestEmail.email.length > currentEmail.email.length ? longestEmail : currentEmail);
    console.log(longestEmail);

//did not use reduce
    let userNameArray= users.map(users => users.name)
    console.log(userNameArray)
    let string = userNameArray.join(', ');
    console.log(`Your instructors are: ${string}.`)

    //Does not give expected output
    let instructorss = users.reduce((prev, current) =>`${prev} ${current.name} `, "Your instructors are: ");
    console.log(instructorss)

    let instructors = users.reduce((finalString, user, index) => {
        if(index === users.length -1){
            return `${finalString} ${user.name}.`
        }else {
            return `${finalString} ${user.name},`
        }
    }, "Your instructors are:")
    console.log(instructors)

    //BONUS
    let completeLanguage = users.reduce((a,e) => a.concat(e.languages),[])
    let uniqueLang = completeLanguage.reduce((uniqueLang, currentValue) =>{
        if(uniqueLang.indexOf(currentValue) === -1){
            uniqueLang.push(currentValue)
        }
        return uniqueLang;
    },([]))
    console.log(uniqueLang);

    //JAYS SOLUTION
    let uniqueLangs = users.reduce((langList, user) => {
        for(let lang of user.languages){
            if(!langList.includes(lang)){
                langList.push(lang);
            }
        }
        return langList
    },[])
    console.log(uniqueLangs);

})
function greetUser(userName = "guest user") {
    console.log("Hello", userName);
}

greetUser("Michael");
greetUser()


function welcomeUser(userName = "guestUser", visitPurpose = "tourism") {
    console.log("Welcome " + userName + " for your " + visitPurpose);
}

welcomeUser("James");
welcomeUser("James", "sightseeing");
welcomeUser();


// Celcuis to farenheit converter function

// celcuis x 9/5, then add 32 to the result;


// input -> celcuis; (operation) output -> farenheit
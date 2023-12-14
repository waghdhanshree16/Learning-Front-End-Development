const ticket = new Promise(function (resolve, reject) {
    const isBoraded = false
    if (isBoraded) {
        resolve("You are not in the Filght");
    } else {
        reject("Your flight has been cancelled");
    }
});

ticket
.then((data) => {
        console.log("wohoo", data);})
      .catch((data) => {
        console.log("oh no", data);
      })
      .finally(() => {
        console.log("I will always be executed");

      });
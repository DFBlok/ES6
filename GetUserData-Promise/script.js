function getUserData(userID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: userID,
                name: "Duwayne Blok",
                email: "John@Doe.com"
            };
            const success = true;

            if(success){
                resolve(userData);
            }else{
                reject("Error: Unable to fecth user data");
            }

        }, 2000);
    });
}

getUserData(123)
    .then((userData) => {
        console.log("User data: ", userData);
    })
    .catch((error) => {
        console.log(error);
    });
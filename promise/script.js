function walkDog(){


    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog ");
            }
            else{
                reject("YOU DIDNT WALK THE DOG")
            }
            
            /* callback(); */
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
            setTimeout(() =>{
                const kitchen = true;
                if(kitchen){
                    resolve("You cleaned the Kitchen ");        
                }
                else{
                    reject("YOU DIDNT CLEAN THE KITCHEN")
                }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            const trash = false;
            if(trash){
                resolve("You take out trash ");    
            }
            else{
                reject("DIDNT TAKE OUT TRASH")
            }
            /* callback(); */
        }, 500);
    });

}

/* walkDog(() => {
    cleanKitchen(()=> {
        takeOutTrash(()=> console.log("You finished all the chores!!"));
    });
}); */
walkDog().then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value); console.log("You finished with all chores")});
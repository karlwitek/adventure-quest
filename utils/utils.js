export function findById(id, someArray) {
    // loop the array
    for (let i = 0; i < someArray.length; i++) {
        const someItem = someArray[i];
        // check the id with cartItem id
        if (someItem.id === id) {
            return someItem;
        }
       
    }
    return null;
}

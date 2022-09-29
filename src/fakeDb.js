const addToDb = _id =>{

    let shoppingCart = {};

    // get the the privious storage 
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }
    
    const quantity = shoppingCart[_id];
    if (quantity) {
        const newQuantity = (quantity) + 1;
        shoppingCart[_id] = newQuantity;
        // localStorage.setItem(_id, newQuantity);
    }
    else{
        // localStorage.setItem(_id , 1);
        shoppingCart[_id] = 1
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

const getStoredCart = ()=>{
    let shoppingCart = {};

    // get the the privious storage 
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart
}

export {
    addToDb,getStoredCart
    }
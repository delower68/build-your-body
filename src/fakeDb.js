const addToDb = e =>{
    let timeStore = {};

    // get the previous stored data 
    const storedCart = localStorage.getItem('timeLocalStore');
    if (storedCart) {
        timeStore = JSON.parse(storedCart)
    }
    else{
        timeStore = {}
    }

    const quantity = timeStore[e.target.innerText]
    if (quantity) {
        const newQuantity = (quantity) + 1 ;
        timeStore[e.target.innerText] = newQuantity ;
        // localStorage.setItem(e.target.innerText, newQuantity)
    }
    else{
        // localStorage.setItem(e.target.innerText , 1)
        timeStore[e.target.innerText] =1 ;
    }
    localStorage.setItem('timeLocalStore' , JSON.stringify(timeStore))

}


export {
    addToDb
    }
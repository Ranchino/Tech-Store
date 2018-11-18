$(document).ready(function() {
    printHistoryX()
});

/* Get all products in one order and create one whole container */
function createOrders(order) {
    var orderContainer = document.createElement("div")
    orderContainer.id = "orderContainer"
    for (var i = 0; i < order.products.length; i++) {
        orderContainer.appendChild(createProductCard(order.products[i]))
    }
   
    return orderContainer
}

/* Print out cards */
function createProductCard(userProduct) {
    var phone = document.createElement("div")
    phone.className = "historyCardClass"
    
    var getPhoneImage = document.createElement("img")
    getPhoneImage.src = "./assets/" + userProduct.product.image
    phone.appendChild(getPhoneImage)
    
    var getPhoneName = document.createElement("h1")
    getPhoneName.innerText = userProduct.product.title
    phone.appendChild(getPhoneName)
    
    var getPhonePrice = document.createElement("h3")
    getPhonePrice.innerText = userProduct.product.price + " kr"
    phone.appendChild(getPhonePrice)
    
    return phone
}

/* Check which user is logged in */
function printHistoryX() {
    var historyParentWrapper = document.createElement("div")
    historyParentWrapper.className = "historyParentWrapper"

    var historyArray = JSON.parse(localStorage.getItem("orders"));
    var userOnSite = JSON.parse(localStorage.getItem("loggedinUser"))
    for (var i = 0; i < historyArray.length; i++) {
        if (userOnSite.username == historyArray[i].customer) {
            var orderContainer = createOrders(historyArray[i])
            historyParentWrapper.appendChild(orderContainer)
        }
    }
    document.getElementById("user-page-wrap").appendChild(historyParentWrapper)
}


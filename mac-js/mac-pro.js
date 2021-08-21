//   memory cost  function

function getChangeFeature(newFeature, featureNewPrice) {
    const changeFeature = document.getElementById(newFeature + '-cost');
    changeFeature.innerText = featureNewPrice ;
    calculateTotal(featureNewPrice);
    getInputValue(newFeature)
}

function getInputValue(featureName){
    const changeFeatureName = document.getElementById(featureName + '-cost');
    const featureCost = parseInt(changeFeatureName.innerText);
    return featureCost;
}

function calculateTotal(featureNewPrice){
    const bestPrice = document.getElementById('best-price');
    const updateBestPrice = parseInt(bestPrice.innerText);
    const memoryCost = getInputValue('memory') + parseInt(featureNewPrice) ;
    console.log(memoryCost);
    // const storageCost = getInputValue('storage') + parseInt(featureNewPrice) ;
    // const deliveryCost = getInputValue('delivery') + parseInt(featureNewPrice) ;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updateBestPrice + memoryCost ;
   

}


//   memory cost button
document.getElementById('memory-8gb').addEventListener('click', function () {
    getChangeFeature('memory', '0');
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    getChangeFeature('memory', '180');
});


// storage cost button 
document.getElementById('storage-button-256gb').addEventListener('click', function () {
    getChangeFeature('storage-cost', '0');

});

document.getElementById('storage-button-512gb').addEventListener('click', function () {
    getChangeFeature('storage-cost', '100');

});

document.getElementById('storage-button-1tb').addEventListener('click', function () {
    getChangeFeature('storage-cost', '180');
});

// delivery part button 
document.getElementById('delivery-free').addEventListener('click', function () {
    getChangeFeature('delivery-cost', '0');

});
document.getElementById('delivery-charge').addEventListener('click', function () {
    getChangeFeature('delivery-cost', '20');


});

/* function getMemoryCost(memoryNewPrice) {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = memoryNewPrice;
    const updateMemory = parseFloat(memoryCost.innerText);
    // console.log(updateMemory);
    return updateMemory;
}

// storage cost fuction

function getStorageCost(storageNewPrice) {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = storageNewPrice;
    const updateStorage = parseFloat(storageCost.innerText);
    return updateStorage;
}

// delivery part function
function getdeliveryCost(deliveryNewCost) {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = deliveryNewCost;
    const updateDeliveryCost = parseFloat(deliveryCost.innerText);
    return updateDeliveryCost;

}

// Total Price function
function getTotalPrice(newP) {
    const bestPrice = document.getElementById('best-price').innerText;
    const newPrice = parseFloat(bestPrice) + newP;
    return newPrice;




} */


//   memory cost 

function getMemoryCost(memoryNewPrice) {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = memoryNewPrice;
}

document.getElementById('memory-8gb').addEventListener('click', function () {
    getMemoryCost('0');
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    getMemoryCost('180');
});

// storage cost 

function getStorageCost(storageNewPrice) {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = storageNewPrice;
}

document.getElementById('storage-button-256gb').addEventListener('click', function () {
    getStorageCost('0');
});

document.getElementById('storage-button-512gb').addEventListener('click', function () {
    getStorageCost('100');
});

document.getElementById('storage-button-1tb').addEventListener('click', function () {
  getStorageCost('180');
});

// delivery part 
function getdeliveryCost(deliveryNewCost){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = deliveryNewCost;
}

document.getElementById('delivery-free').addEventListener('click', function () {
    getdeliveryCost('0');
});
document.getElementById('delivery-charge').addEventListener('click', function () {
    getdeliveryCost('20');

});
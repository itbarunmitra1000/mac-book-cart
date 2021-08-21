//   memory cost  function

function getChangeFeature(featureName, featureNewPrice) {
    const changeFeature = document.getElementById(featureName + '-cost');
    changeFeature.innerText = featureNewPrice ;
    calculateTotal(featureNewPrice);
    getInputValue(featureName)
}

function getInputValue(featureName){
    const changeFeatureName = document.getElementById(featureName + '-cost');
    const featureCost = parseInt(changeFeatureName.innerText);
    return featureCost;
}

function calculateTotal(){
    const bestPrice = document.getElementById('best-price');
    const updateBestPrice = parseInt(bestPrice.innerText);
    const memoryCost = getInputValue('memory') ;
    const storageCost = getInputValue('storage') ;
    const deliveryCost = getInputValue('delivery') ;
    const totalPrice = document.getElementById('total-price');
    const updateTotalPrice = updateBestPrice + memoryCost + storageCost + deliveryCost;  
    totalPrice.innerText = updateTotalPrice ;

    const footerTotalPrice = document.getElementById('footer-total-price');
    footerTotalPrice.innerText = updateTotalPrice;
    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeValue = pomoCode.value ;
    const pomoApply = document.getElementById('pomo-apply');
    pomoApply.addEventListener('click',function(){
        if(pomoCodeValue == 'stevekaku'){
            const pomoApplyPrice = updateTotalPrice /20 ;
            console.log(pomoApplyPrice);
            // footerTotalPrice.innerText = pomoApplyPrice;
        }
    });

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
    getChangeFeature('storage', '0');

});

document.getElementById('storage-button-512gb').addEventListener('click', function () {
    getChangeFeature('storage', '100');

});

document.getElementById('storage-button-1tb').addEventListener('click', function () {
    getChangeFeature('storage', '180');
});

// delivery part button 
document.getElementById('delivery-free').addEventListener('click', function () {
    getChangeFeature('delivery', '0');

});
document.getElementById('delivery-charge').addEventListener('click', function () {
    getChangeFeature('delivery', '20');
});

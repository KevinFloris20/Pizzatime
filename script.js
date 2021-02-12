
var pizzapi = require('dominos');

pizzapi.Util.findNearbyStores(
    '07054',
    'Delivery',
    function(storeData){
        console.log(storeData.result.Stores);
    }
);

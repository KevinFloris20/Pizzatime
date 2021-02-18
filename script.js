// // //./dominos/dominos-pizza-api.js
// requirejs.config({
//     //By default load any module IDs from js/lib
//     baseUrl: './dominos/dominos-pizza-api.js',
    
// });

//  var myStore = new pizzapi.Store({ ID: 4336 });

// var pizzapi = require('dominos');
// var idd;
// pizzapi.Util.findNearbyStores(
//     '07054',
//     'Delivery',
//     function(storeData){
//         console.log(storeData.result.Stores[0].StoreID);
//         idd = storeData.result.Stores[0].StoreID;
//     }
// );
var idd;

function getid(){
    var pizzapi = require('dominos');
    pizzapi.Util.findNearbyStores(
        '07054',
        'Delivery',
        function(storeData){
            console.log(storeData.result.Stores[0].StoreID);
            idd = storeData.result.Stores[0].StoreID;
            menu();
        }
    );
}

function menu(){
  var pizzapi = require('dominos');
  var myStore = new pizzapi.Store({ ID: idd });

  myStore.getMenu(
      function(storeData){
          console.log(storeData);
      }
  );
}

getid();



//promises
//async await functions
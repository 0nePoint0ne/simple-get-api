var express = require("express");
var dateFormat = require('dateformat');
var url = require('url');

var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


var items = {
    'product_ids': {0: 'apple', 1: 'mango', 2: 'sugar'},
    'items':
        {
            0: { 'product_name': 'apple', 'stock': 10 },
            1 : { 'product_name': 'mango', 'stock': 7 },
            2: { 'product_name': 'sugar', 'stock': 5 }
        }

}

app.get("/items", (req, res, next) => {
    res.json(items['product_ids']);
   });

app.get("/item-data?", (req, res, next) => {

    req.query.product_id
    res.json(items['items'][req.query.product_id]);
   });
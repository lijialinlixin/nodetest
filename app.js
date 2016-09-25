/**
 * Created by lijialin on 16/9/25.
 */
var  express = require('express');

var port = process.env.PORT || 3000;

var app = express();


app.set('view','/views');
app.set('view engine','jade');

app.listen(port,function(){
    console.log("运行成功");
});
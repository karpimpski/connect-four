const express = require('express');
const app = express();

app.use(express.static('./client/public'));

app.get('*', function(req, res){
	res.sendFile(__dirname + '/client/public/index.html');
});

app.listen(process.env.PORT || 3000);
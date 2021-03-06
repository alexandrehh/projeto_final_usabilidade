const express = require("express");
const app = express();

let port = (process.env.PORT || 3000);

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**URL projeto */

app.listen(port, () => {
    console.log('Servidor rodando em -> http://localhost:' + port);
});

/**EndPoint inicial */ 

app.get("/", (req,res) =>{   
    res.sendFile(__dirname + "/html/teladelogin.html");       
});
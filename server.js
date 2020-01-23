let express = require("express");
let server = express();
let port =  8080;

server.use(express.urlencoded({ extended: true}));
server.use(express.json());

require("./route/apiroutes")(server);
require("./route/htmlroutes")(server);

server.listen(port, () =>{
    console.log(`listen on port: ${port}`);
});
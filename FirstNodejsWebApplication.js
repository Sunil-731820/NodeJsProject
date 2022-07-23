//first import module such as http
var http = require("http")

//second things is to create server using this http module

http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("welcome back aliens")
    response.write("This is my fIrst Node js Programs")
    response.write("hello welcome to the node js tutorials")
    response.end("Hello world")
    
}).listen(8081)


const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<table>')
      res.write('<tr> <th>LOCATION</th><th>HOURS</th><th>EXPENDITURE</th></tr>')
      res.write('<tr><td>Las Vegas</td><td>8</td><td>$800</td> </tr>')
      res.write('<tr><td>Chicago</td><td>6</td><td>$600</td> </tr>')
      res.write('<tr><td>San Francisco</td> <td>7</td> <td>$700</td> </tr>')
      res.write('<tr><td>New York City</td><td>10</td><td>$1000</td></tr>')
      res.write('</table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
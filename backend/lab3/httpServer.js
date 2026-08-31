import http from "http";
const port = 3000;
const userdata = [{
    id: 101,
    name: "ABCD",
    email: "abcd25b101.abes.ac.in"
}];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;


    if (url === "/msg" && method === "GET") {
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 200;
        res.end("This is welcome message from server");
    }
    
  
    else if (url === "/sys" && method === "GET") {
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 200;
        res.end("This is system information");
    }

    else if (url === "/user" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to user");
    }

    else if (url === "/data" && method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(userdata)); 
    }

    else if (url === "/data" && method === "PUT") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Data updated successfully");
    }

    else if (url.startsWith("/submit") && method === "GET") {
        const parsedUrl = new URL(url, `http://${req.headers.host}`);
        const id = Number(parsedUrl.searchParams.get("id"));
        const name = parsedUrl.searchParams.get("name");
        const email = parsedUrl.searchParams.get("email");

        if (id && name && email) {
            const newUserData = { id, name, email };
            userdata.push(newUserData);

            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "Data added successfully via browser!",
                currentData: userdata
            }));
        } else {
            res.setHeader("Content-Type", "text/plain");
            res.statusCode = 400;
            res.end("Please provide id, name, and email as query parameters (e.g., /submit?id=102&name=WXYZ&email=test@abes.ac.in)");
        }
    }

    else if (url === "/create" && method === "POST") {
        let body = '';
        
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const newData = JSON.parse(body);
                
                if (newData.id && newData.name && newData.email) {
                    userdata.push({
                        id: Number(newData.id),
                        name: newData.name,
                        email: newData.email
                    });
                    
                    res.writeHead(201, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({
                        message: "Data inserted successfully",
                        currentData: userdata
                    }));
                } else {
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Invalid body data. Must contain id, name, and email.");
                }
            } catch (err) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Invalid JSON format");
            }
        });
    }
    else {
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});
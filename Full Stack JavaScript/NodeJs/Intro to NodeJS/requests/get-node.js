import https from "https";

const options = {
  hostname: "https://whatever.com",
  port: 443,
  path: "/todos",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on("data", (data) => {
    console.log(data);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();

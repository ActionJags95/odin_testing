import axios from "axios";

axios
  .get("https://google.com")
  .then((res) => {
    console.log(`Status Code: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
    console.log("Error occured");
  });

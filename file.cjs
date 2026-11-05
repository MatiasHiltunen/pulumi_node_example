
const fs = require("fs");
const path = "hello.txt";

if(process.argv[2] === "delete") {
    fs.rmSync(path);
    console.log(`Deleted: ${path}`);
} else {
    if(!process.env.HELLO_DEVOPS_YAMK){ 
        throw new Error("Missing environment variable: HELLO_DEVOPS_YAMK");
    }

    fs.writeFileSync(path, process.env.HELLO_DEVOPS_YAMK, "utf-8");

    console.log(fs.readFileSync(path, "utf-8").trim());

}
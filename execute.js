const { exec } = require("child_process");

let uri = process.argv[2] ?? "";

// path-format: /path/to/file:line:col

let uriParameters = uri.replace("testproto://", "");

let path = "" + uriParameters;

let vscodePath = "code";
let command = vscodePath + " --goto " + path;

// execute the command
var child = exec(command, { stdio: "ignore" });
child.on("exit", function () {
    process.exit();
});

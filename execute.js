const { exec } = require("child_process");

let uri = process.argv[2] ?? "";

// path-format: /path/to/file:line:col

let uriParameters = uri.replace("testproto://", "");

let path = "" + uriParameters;

let vscodePath = "code";
let wslArgument = "--remote wsl+Ubuntu-20.04";
let pathArgument = (path.includes(".") ? "--goto " : "") + path; // goto only for files, rest for folders
let command = vscodePath + " " + wslArgument + " " + pathArgument;

// execute the command
var child = exec(command, { stdio: "ignore" });
child.on("exit", function () {
    process.exit();
});

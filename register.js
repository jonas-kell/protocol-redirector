const path = require("path");
const ProtocolRegistry = require("protocol-registry");

let NodeCommand = `"C:\\Program Files\\nodejs\\node.exe" "${path.join(__dirname, "./execute.js")}" $_URL_`; // only works with full path to node application
let PackagedCommandWin = `"${path.join(__dirname, "./execute-win.exe")}" $_URL_`;
let PackagedCommandLinux = `"${path.join(__dirname, "./execute-linux")}" $_URL_`;

console.log("Registering...");
// Registers the Protocol
ProtocolRegistry.register({
    protocol: "netbeans", // sets protocol for your command , testproto://**
    command: NodeCommand, // this will be executed with a extra argument %url from which it was initiated
    override: true, // Use this with caution as it will destroy all previous Registrations on this protocol
    terminal: false, // Use this to run your command inside a terminal
    script: false,
}).then(async () => {
    console.log("Successfully registered");
});

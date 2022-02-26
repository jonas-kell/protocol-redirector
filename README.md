# Protocol-Redirector
Register custom protocols to execute commands. Used to Open VS-Code from an url-protocol

To get up and running do: 
```cmd
npm install
```
To get the protocol registered, change the desired variables in `register.js` and do: 
```cmd
node register.js
```
To get the protocol-target working, change the desired variables in `execute.js`:

If you intend to compile the `execute.js`-script, do: 
```cmd
npm install -g pkg
pkg execute.js
```


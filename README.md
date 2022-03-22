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
# Note: My usecase for this has been fixed:
https://github.com/microsoft/vscode-remote-release/issues/6393

https://github.com/spatie/laravel-ignition/issues/21

Example Laravel config now:

#### **`.env`**
``` 
IGNITION_REMOTE_SITES_PATH='/var/www/html'
IGNITION_LOCAL_SITES_PATH='wsl+Ubuntu-20.04/var/www/html'
```

# nodeCameraServer

a NodeJS server that takes images from a generic USB camera and serves the data as a webservice.

i'm using a budget usb camera from the local market. (you can tell by the quality of the image genrated). i expect any usb camera will do as long as you can extract an image from it.

in this example, the server is running on a Raspberry Pi 2 Model B.

what you need:
--------------------
a USB camera.

setup:
--------------------
1.
install the required packages
```
sudo apt-get install fswebcam
```

2.
navigate to the directory with the index.js file.

3.
install packages required.
```
npm init
bower init
```

3.
run the node command to start the server.
```
node index.js
```

the server will now be running on port 3003. to configure this to something else, see below.

configuring:
--------------------
you can find more information about the different function that the fswebcam program supports so you can create images with custom configurations.

[for those using a RPi](https://www.raspberrypi.org/documentation/usage/webcams/)

[man pages for fswebcam](http://manpages.ubuntu.com/manpages/lucid/man1/fswebcam.1.html)

 to change the port the server runs on, in the index.js file, change the port number on the the line that says:
 ```
 var server = app.listen(3003);
 ```

 for example if you want to run the the server on port 8080, change that line so it says:
 ```
 var server = app.listen(8080);
 ```

future improvements:
--------------------

stream data directly from webcam without committing to local filesystem.
when image is captured, serve data over a socket.io connection for quicker transmission.
get a better camera that supports streaming content natively and pipe output to end-client.

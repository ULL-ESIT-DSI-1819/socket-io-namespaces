# Socket.io [Namespaces](https://socket.io/docs/rooms-and-namespaces/)

Socket.IO allows you to “namespace” your sockets, which essentially means assigning different endpoints or paths.

This is a useful feature to minimize the number of resources (TCP connections) and at the same time separate concerns within your application by introducing separation between communication channels.

Within each namespace, you can also define arbitrary channels called `rooms` that sockets can `join` and `leave`.

Each Socket in Socket.IO is identified by a random, unguessable, unique identifier `Socket#id`. 
For your convenience, each socket automatically joins a room identified by this `id`.

```
[~/.../socket-io-namespaces(master)]$ tree -I node_modules
.
├── README.md
├── ns
│   ├── index.js
│   ├── public
│   │   └── index.html
│   └── views
│       └── space.ejs
├── package-lock.json
├── package.json
└── rooms
    ├── index.js
    ├── public
    │   └── index.html
    └── views
        └── room.ejs

6 directories, 9 files
```

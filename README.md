# Socket.io [Namespaces](https://socket.io/docs/rooms-and-namespaces/)

Socket.IO allows you to “namespace” your sockets, which essentially means assigning different endpoints or paths.

This is a useful feature to minimize the number of resources (TCP connections) and at the same time separate concerns within your application by introducing separation between communication channels.

```
ns
├── index.html
├── index.js
└── index2.html
```

```
rooms
├── index.html
├── index.js
└── index2.html

```

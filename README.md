## Todo App

Run application: `docker-compose up`

- **MongoDB shell**: `docker-compose exec mongodb /bin/sh`
- **Mongo Express web**: [http://localhost:8081/](http://localhost:8081/)
- **Application UI**: [http://localhost:3000/](http://localhost:8081/)

### Run Development Node

Build the image: `docker build -t nodeserver-tools -f .\Dockerfile-tools .`

To enable your local changes to be updated in the Docker image, you must map your local file system into the running Docker container, as follows:

1. Generate a Linux version of your node_modules dependencies locally, by generating them inside the node:16 docker image:

`docker run -i -v ${PWD}/package.json:/tmp/package.json -v ${PWD}/node_modules_linux:/tmp/node_modules -w /tmp -t node:16 npm install`

This step only needs to be repeated if you modify your package.json file.

2. Run the Docker tools image as an interactive application on your command line in dev mode:

`docker run -i -p 3000:3000 -v ${PWD}/:/app -v ${PWD}/node_modules_linux:/app/node_modules -t nodeserver-tools /bin/run-dev.sh`

3. Run as an interactive applications on your command line in debug mode:

`docker run -i -p 3000:3000 -p 9229:9229 -t my-nodejs-application-tools /bin/run-debug`

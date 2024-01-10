# Requirements

- Docker

# Usage

- Build node api image:

```
docker build -t node-hello .
```

- Run image:

```
docker run -p 80:80 --name web node-hello
```

- Run docker compose:

```
docker compose up
```

using ab test tool
./ab -n 10000 -c 400 http://127.0.0.1:80/

curl localhost:80

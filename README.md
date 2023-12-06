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

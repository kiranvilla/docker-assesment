# Docker Assignment


### Question 1:
Rum below commands
- `docker build -t docker-tutorial .`
- `docker run --name docker-tutorial-c -dp 3000:3000 docker-tutorial`
- `docker stop docker-tutorial-c`
- `docker rm docker-tutorial-c`
- `docker rmi docker-tutorial`
---
### Question 3:

Rum below commands
- `docker-compose up -d`
---
### Question 5:

Rum below commands
- `docker login -u [USER_NAME]`
- `docker tag [image_name] [USER_NAME]/[REPO_NAME]` (on when the image tag is different)
- `docker push [USER_NAME]/[REPO_NAME]`
---
### Question 4:

created a network.
- `docker network create todo-app`

build a web image and run container using below commands.
- `docker build -t docker-tutorial .`
```
	docker run -dp 127.0.0.1:3000:3000 \
  -w /app -v "$(pwd):/app" \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  docker-tutorial
```

pull a MySQL image and run container using below commands.

```
docker run -d \
--network todo-app --network-alias mysql \
-v todo-mysql-data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=secret \
-e MYSQL_DATABASE=todos \
mysql:8.0
```
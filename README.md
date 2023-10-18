# API Gateway

Mediation between application microservices

### Go to Graphql root folder

### If is not created, create private network auth

```
docker network create auth
```

### You can run containerized version with

```
docker run -p 3000:3000 -it --rm --name graphql --network auth sdrivert/graphql:latest
```

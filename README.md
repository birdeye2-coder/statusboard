# Status Board - Capstone Project

Microservices status board application built with FastAPI, Next.js, PostgreSQL, and Nginx.

## Run Instructions
1. Ensure Docker and Docker Compose are installed.
2. Pull and start the production stack:
   ```bash
   docker compose -f compose.yaml -f compose.prod.yaml pull
   docker compose -f compose.yaml -f compose.prod.yaml up -d
   ```

## Operations & Backup Recipe
Backup:
```bash
docker compose exec -T db pg_dump -U postgres postgres > backup.sql

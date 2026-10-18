cat << 'EOF' > README.md
# Status Board - Capstone Project

Microservices status board application built with FastAPI, Next.js, PostgreSQL, and Nginx.

## Run Instructions (Production Shape)
1. Ensure Docker and Docker Compose are installed.
2. Clone the repository and navigate to the project directory.
3. Pull and start the production stack:
   ```bash
   docker compose -f compose.yaml -f compose.prod.yaml pull
   docker compose -f compose.yaml -f compose.prod.yaml up -d

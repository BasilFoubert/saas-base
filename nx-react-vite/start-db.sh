#!/bin/bash

# Stop all running Docker containers
echo "Stopping all running containers..."
docker stop $(docker ps -q)

# Start the containers using Docker Compose from the correct path
echo "Starting Docker Compose..."
docker compose -f docker/docker-compose.yml up --build


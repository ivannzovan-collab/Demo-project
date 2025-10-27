# DramaSnap Backend Services

Microservices architecture for DramaSnap platform.

## Services

- **user-service**: User management, authentication, subscriptions
- **content-service**: Movie/episode metadata, search
- **video-service**: Video streaming, playback
- **recommendation-service**: ML-based recommendations
- **analytics-service**: Event tracking, analytics

## Quick Start

```bash
# Start infrastructure
docker-compose up -d

# Run services (in separate terminals)
cd services/user-service && npm run dev
cd services/content-service && npm run dev
cd services/video-service && npm run dev
cd services/recommendation-service && python app.py
cd services/analytics-service && python app.py
```

## Tech Stack

- Node.js (Express/NestJS)
- Python (FastAPI)
- PostgreSQL
- Redis
- MongoDB
- Elasticsearch

## More Info

- [Architecture](../docs/ARCHITECTURE.md)
- [Getting Started](../docs/GETTING_STARTED.md)

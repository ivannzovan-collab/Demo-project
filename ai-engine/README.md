# DramaSnap AI Content Engine

AI-powered content generation pipeline for creating short-form drama content.

## Components

- **script-generator**: GPT-4 based script generation
- **video-generator**: AI video generation (Runway/Pika)
- **voice-generator**: AI voice synthesis (ElevenLabs)
- **qa-system**: Quality assurance and validation

## Quick Start

```bash
# Generate a complete movie
python pipeline.py --genre romance --length 100 --output ./output

# Generate script only
cd script-generator
python generate.py --genre mystery --length 80

# Generate video from script
cd video-generator
python generate.py --script-id abc123

# Generate voices
cd voice-generator
python generate.py --script-id abc123
```

## Configuration

Create `.env` file:

```env
OPENAI_API_KEY=sk-...
RUNWAY_API_KEY=...
ELEVENLABS_API_KEY=...
OUTPUT_PATH=/path/to/output
```

## Pipeline

1. **Script Generation** → GPT-4 creates episode scripts
2. **Video Generation** → AI generates video from scripts
3. **Voice Generation** → AI synthesizes character voices
4. **QA Check** → Validate quality and consistency
5. **Assembly** → Combine into final episodes
6. **Upload** → Send to S3/CDN

## More Info

- [Content Guidelines](../docs/CONTENT_GUIDELINES.md)
- [Architecture](../docs/ARCHITECTURE.md)

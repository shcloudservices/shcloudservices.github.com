FROM node:22-alpine

WORKDIR /app

# Set production environment
ENV NODE_ENV=production \
    PORT=8080

# Install dependencies first (leverages Docker cache)
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy application files
COPY . .

# Expose default port
EXPOSE 8080

# Health check for Dokploy / Docker orchestrators
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1

# Run as non-root user
USER node

# Start server
CMD ["node", "server.js"]

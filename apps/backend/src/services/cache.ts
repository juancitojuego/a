// apps/backend/src/services/cache.ts
// Conceptual LRU Cache
// import LRUCache from 'lru-cache'; // Conceptual import
const cache = new Map(); // Simple Map as placeholder
const MAX_SIZE = 100;

export function getFromCache(key: string) {
  return cache.get(key);
}

export function setInCache(key: string, value: any, ttl?: number) {
  if (cache.size >= MAX_SIZE) {
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey); // Simplistic eviction
  }
  cache.set(key, value);
  if (ttl) {
    setTimeout(() => cache.delete(key), ttl);
  }
}

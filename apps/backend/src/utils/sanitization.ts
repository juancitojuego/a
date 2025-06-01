// apps/backend/src/utils/sanitization.ts
export function sanitizeInput(input: string): string {
  // Placeholder for actual sanitization logic (e.g., using a library)
  return input.replace(/<[^>]*>?/gm, ''); // Basic HTML strip
}

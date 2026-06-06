// Simple in-memory store keeping the comment list across server requests.
export interface Comment {
  id: string;
  body: string;
  createdAt: number;
}

// Pin the list to globalThis so dev HMR does not wipe it between requests.
// Note: real production uses a database; this in-memory store is for lesson demo only.
const g = globalThis as unknown as { __comments?: Comment[] };
if (!g.__comments) {
  g.__comments = [];
}
const comments: Comment[] = g.__comments;

export function listAllComments(): Comment[] {
  return [...comments].sort((a, b) => b.createdAt - a.createdAt);
}

export function pushComment(body: string): Comment {
  const c: Comment = { id: crypto.randomUUID(), body, createdAt: Date.now() };
  comments.push(c);
  return c;
}

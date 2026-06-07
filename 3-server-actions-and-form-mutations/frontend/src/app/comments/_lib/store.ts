// Simple in-memory store keeping the comment list across server requests.
export interface Comment {
  /** Stable comment identifier. */
  id: string;
  /** Comment body text. */
  body: string;
  /** Unix-ms timestamp when the comment was created. */
  createdAt: number;
  /** Random avatar image index (1–70) for HeroUI Avatar display. */
  avatarSeed: number;
}

// Pin the list to globalThis so dev HMR does not wipe it between requests.
// Note: real production uses a database; this in-memory store is for lesson demo only.
const g = globalThis as unknown as { __comments?: Comment[] };
if (!g.__comments) {
  g.__comments = [];
}
const comments: Comment[] = g.__comments;

/** Derive a stable avatar seed from a comment id (legacy rows without avatarSeed). */
function avatarSeedFromId(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash + id.charCodeAt(i)) % 70;
  }
  return hash + 1;
}

export function listAllComments(): Comment[] {
  return [...comments]
    .map((c) => ({
      ...c,
      avatarSeed: c.avatarSeed ?? avatarSeedFromId(c.id),
    }))
    .sort((a, b) => b.createdAt - a.createdAt);
}

export function pushComment(body: string): Comment {
  const c: Comment = {
    id: crypto.randomUUID(),
    body,
    createdAt: Date.now(),
    avatarSeed: Math.floor(Math.random() * 70) + 1,
  };
  comments.push(c);
  return c;
}

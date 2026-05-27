// VI: Store in-memory đơn giản giữ danh sách comment giữa các request server.
// (EN: Simple in-memory store keeping the comment list across server requests.)
export interface Comment {
  id: string;
  body: string;
  createdAt: number;
}

// VI: Lưu ý: ở dev/production thật phải dùng DB; in-memory này chỉ phục vụ demo lesson.
// Dùng globalThis để chống HMR reset module giữa các request trong dev mode.
// (EN: Note: real prod uses a DB; this in-memory is for lesson demo only.
// We pin the list to globalThis so dev HMR does not wipe it between requests.)
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

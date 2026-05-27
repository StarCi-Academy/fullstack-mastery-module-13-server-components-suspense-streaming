"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { pushComment } from "./_lib/store";

// VI: Schema validate input — body bắt buộc, dùng Zod giống ví dụ trong vi.md.
// (EN: Input validation schema — body required, mirroring vi.md example.)
const Schema = z.object({ body: z.string().min(1, "Required") });

export interface CreateCommentState {
  error: string | null;
}

// VI: Server Action `createComment`: validate, push store, revalidate path để RSC re-render.
// (EN: Server Action `createComment`: validate, push to store, revalidate path so RSC re-renders.)
export async function createComment(
  _prev: CreateCommentState,
  formData: FormData,
): Promise<CreateCommentState> {
  const parsed = Schema.safeParse({ body: formData.get("body") });
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }
  pushComment(parsed.data.body);
  revalidatePath("/comments");
  return { error: null };
}

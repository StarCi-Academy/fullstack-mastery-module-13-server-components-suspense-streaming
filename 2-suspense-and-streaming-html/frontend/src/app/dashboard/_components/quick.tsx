// Quick widget — simulates a fast async source (50ms). Runs entirely on the
// server (no "use client"), so its `await` suspends the parent Suspense
// boundary instead of blocking the whole response.
import { Chip } from "@/components/ui";

async function getQuickData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 50));
  return { value: "Quick data ready", delta: "+50ms" };
}

/** Quick widget — ~50ms async Server Component, streams first. */
export async function Quick(): Promise<React.ReactElement> {
  const data = await getQuickData();
  return (
    <div data-testid="widget-quick" className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Quick</span>
        <Chip color="success" variant="soft" size="sm" className="bg-success/20">
          {data.delta}
        </Chip>
      </div>
      <p className="text-sm text-foreground">{data.value}</p>
      <p className="text-xs text-muted">streamed first chunk</p>
    </div>
  );
}

import { Chip } from "@/components/ui";

async function getSlowData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 1500));
  return { value: "Slow data ready", delta: "+1500ms" };
}

/** Slow widget — ~1500ms; must not block faster Suspense boundaries. */
export async function Slow(): Promise<React.ReactElement> {
  const data = await getSlowData();
  return (
    <div data-testid="widget-slow" className="rounded-xl bg-default-100 p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-muted">Slow</span>
        <Chip variant="secondary" size="sm" className="w-fit">
          {data.delta}
        </Chip>
      </div>
      <p className="text-2xl font-bold text-foreground">{data.value}</p>
      <p className="mt-1 text-xs text-muted">streamed last chunk</p>
    </div>
  );
}

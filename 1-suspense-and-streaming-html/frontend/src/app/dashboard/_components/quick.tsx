import { Chip } from "@/components/ui";

async function getQuickData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 50));
  return { value: "Quick data ready", delta: "+50ms" };
}

/** Quick widget — ~50ms async source, streams first. */
export async function Quick(): Promise<React.ReactElement> {
  const data = await getQuickData();
  return (
    <div data-testid="widget-quick" className="rounded-xl bg-default-100 p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-muted">Quick</span>
        <Chip variant="secondary" size="sm" className="w-fit">
          {data.delta}
        </Chip>
      </div>
      <p className="text-2xl font-bold text-foreground">{data.value}</p>
      <p className="mt-1 text-xs text-muted">streamed first chunk</p>
    </div>
  );
}

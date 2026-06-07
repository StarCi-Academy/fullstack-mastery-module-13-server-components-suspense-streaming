import { Chip } from "@/components/ui";

async function getMediumData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 500));
  return { value: "Medium data ready", delta: "+500ms" };
}

/** Medium widget — ~500ms async source. */
export async function Medium(): Promise<React.ReactElement> {
  const data = await getMediumData();
  return (
    <div data-testid="widget-medium" className="rounded-xl bg-default-100 p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-muted">Medium</span>
        <Chip variant="secondary" size="sm" className="w-fit">
          {data.delta}
        </Chip>
      </div>
      <p className="text-2xl font-bold text-foreground">{data.value}</p>
      <p className="mt-1 text-xs text-muted">streamed second chunk</p>
    </div>
  );
}

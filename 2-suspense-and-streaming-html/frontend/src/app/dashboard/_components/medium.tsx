// Medium widget — simulates a mid-latency async source (500ms). An async Server
// Component whose `await` resolves into the second streamed chunk.
import { Chip } from "@/components/ui";

async function getMediumData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 500));
  return { value: "Medium data ready", delta: "+500ms" };
}

/** Medium widget — ~500ms async Server Component. */
export async function Medium(): Promise<React.ReactElement> {
  const data = await getMediumData();
  return (
    <div data-testid="widget-medium" className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Medium</span>
        <Chip color="warning" variant="soft" size="sm" className="bg-warning/20">
          {data.delta}
        </Chip>
      </div>
      <p className="text-sm text-foreground">{data.value}</p>
      <p className="text-xs text-muted">streamed second chunk</p>
    </div>
  );
}

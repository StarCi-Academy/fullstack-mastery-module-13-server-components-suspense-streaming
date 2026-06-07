// Slow widget — simulates the slowest async source (1500ms). Because it lives in
// its own Suspense boundary, its long `await` must not hold back Quick or Medium.
import { Chip } from "@/components/ui";

async function getSlowData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 1500));
  return { value: "Slow data ready", delta: "+1500ms" };
}

/** Slow widget — ~1500ms async Server Component; must not block faster boundaries. */
export async function Slow(): Promise<React.ReactElement> {
  const data = await getSlowData();
  return (
    <div data-testid="widget-slow" className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Slow</span>
        <Chip color="danger" variant="soft" size="sm" className="bg-danger/20">
          {data.delta}
        </Chip>
      </div>
      <p className="text-sm text-foreground">{data.value}</p>
      <p className="text-xs text-muted">streamed last chunk</p>
    </div>
  );
}

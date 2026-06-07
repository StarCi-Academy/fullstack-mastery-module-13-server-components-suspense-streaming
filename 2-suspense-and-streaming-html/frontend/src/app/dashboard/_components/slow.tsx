// Slow widget — simulates the slowest async source (1500ms). Because it lives in
// its own Suspense boundary, its long `await` must not hold back Quick or Medium.
import { Card, CardContent, CardHeader, Chip } from "@/components/ui";

async function getSlowData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 1500));
  return { value: "Slow data ready", delta: "+1500ms" };
}

/** Slow widget — ~1500ms async Server Component; must not block faster boundaries. */
export async function Slow(): Promise<React.ReactElement> {
  const data = await getSlowData();
  return (
    <Card data-testid="widget-slow" className="border-danger-200 border">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <span className="text-default-500 text-sm font-medium">Slow</span>
        <Chip color="danger" variant="soft" size="sm">
          {data.delta}
        </Chip>
      </CardHeader>
      <CardContent>
        <p className="text-danger-700 text-3xl font-bold">{data.value}</p>
        <p className="text-default-500 text-xs">streamed last chunk</p>
      </CardContent>
    </Card>
  );
}

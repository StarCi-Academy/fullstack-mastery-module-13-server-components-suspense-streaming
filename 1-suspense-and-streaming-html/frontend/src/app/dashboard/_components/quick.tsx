// Quick widget — simulates a fast async source (50ms). Runs entirely on the
// server (no "use client"), so its `await` suspends the parent Suspense
// boundary instead of blocking the whole response.
import { Card, CardContent, CardHeader, Chip } from "@/components/ui";

async function getQuickData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 50));
  return { value: "Quick data ready", delta: "+50ms" };
}

/** Quick widget — ~50ms async Server Component, streams first. */
export async function Quick(): Promise<React.ReactElement> {
  const data = await getQuickData();
  return (
    <Card data-testid="widget-quick" className="border-success-200 border">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <span className="text-default-500 text-sm font-medium">Quick</span>
        <Chip color="success" variant="soft" size="sm">
          {data.delta}
        </Chip>
      </CardHeader>
      <CardContent>
        <p className="text-success-700 text-3xl font-bold">{data.value}</p>
        <p className="text-default-500 text-xs">streamed first chunk</p>
      </CardContent>
    </Card>
  );
}

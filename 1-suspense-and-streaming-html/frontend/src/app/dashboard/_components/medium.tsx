// Medium widget — simulates a medium-latency async source (500ms).
// (EN: Widget vừa, mô phỏng nguồn async ~500ms, resolve sau Quick.)
import { Card, CardContent, CardHeader, Chip } from "@/components/ui";

async function getMediumData(): Promise<{ value: string; delta: string }> {
  await new Promise((res) => setTimeout(res, 500));
  return { value: "Medium data ready", delta: "+500ms" };
}

export async function Medium(): Promise<React.ReactElement> {
  const data = await getMediumData();
  return (
    <Card
      data-testid="widget-medium"
      className="border-warning-200 border"
    >
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <span className="text-default-500 text-sm font-medium">Medium</span>
        <Chip color="warning" variant="flat" size="sm">
          {data.delta}
        </Chip>
      </CardHeader>
      <CardContent>
        <p className="text-warning-700 text-3xl font-bold">{data.value}</p>
        <p className="text-default-500 text-xs">streamed second chunk</p>
      </CardContent>
    </Card>
  );
}

// Medium widget — simulates a mid-latency async source (500ms). An async Server
// Component whose `await` resolves into the second streamed chunk.
import { Chip, Paragraph } from "@/components/ui";

const getMediumData = async (): Promise<{ value: string; delta: string }> => {
  await new Promise((res) => setTimeout(res, 500));
  return { value: "Medium data ready", delta: "+500ms" };
}

/** Medium widget — ~500ms async Server Component. */
export const Medium = async (): Promise<React.ReactElement> => {
  const data = await getMediumData();
  return (
    <div data-testid="widget-medium" className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Medium</span>
        <Chip color="warning" variant="soft" size="sm" className="bg-warning/20">
          {data.delta}
        </Chip>
      </div>
      <Paragraph size="sm" className="text-foreground">{data.value}</Paragraph>
      <Paragraph size="sm" color="muted" className="text-xs">streamed second chunk</Paragraph>
    </div>
  );
}

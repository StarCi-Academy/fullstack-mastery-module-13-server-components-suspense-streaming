// Slow widget — simulates the slowest async source (1500ms). Because it lives in
// its own Suspense boundary, its long `await` must not hold back Quick or Medium.
import { Chip, Paragraph } from "@/components/ui";

const getSlowData = async (): Promise<{ value: string; delta: string }> => {
  await new Promise((res) => setTimeout(res, 1500));
  return { value: "Slow data ready", delta: "+1500ms" };
}

/** Slow widget — ~1500ms async Server Component; must not block faster boundaries. */
export const Slow = async (): Promise<React.ReactElement> => {
  const data = await getSlowData();
  return (
    <div data-testid="widget-slow" className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Slow</span>
        <Chip color="danger" variant="soft" size="sm" className="bg-danger/20">
          {data.delta}
        </Chip>
      </div>
      <Paragraph size="sm" className="text-foreground">{data.value}</Paragraph>
      <Paragraph size="sm" color="muted" className="text-xs">streamed last chunk</Paragraph>
    </div>
  );
}

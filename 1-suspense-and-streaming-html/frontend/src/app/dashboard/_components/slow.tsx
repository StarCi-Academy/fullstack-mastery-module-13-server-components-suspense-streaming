// Slow widget — simulates a slow async source (1500ms). The slow boundary
// must NOT block the faster ones. (EN: Widget chậm 1500ms — boundary này KHÔNG
// được chặn các widget nhanh nhờ Suspense độc lập.)

async function getSlowData(): Promise<{ value: string }> {
  await new Promise((res) => setTimeout(res, 1500));
  return { value: "Slow data ready" };
}

export async function Slow(): Promise<React.ReactElement> {
  const data = await getSlowData();
  return (
    <div
      data-testid="widget-slow"
      className="rounded bg-red-100 p-4 text-red-900"
    >
      {data.value}
    </div>
  );
}

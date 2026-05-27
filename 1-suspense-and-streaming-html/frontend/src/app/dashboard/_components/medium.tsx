// Medium widget — simulates a medium-latency async source (500ms).
// (EN: Widget vừa, mô phỏng nguồn async ~500ms, resolve sau Quick.)

async function getMediumData(): Promise<{ value: string }> {
  await new Promise((res) => setTimeout(res, 500));
  return { value: "Medium data ready" };
}

export async function Medium(): Promise<React.ReactElement> {
  const data = await getMediumData();
  return (
    <div
      data-testid="widget-medium"
      className="rounded bg-yellow-100 p-4 text-yellow-900"
    >
      {data.value}
    </div>
  );
}

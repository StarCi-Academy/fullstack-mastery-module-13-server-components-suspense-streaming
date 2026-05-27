// Quick widget — simulates a fast async source (50ms). (EN: Widget nhanh,
// mô phỏng nguồn async ~50ms để chunk Suspense đầu tiên stream sớm.)

async function getQuickData(): Promise<{ value: string }> {
  await new Promise((res) => setTimeout(res, 50));
  return { value: "Quick data ready" };
}

export async function Quick(): Promise<React.ReactElement> {
  const data = await getQuickData();
  return (
    <div
      data-testid="widget-quick"
      className="rounded bg-green-100 p-4 text-green-900"
    >
      {data.value}
    </div>
  );
}

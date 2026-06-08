import { Skeleton } from "@/components/ui";

/** Route-level loading UI — flat skeleton blocks while the product page resolves. */
const ProductLoading = (): React.ReactElement => {
  return (
    <main className="min-h-screen bg-background p-3">
      <div className="mx-auto max-w-2xl" data-testid="product-loading">
        <Skeleton className="mb-3 h-6 w-48 rounded-lg" />
        <Skeleton className="mb-6 h-4 w-full max-w-md rounded-lg" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-32 rounded-lg" />
            <Skeleton className="h-6 w-40 rounded-lg" />
            <Skeleton className="h-4 w-16 rounded-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-36 rounded-lg" />
            <Skeleton className="h-10 w-40 rounded-lg" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductLoading

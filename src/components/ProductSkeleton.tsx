
const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border border-gray-200 bg-[#FAFCFA] p-4 sm:p-5 lg:p-6"
        >
          
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />

            <div className="flex-1 space-y-3">
              <div className="h-4 w-3/4 rounded bg-gray-200" />
              <div className="h-3 w-1/2 rounded bg-gray-200" />
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="h-3 w-20 rounded bg-gray-200" />

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="h-6 w-28 rounded bg-gray-200" />
              <div className="h-6 w-16 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
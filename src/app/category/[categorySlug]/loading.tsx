
const CategoryProductLoading = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-3 py-5 sm:px-5 sm:py-6 md:px-6 lg:px-8 lg:py-8">
      <div className="mb-5 flex animate-pulse items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:gap-4 sm:p-5 md:rounded-2xl md:p-6 lg:mb-6">
        <div className="h-14 w-14 shrink-0 rounded-xl bg-gray-200 sm:h-16 sm:w-16 md:h-20 md:w-20" />

        <div className="min-w-0 flex-1 space-y-3">
          <div className="h-6 w-40 max-w-full rounded bg-gray-200 sm:h-7 sm:w-56 md:h-8 md:w-64" />
          <div className="h-4 w-52 max-w-full rounded bg-gray-200" />
        </div>
      </div>

     
      <div className="mb-5 flex animate-pulse flex-wrap gap-3">
        <div className="h-10 w-28 rounded-lg bg-gray-200" />
        <div className="h-10 w-28 rounded-lg bg-gray-200" />
        <div className="h-10 w-28 rounded-lg bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-2xl border border-gray-200 bg-[#FAFCFA] p-4 sm:p-5 lg:p-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200 sm:h-14 sm:w-14" />

              <div className="flex-1 space-y-3">
                <div className="h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-1/2 rounded bg-gray-200" />
              </div>
            </div>

            <div className="mt-5 border-t border-gray-200 pt-4">
              <div className="h-3 w-20 rounded bg-gray-200" />

              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="h-6 w-28 rounded bg-gray-200" />
                <div className="h-6 w-16 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryProductLoading;

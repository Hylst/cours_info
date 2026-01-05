import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Skeleton className="mx-auto mb-6 h-16 w-16 rounded-full" />
          <Skeleton className="mx-auto mb-6 h-12 w-3/4" />
          <Skeleton className="mx-auto h-6 w-full" />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-96 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

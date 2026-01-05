import { Card } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 h-8 w-48 animate-pulse rounded-full bg-slate-200 mx-auto dark:bg-slate-700" />
          <div className="mb-6 h-12 w-full max-w-2xl animate-pulse rounded-lg bg-slate-200 mx-auto dark:bg-slate-700" />
          <div className="mb-8 h-6 w-full max-w-xl animate-pulse rounded-lg bg-slate-200 mx-auto dark:bg-slate-700" />
        </div>
      </div>

      <div className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6">
                <div className="mb-4 h-12 w-12 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
                <div className="mb-2 h-6 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

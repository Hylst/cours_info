import { Card } from "@/components/ui/card"

export default function FAQLoading() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 h-12 w-96 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="h-20 animate-pulse bg-slate-100 dark:bg-slate-800" />
          ))}
        </div>
      </div>
    </div>
  )
}

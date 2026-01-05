import { Card } from "@/components/ui/card"

export default function MythesLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-6">
              <div className="h-6 w-32 animate-pulse rounded bg-slate-200 mb-4" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-200 mb-2" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

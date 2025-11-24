'use client' // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="bg-primary text-textMain flex items-center justify-center min-h-screen flex-col gap-4">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-textMuted">
            An unexpected error has occurred.
        </p>
        <button
          className="px-4 py-2 bg-accent text-primary rounded-lg font-bold hover:opacity-90 transition"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
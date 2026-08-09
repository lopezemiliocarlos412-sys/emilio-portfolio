import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
      <span className="font-mono text-sm text-teal">404</span>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        This page doesn't exist.
      </h1>
      <p className="mt-3 max-w-sm text-ink/60">
        The link might be broken, or the page may have moved.
      </p>
      <div className="mt-8">
        <Button to="/">Back to home</Button>
      </div>
    </section>
  )
}

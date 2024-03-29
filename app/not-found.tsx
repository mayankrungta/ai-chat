import { IconVercel } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-between items-center gap-6 p-4 text-center text-gray-700 dark:text-gray-300">
      <h1 className="text-4xl font-semibold">Oops! Page Not Found.</h1>
      <IconVercel className="mr-2 h-12 w-12" />
      {/*}
      <img
        src="/logo.svg"
        alt="Next.js AI Chatbot"
        className="h-48 w-48 md:h-72 md:w-72"
      />
  */}
      <p className="text-lg">
        Sorry, we couldn’t find what you were looking for.
      </p>
      <Link
        href="/"
        className="px-4 py-2 text-lg font-semibold bg-primary-500 text-primary-50 dark:bg-primary-700 dark:text-primary-500/70 rounded-lg shadow-md hover:bg-primary-600 dark:hover:bg-primary-600/70"
      >
        Go Home
      </Link>
    </div>
  )
}
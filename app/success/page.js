import { redirect } from 'next/navigation'
import Link from 'next/link'
import { stripe } from '@/lib/stripe'

const icons = {
  success: (
    <svg width="32" height="28" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4695 0.232963C15.8241 0.561287 15.8454 1.1149 15.5171 1.46949L6.14206 11.5945C5.97228 11.7778 5.73221 11.8799 5.48237 11.8748C5.23253 11.8698 4.99677 11.7582 4.83452 11.5681L0.459523 6.44311C0.145767 6.07557 0.18937 5.52327 0.556912 5.20951C0.924454 4.89575 1.47676 4.93936 1.79051 5.3069L5.52658 9.68343L14.233 0.280522C14.5613 -0.0740672 15.1149 -0.0953599 15.4695 0.232963Z" fill="white"/>
    </svg>
  ),
  error: (
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.25628 1.25628C1.59799 0.914573 2.15201 0.914573 2.49372 1.25628L8 6.76256L13.5063 1.25628C13.848 0.914573 14.402 0.914573 14.7437 1.25628C15.0854 1.59799 15.0854 2.15201 14.7437 2.49372L9.23744 8L14.7437 13.5063C15.0854 13.848 15.0854 14.402 14.7437 14.7437C14.402 15.0854 13.848 15.0854 13.5063 14.7437L8 9.23744L2.49372 14.7437C2.15201 15.0854 1.59799 15.0854 1.25628 14.7437C0.914573 14.402 0.914573 13.848 1.25628 13.5063L6.76256 8L1.25628 2.49372C0.914573 2.15201 0.914573 1.59799 1.25628 1.25628Z" fill="white"/>
    </svg>
  ),
  info: (
    <svg width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V10C1.5 11.3807 2.61929 12.5 4 12.5H10C11.3807 12.5 12.5 11.3807 12.5 10V4C12.5 2.61929 11.3807 1.5 10 1.5ZM4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H10C12.2091 14 14 12.2091 14 10V4C14 1.79086 12.2091 0 10 0H4Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H7.25C7.66421 6.25 8 6.58579 8 7V10.5C8 10.9142 7.66421 11.25 7.25 11.25C6.83579 11.25 6.5 10.9142 6.5 10.5V7.75H6C5.58579 7.75 5.25 7.41421 5.25 7Z" fill="white"/>
      <path d="M5.75 4C5.75 3.31075 6.31075 2.75 7 2.75C7.68925 2.75 8.25 3.31075 8.25 4C8.25 4.68925 7.68925 5.25 7 5.25C6.31075 5.25 5.75 4.68925 5.75 4Z" fill="white"/>
    </svg>
  ),
}

const STATUS = {
  succeeded: { text: 'Payment succeeded', bg: 'bg-emerald-600', icon: icons.success },
  processing: { text: 'Your payment is processing', bg: 'bg-gray-600', icon: icons.info },
  requires_payment_method: { text: 'Payment failed — try again', bg: 'bg-red-600', icon: icons.error },
  default: { text: 'Something went wrong — contact support', bg: 'bg-red-600', icon: icons.error },
}

export default async function SuccessPage({ searchParams }) {
  // normalize search params (Next 13 passes searchParams as plain object)
  const paymentIntentId = searchParams?.payment_intent || searchParams?.payment_intent_client_secret || null

  if (!paymentIntentId) return redirect('/')

  let paymentIntent
  try {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
  } catch (err) {
    // If retrieval fails, go back home
    console.error('Stripe retrieve error', err)
    return redirect('/')
  }

  if (!paymentIntent) return redirect('/')

  const statusKey = STATUS[paymentIntent.status] ? paymentIntent.status : 'default'
  const status = STATUS[statusKey]

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className={`flex items-center justify-center w-28 h-28 rounded-full ${status.bg} shadow-md`}>
            {status.icon}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{status.text}</h1>
            <p className="text-sm text-slate-300 mt-2">Thank you — your support helps creators keep making great content.</p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link href="/" className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg px-4 py-2 font-medium">Back to home</Link>
              <Link href={`/dashboard`} className="inline-block border border-slate-700 text-slate-200 rounded-lg px-4 py-2">Go to dashboard</Link>
              <Link href={`https://dashboard.stripe.com/payments/${paymentIntentId}`} target="_blank" className="inline-flex items-center gap-2 text-sky-400 hover:underline">
                View in Stripe
                <svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.125 3.49998C2.64175 3.49998 2.25 3.89173 2.25 4.37498V11.375C2.25 11.8582 2.64175 12.25 3.125 12.25H10.125C10.6082 12.25 11 11.8582 11 11.375V9.62498C11 9.14173 11.3918 8.74998 11.875 8.74998C12.3582 8.74998 12.75 9.14173 12.75 9.62498V11.375C12.75 12.8247 11.5747 14 10.125 14H3.125C1.67525 14 0.5 12.8247 0.5 11.375V4.37498C0.5 2.92524 1.67525 1.74998 3.125 1.74998H4.875C5.35825 1.74998 5.75 2.14173 5.75 2.62498C5.75 3.10823 5.35825 3.49998 4.875 3.49998H3.125Z" fill="#60A5FA"/></svg>
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-8 bg-slate-800/40 border border-slate-700 rounded-lg p-4">
          <h2 className="text-base font-semibold text-slate-200">Payment details</h2>
          <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="flex flex-col">
              <dt className="text-xs text-slate-400">Intent ID</dt>
              <dd className="break-words">{paymentIntentId}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs text-slate-400">Status</dt>
              <dd className="capitalize">{paymentIntent.status}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs text-slate-400">Amount</dt>
              <dd>${(paymentIntent.amount_received || paymentIntent.amount || 0) / 100}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs text-slate-400">Currency</dt>
              <dd className="uppercase">{paymentIntent.currency || 'usd'}</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  )
}
import React from 'react'
import Link from 'next/link'

const page = () => {
    const skills = [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Prisma',
        'Stripe',
        'Node.js',
        'SQL',
    ]

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero / header */}
            <section
                className="relative bg-center bg-cover"
                style={{ backgroundImage: "url('/cover.jpg')" }}
                aria-label="Cover image header"
            >
                <div className="bg-black/45">
                    <div className="max-w-5xl mx-auto px-6 py-20 flex items-center gap-6">
                        <img
                            src="/developer.png"
                            alt="avatar"
                            className="w-28 h-28 rounded-full ring-4 ring-white object-cover shadow-lg"
                        />

                        <div className="text-white">
                            <h1 className="text-4xl sm:text-5xl font-extrabold">About Me — Sigma Web Dev Learner</h1>
                            <p className="mt-2 text-lg sm:text-xl text-white/90">Building fast, accessible, and maintainable apps with Next.js & Tailwind.</p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <Link href="/login">
                                    Contact
                                </Link>
                                <a
                                    className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-white text-sm"
                                    href="https://github.com/Hamzah-Amir"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold">Quick Facts</h2>
                    <p className="mt-3 text-sm text-slate-600">This page is intentionally simple and educational — useful as a learning artifact for my "sigma" web development practice.</p>

                    <ul className="mt-4 space-y-2 text-sm">
                        <li><strong>Focus:</strong> Performance, accessibility, simplicity</li>
                        <li><strong>Stack:</strong> Next.js (app router), Tailwind CSS, Prisma</li>
                        <li><strong>Pattern:</strong> Server components + small client interactivity</li>
                    </ul>
                </aside>

                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold">Bio</h3>
                    <p className="mt-3 text-slate-700 leading-relaxed">I&apos;m exploring end-to-end web development: from routes and server components to styling with Tailwind and integrating payments (Stripe). The goal is to write focused, well-structured code while learning production patterns — routing, auth, database models, and deployable builds.</p>

                    <h4 className="mt-6 font-medium">Skills & Technologies</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {skills.map((s) => (
                            <span key={s} className="text-sm bg-slate-100 text-slate-800 px-3 py-1 rounded-full shadow-sm">{s}</span>
                        ))}
                    </div>

                    <h4 className="mt-6 font-medium">How this page helps your learning</h4>
                    <ol className="mt-3 list-decimal list-inside text-slate-700 space-y-2">
                        <li>Shows a responsive layout using Tailwind utility classes.</li>
                        <li>Uses semantic HTML (main, section, aside) for accessibility and SEO.</li>
                        <li>Demonstrates a simple component structure you can expand (bio, skills, links).</li>
                    </ol>

           
                </div>
            </section>
        </main>
    )
}

export default page


export const metadata = {
  title: "About Get Me a Coffee"
}
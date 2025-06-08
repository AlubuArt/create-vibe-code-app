import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>e2e-validation-project - Built with create-vibe-app</title>
        <meta
          name="description"
          content="A Next.js project created with create-vibe-app, optimized for AI-driven development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <main>
          {/* Hero Section */}
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div className="pt-16 mx-auto max-w-7xl px-4 sm:pt-20 sm:px-6 lg:pt-24 lg:px-8 xl:pt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">Welcome to</span>{' '}
                      <span className="block text-primary-600 xl:inline">
                        e2e-validation-project
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      This Next.js project was created with create-vibe-app and
                      is optimized for AI-driven development. Check out the
                      project-plan.md file to see what needs to be built!
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors"
                        >
                          Get Started
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10 transition-colors"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="h-56 w-full bg-gradient-to-br from-primary-400 to-primary-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🚀</div>
                  <h2 className="text-2xl font-bold">Ready to Build</h2>
                  <p className="mt-2 text-primary-100">
                    Start your AI-driven development journey
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
                  Features
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Everything you need to start building
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  This template comes pre-configured with modern tools and best
                  practices.
                </p>
              </div>

              <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {[
                    {
                      title: 'Next.js 14',
                      description:
                        'Latest Next.js with App Router, TypeScript, and modern React patterns.',
                      icon: '⚡',
                    },
                    {
                      title: 'Tailwind CSS',
                      description:
                        'Utility-first CSS framework for rapid UI development.',
                      icon: '🎨',
                    },
                    {
                      title: 'AI-Optimized',
                      description:
                        'Project structure optimized for AI-driven development with Cursor.',
                      icon: '🤖',
                    },
                    {
                      title: 'Developer Tools',
                      description:
                        'ESLint, Prettier, and TypeScript configured for the best developer experience.',
                      icon: '🛠️',
                    },
                  ].map(feature => (
                    <div key={feature.title} className="relative">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white text-xl">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="mt-2 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <p className="text-base text-gray-400">
                Built with create-vibe-app
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 e2e-validation-project. Ready for AI-driven development.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;

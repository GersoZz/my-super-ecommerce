import { useState } from 'react'
import {
  ButtonEx1,
  ButtonEx2,
  ButtonEx3,
  ButtonsContainer,
  LinkButton,
  NavBarButtons,
  Title,
  Wrapper,
} from '../components/styles/Buttons.styles'

const CardButton = () => {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    setAdded((prev) => !prev)
  }

  return (
    <ButtonEx3
      onClick={handleClick}
      $active={added}
    >
      {added ? 'Added' : 'Add'}
    </ButtonEx3>
  )
}

function AboutPage() {
  return (
    <div>
      {/*    <!-- Card --> */}
      <div class="w-1/4 flex flex-col bg-card border border-card-line shadow-2xs rounded-xl">
        <img
          class=" h-auto rounded-t-xl"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80/"
          alt="Card Image"
        />
        <div class="p-4  ">
          <h3 class="font-semibold text-foreground">Card title</h3>
          <p class="mt-1 text-muted-foreground-1">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a
            class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Go somewhere
          </a>
        </div>
      </div>
      {/* <!-- End Card --> */}
      <div class="bg-white dark:bg-gray-900">
        {/* <!-- Navigation Bar --> */}
        <nav class="p-4 bg-gray-100 dark:bg-gray-800">
          <a
            href="https://abhirajk.vercel.app/"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Portfolio
          </a>
        </nav>

        {/* <!-- Table Container --> */}
        <div class="container mx-auto p-6">
          <div class="overflow-x-auto rounded-lg shadow">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {/* Table Header */}
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3"
                  >
                    <button class="flex items-center">
                      Name
                      <svg
                        class="w-3 h-3 ml-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </button>
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3"
                  >
                    Image
                  </th>
                </tr>
              </thead>

              {/*  <!-- Table Body --> */}
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td class="px-6 py-4">Abhiraj K</td>
                  <td class="px-6 py-4">Developer</td>
                  <td class="px-6 py-4 text-green-500">Active</td>
                  <td class="px-6 py-4">
                    <img
                      src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
                      alt="Abhiraj"
                      class="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">John Doe</td>
                  <td class="px-6 py-4">Designer</td>
                  <td class="px-6 py-4 text-green-500">Active</td>
                  <td class="px-6 py-4">
                    <img
                      src=" https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
                      alt="John"
                      class="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td class="px-6 py-4">Jane Smith</td>
                  <td class="px-6 py-4">Project Manager</td>
                  <td class="px-6 py-4 text-red-500">Inactive</td>
                  <td class="px-6 py-4">
                    <img
                      src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
                      alt="Jane"
                      class="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">Emily Davis</td>
                  <td class="px-6 py-4">QA Engineer</td>
                  <td class="px-6 py-4 text-green-500">Active</td>
                  <td class="px-6 py-4">
                    <img
                      src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
                      alt="Emily"
                      class="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td class="px-6 py-4">Michael Brown</td>
                  <td class="px-6 py-4">DevOps Engineer</td>
                  <td class="px-6 py-4 text-yellow-500">Pending</td>
                  <td class="px-6 py-4">
                    <img
                      src=" https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk5.webp"
                      alt="Michael"
                      class="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <!-- Pagination --> */}
            <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
              <button class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Previous</button>
              <span class="text-sm text-gray-700 dark:text-gray-400">Page 1 of 10</span>
              <button class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
        <section class="py-20 bg-gray-50 dark:bg-gray-800">
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16 text-center">
              <div class="transition-all duration-1000 ease-out">
                <h2 class="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">About Our Company</h2>
                <p class="mx-auto text-xl text-gray-600 dark:text-gray-300">
                  We're passionate about creating innovative solutions that help businesses thrive in the digital age.
                </p>
              </div>
            </div>
            <div class="items-center grid gap-16 mb-20 lg:grid-cols-2">
              <div class="space-y-8">
                <div class="transition-all duration-1000 ease-out delay-200">
                  <h3 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                    Building Tomorrow's Solutions Today
                  </h3>
                  <p class="mb-6 text-lg text-gray-600 leading-relaxed dark:text-gray-300">
                    Founded in 2020, we've been at the forefront of digital transformation, helping over 10,000
                    businesses worldwide achieve their goals through innovative technology solutions.
                  </p>
                  <p class="text-lg text-gray-600 leading-relaxed dark:text-gray-300">
                    Our team of expert developers, designers, and strategists work tirelessly to deliver cutting-edge
                    solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                  </p>
                </div>
                {/* <!-- This is the line that was changed --> */}
                <div class="transition-all duration-1000 ease-out delay-200">
                  <div class="space-y-4">
                    <div class="items-start space-x-4 rtl:space-x-reverse flex">
                      <div class="flex-shrink-0 items-center justify-center flex w-[33px] h-[32px] rounded-full bg-blue-600">
                        <svg
                          class="w-[16px] h-[16px] text-white"
                          fill="none"
                          stroke="currentColor"
                          viewbox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Expert Team</h4>
                        <p class="text-gray-600 dark:text-gray-300">
                          50+ skilled professionals with years of experience
                        </p>
                      </div>
                    </div>
                    <div class="items-start space-x-4 rtl:space-x-reverse flex">
                      <div class="flex-shrink-0 items-center justify-center flex w-[32px] h-[32px] rounded-full bg-blue-600">
                        <svg
                          class="w-[16px] h-[16px] text-white"
                          fill="none"
                          stroke="currentColor"
                          viewbox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Global Reach</h4>
                        <p class="text-gray-600 dark:text-gray-300">Serving clients across 25+ countries worldwide</p>
                      </div>
                    </div>
                    <div class="items-start space-x-4 rtl:space-x-reverse flex">
                      <div class="flex-shrink-0 items-center justify-center flex w-[32px] h-[32px] rounded-full bg-blue-600">
                        <svg
                          class="w-[16px] h-[16px] text-white"
                          fill="none"
                          stroke="currentColor"
                          viewbox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Innovation Focus</h4>
                        <p class="text-gray-600 dark:text-gray-300">
                          Always adopting the latest technologies and methodologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="transition-all duration-1000 ease-out delay-300">
                  <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Our team at work"
                      class="object-cover w-full h-[384px]"
                    />
                    <div class="absolute bottom-6 left-6 right-6">
                      <div class="backdrop-blur-sm p-6 rounded-xl bg-white shadow-lg dark:bg-gray-800">
                        <div class="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div class="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Years</div>
                          </div>
                          <div>
                            <div class="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Team</div>
                          </div>
                          <div>
                            <div class="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        class="rounded-base border border-default overflow-hidden shadow-xs"
      >
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              class="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden border border-s-0 border-e-0 border-t-0 border-b-default"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-4 md:p-5">
            <p class="mb-2 text-body">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
              buttons, dropdowns, modals, navbars, and more.
            </p>
            <p class="text-body">
              Check out this guide to learn how to{' '}
              <a
                href="/docs/getting-started/introduction/"
                class="text-fg-brand hover:underline"
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading hover:bg-neutral-secondary-medium gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              class="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden border border-s-0 border-e-0 border-t-0 border-b-default"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-4 md:p-5">
            <p class="mb-2 text-body">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the
              library has a design equivalent in our Figma file.
            </p>
            <p class="text-body">
              Check out the{' '}
              <a
                href="https://flowbite.com/figma/"
                class="text-fg-brand hover:underline"
              >
                Figma design system
              </a>{' '}
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>What are the differences between Flowbite and Tailwind UI?</span>
            <svg
              data-accordion-icon
              class="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-4 md:p-5 border border-t-default border-b-0 border-x-0">
            <p class="mb-2 text-body">
              The main difference is that the core components from Flowbite are open source under the MIT license,
              whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p class="mb-2 text-body">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p class="mb-2 text-body">Learn more about these technologies:</p>
            <ul class="ps-5 text-body list-disc">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-fg-brand hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-fg-brand hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a
                href="#"
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12"></div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a
                  href="#"
                  className="font-semibold text-indigo-600"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                  />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Data to enrich your online business
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
          </div>
        </div>
      </div>
      AboutPage
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Wrapper>
        <CardButton></CardButton>
        <NavBarButtons>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </NavBarButtons>
        <ButtonEx2>Click me</ButtonEx2>
        <ButtonsContainer>
          <h2>Buttons Container</h2>
        </ButtonsContainer>
        <LinkButton href="https://www.google.com">Google</LinkButton>
        <ButtonEx1>Click me</ButtonEx1>
        <Title>Hello World!</Title>
      </Wrapper>
    </div>
  )
}

export default AboutPage

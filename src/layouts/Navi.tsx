import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ThemeToggle from 'layouts/themeToggle'

import {
  HomeIcon,
  MenuAlt1Icon,
  ShoppingBagIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  XIcon
} from '@heroicons/react/outline'
import { SiteLogo, SiteLogoText } from 'icons'

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon, exact: true },
  { name: 'Market', href: 'https://market.andverse.org', icon: ShoppingBagIcon, exact: true },
  { name: 'Explorer', href: '/explorer', icon: CubeTransparentIcon, exact: false },
  { name: 'Community', href: '/community', icon: HomeIcon, exact: true },
  { name: 'Documentation', href: 'https://docs.andverse.org', icon: DocumentTextIcon, exact: false }
]

export default function Navi() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <>
      <nav id="site-nav">
        <div className="wrapper">
          <div className="mobile-menu">
            <button type="button" aria-controls="mobile-menu" aria-expanded="false">
              <MenuAlt1Icon onClick={() => setMobileSidebarOpen(true)} />
            </button>
          </div>

          <div className="brand">
            <Link href="/">
              <a>
                <SiteLogo className="h-10" />
                <SiteLogoText className="h-8 ml-2" />
              </a>
            </Link>
          </div>

          <div className="desktop-menu">
            <SiteNavMenu />
          </div>

          <ThemeToggle />
        </div>
      </nav>
      <Transition.Root show={mobileSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={mobileSidebarOpen}
          onClose={setMobileSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="overlay" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div id="mobile-sidebar">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-14 pt-2">
                  <button
                    className="ml-2 flex items-center justify-center bg-black bg-opacity-0 dark:bg-opacity-0 focus:outline-none"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <XIcon className="h-10 w-10 text-white" />
                  </button>
                </div>
              </Transition.Child>
              <head className="brand">
                <Link href="/">
                  <a onClick={() => setMobileSidebarOpen(false)}>
                    <SiteLogo className="w-12 h-12" />
                    <SiteLogoText className="w-auto h-7" />
                  </a>
                </Link>
              </head>
              <nav>
                <div className="px-2 space-y-2" onClick={() => setMobileSidebarOpen(false)}>
                  <SiteNavMenu />
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

const SiteNavMenu = props => {
  return (
    <>
      {navItems.map(item => (
        <Link key={item.name} href={item.href}>
          <a className="item" id={'nav-' + item.name}>
            <item.icon className="mr-3 sm:mr-1 h-6 w-6" aria-hidden="true" />
            {item.name}
          </a>
        </Link>
      ))}
    </>
  )
}

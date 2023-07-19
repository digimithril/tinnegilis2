'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

import Fire from '@/public/images/squashonfire.jpeg'
import Richmond from '@/public/images/richmond.jpeg'
import ElGouna from '@/public/images/ElGouna.jpeg'
import British from '@/public/images/british.jpeg'
import BlackBall from '@/public/images/blackball.jpeg'
import WorldChamps from '@/public/images/worldchamps.jpeg'


export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative mb-16">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Career Highlights</h1>
            <p className="text-xl text-gray-600">See the notable achievements and tournaments in Gilis' Career</p>
          </div>
          {/* Tabs items */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
            <div className="transition-all">
              <div className="relative flex flex-col text-center" data-aos="zoom-y-out" ref={tabs}>
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-x-16"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div className="relative inline-flex flex-col">
                    <Image unoptimized className="md:max-w-none mx-auto rounded" src={ElGouna} height={500} alt="Features bg" />

                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-x-16"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div className="relative inline-flex flex-col">
                    <Image unoptimized className="md:max-w-none mx-auto rounded" src={Richmond} height={500} alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-x-16"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div className="relative inline-flex flex-col">
                    <Image unoptimized className="md:max-w-none mx-auto rounded" src={WorldChamps} height={500} alt="Features bg" />
                  </div>
                </Transition>

                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-x-16"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div className="relative inline-flex flex-col">
                    <Image unoptimized className="md:max-w-none mx-auto rounded" src={British} height={500} alt="Features bg" />
                  </div>
                </Transition>

                {/* Item 5 */}
                <Transition
                  show={tab === 5}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-x-16"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div className="relative inline-flex flex-col">
                    <Image unoptimized className="md:max-w-none mx-auto rounded" src={BlackBall} height={500} alt="Features bg" />
                  </div>
                </Transition>

                {/* Item 6 */}
                <Transition
                  show={tab === 6}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-x-16"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-16"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div className="relative inline-flex flex-col">
                    <Image unoptimized className="md:max-w-none mx-auto rounded" src={Fire} height={500} alt="Features bg" />
                  </div>
                </Transition>
              </div>
            </div>
          </div>


          {/* Items */}
          <div className="max-w-sm mx-auto mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <a className={`relative flex flex-col items-center p-6 rounded shadow-xl
            transition duration-300 ease-in-out mb-3 
            ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg hover:bg-gray-200' :
                'bg-gray-300 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(1); }}>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">El Gouna International Open</h4>
              <p className="text-gray-900 font-medium text-center">Quarter-finals</p>
              <p className="text-gray-900 text-center">June 2023</p>
            </a>

            {/* 2nd item */}
            <a className={`relative flex flex-col items-center p-6 rounded shadow-xl
            transition duration-300 ease-in-out mb-3 
            ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg hover:bg-gray-200' :
                'bg-gray-300 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(2); }}>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Richmond Open</h4>
              <p className="text-gray-900 font-medium text-center">Winner</p>
              <p className="text-gray-900 text-center">May 2023</p>
            </a>

            {/* 3rd item */}
            <a className={`relative flex flex-col items-center p-6 rounded shadow-xl
            transition duration-300 ease-in-out mb-3 
            ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg hover:bg-gray-200' :
                'bg-gray-300 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(3); }}>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">World Championship</h4>
              <p className="text-gray-900 font-medium text-center">Last sixteen round</p>
              <p className="text-gray-900 text-center">May 2023</p>
            </a>

            {/* 4th item */}
            <a className={`relative flex flex-col items-center p-6 rounded shadow-xl
            transition duration-300 ease-in-out mb-3 
            ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg hover:bg-gray-200' :
                'bg-gray-300 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(4); }}>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">British Open</h4>
              <p className="text-gray-900 font-medium text-center">Last sixteen round</p>
              <p className="text-gray-900 text-center">April 2023</p>
            </a>

            {/* 5th item */}
            <a className={`relative flex flex-col items-center p-6 rounded shadow-xl
            transition duration-300 ease-in-out mb-3 
            ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg hover:bg-gray-200' :
                'bg-gray-300 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(5); }}>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Black Ball Open</h4>
              <p className="text-gray-900 font-medium text-center">Quarter-finals</p>
              <p className="text-gray-900 text-center">March 2023</p>
            </a>

            {/* 6th item */}
            <a className={`relative flex flex-col items-center p-6 rounded shadow-xl
            transition duration-300 ease-in-out mb-3 
            ${tab !== 6 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg hover:bg-gray-200' :
                'bg-gray-300 border-transparent'}`}
              href="#0"
              onClick={(e) => { e.preventDefault(); setTab(6); }}>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Squash on Fire Open</h4>
              <p className="text-gray-900 font-medium text-center">Winner</p>
              <p className="text-gray-900 text-center">February 2023</p>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
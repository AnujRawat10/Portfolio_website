"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
        {/* Top grid */}
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
          {/* Brand / left */}
          <div className='md:col-span-5'>
            <Link
              href='/'
              aria-label='The Wouff — Home'
              className='inline-block text-xl font-semibold'
            >
              Anuj Rawat
            </Link>

            <p className='mt-6 text-gray-300 leading-relaxed mb-6 max-w-md'>
              Your trusted partner in pet care. We provide comprehensive
              products delivered with love for your furry family members.
            </p>

            <div className='flex gap-4'>
              <a
                aria-label='Facebook'
                className='grid h-10 w-10 place-items-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50'
                href='#'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                aria-label='Instagram'
                className='grid h-10 w-10 place-items-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50'
                href='#'
              >
                <Instagram className='h-5 w-5' />
              </a>
              <a
                aria-label='Twitter'
                className='grid h-10 w-10 place-items-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50'
                href='#'
              >
                <Twitter className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* Get in touch (aligned right + compact) */}
          <div className='md:col-span-7 flex justify-end'>
            <div
              className='relative overflow-hidden rounded-[28px] p-6 sm:p-8 ring-1 ring-white/10 max-w-md'
              style={{ backgroundColor: "#e7b7c3" }} // soft pink
            >
              <div className='flex h-full min-h-[340px] sm:min-h-[380px] flex-col justify-between'>
                <div className='max-w-[26ch] pr-24 sm:pr-32'>
                  <h3 className='text-white/95 text-[34px] leading-none sm:text-[38px] font-semibold lowercase'>
                    get in <br /> touch
                  </h3>
                  <p className='mt-3 text-white/90 text-sm leading-relaxed'>
                    I’m always open to exciting opportunities, collaborations,
                    and meaningful conversations. Feel free to reach out—I’d
                    love to connect!
                  </p>
                </div>

                <div className='mt-5'>
                  <a
                    href='#contact'
                    className='inline-flex items-center rounded-full border border-white/70 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60'
                  >
                    Contact us
                  </a>
                </div>
              </div>

              {/* Cat image bottom-right */}
              <div className='pointer-events-none absolute right-4 bottom-4 sm:right-6 sm:bottom-6 h-28 w-28 sm:h-40 sm:w-40 rounded-[22px] overflow-hidden'>
                <Image
                  src='/footer/cat.png'
                  alt='cat waving'
                  fill
                  className='object-cover'
                  sizes='(min-width: 640px) 160px, 112px'
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider & bottom bar */}
        <div className='mt-10 border-t border-white/10 pt-6'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div className='flex flex-wrap justify-center gap-x-6 text-sm text-gray-300'>
              <Link
                href='/privacy'
                className='hover:text-white transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='hover:text-white transition-colors'
              >
                Terms of Service
              </Link>
              <Link href='/404' className='hover:text-white transition-colors'>
                404
              </Link>
              <Link
                href='/password'
                className='hover:text-white transition-colors'
              >
                Password
              </Link>
            </div>

            <div className='text-center md:text-right text-sm text-gray-300'>
              <p>© 2025 Company name. All rights reserved.</p>
              <p className='text-xs'>
                Created by <span className='text-white'>Anuj</span> • Powered by{" "}
                <span className='text-white'>DDC</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

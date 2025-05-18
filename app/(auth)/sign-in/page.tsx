'use client'
import Link from 'next/link'
import React from 'react'
import prismaClient from '@/lib/prisma'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
const page = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', {
        callbackUrl: '/',
        redirect: true,
      })
    } catch (error) {
      console.error('Sign in error:', error)
    }
  }
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32} />
          <h1>SnapCast</h1>
        </Link>
        <div className='description'>
          <section>
            <figure>
             {Array.from({length:5}).map((_,index)=>(
              <Image src="/assets/icons/star.svg" alt='star' width={20} height={20} key={index} />
             ))}
            </figure>
            <p>SnapCast makes screenrecording easy.From quick walkthroughts to full presentation,it's fast,smooth and shareable in seconds</p>
            <article>
              <Image src="/assets/images/jason.png" alt='jason' width={64} height={64} className='rounded-full' />
              <div>
                <h2>
                  Jason Bravos
                </h2>
                <p>Product Designer, Finulent Solutions</p>
              </div>
            </article>
          </section>
        </div>
        <p>© SnapCast {(new Date()).getFullYear()}</p>
      </aside>
      <aside className='google-sign-in'>
        <section>
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt='logo' width={40} height={40} />
        <h1>SnapCast</h1>
        </Link>
        <p>Create and share your very first <span>SnapCast</span> in no time!</p>
        <button onClick={handleGoogleSignIn}>
          <Image src="/assets/icons/google.svg" alt='google' width={22} height={22} />
        <span>Sign in with Google</span>
        </button>
        </section>
      </aside>
      <div className='overlay' />
    </main>
  )
}

export default page
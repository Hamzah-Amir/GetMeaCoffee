import React from 'react'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import PaymentPage from '@/components/PaymentPage'

export default async function Username({ params }) {

  // Check if username exists in the database
  const checkUser = async () => {
    let u = await prisma.user.findUnique({
      where: {
        username: params.username
      }
    })
    if (!u) {
      notFound()
    }
  }
  await checkUser()

  return (
    <>
      <PaymentPage params={params.username} />
    </>
  )

}
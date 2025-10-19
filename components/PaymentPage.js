"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getUser } from '@/actions/useractions'
import CheckoutForm from './Checkout'
import { useSession } from 'next-auth/react'


const PaymentPage = ({ params }) => {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [clientSecret, setClientSecret] = useState(null)
    const [paymentform, setpaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })
    const [currentUser, setcurrentUser] = useState(null)
    useEffect(() => {
        if (status === "loading") return;
        if (!session) {
            router.push('/login')
        }
        else {
            getData(session.user.id)
        }

    }, [session, status])

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (id) => {
        let u = await getUser(id)
        setcurrentUser(u)
        console.log("User Data", u)
    }

    if (status === "loading" || !currentUser) {
        return <div>Loading...</div>
    }

    const handlePay = async (amountOverride) => {
        let amountToSend = Number(amountOverride || paymentform.amount)
        const res = await fetch("/api/payment-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: paymentform.name || '', amount: amountToSend || "", message: paymentform.message || ''})
        })

        const data = await res.json()
        const clientSecret = data.clientSecret
        console.log("Data", data)
        setClientSecret(clientSecret)
    }

    return (
        <>
            <div className='relative w-full'>
                <img className='object-cover w-full h-48 md:h-[45vh]' src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-10 size-28 md:size-36 overflow-hidden border-2 rounded-full bg-white left-[40%] md:left-[45.5%]'>
                    <img
                        className='rounded-full object-cover size-28 md:size-36'
                        width={150}
                        height={150}
                        quality={50}
                        src={currentUser.profilepic}
                        alt="User Image"
                    />
                </div>
            </div>
            <div className="info flex flex-col gap-1.5 justify-center items-center my-12">
                <div className='text-2xl font-bold'>
                    @{params}
                </div>
                <div className='text-sm text-slate-300'>creating cool, fresh and relatable animated content on YouTube</div>
                <div className='text-sm text-slate-300'>18 posts</div>
                <div className="button mt-2">
                    <button className='cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-xl text-sm px-12 py-2.5 text-center me-2 mb-2'>
                        Become a Member
                    </button>
                </div>
                <div className="social flex gap-1">
                    <img className='invert-10' src="/insta.svg" alt="hh" />
                </div>
                <div className="payment gap-2 flex flex-col-reverse md:flex-row mt-10 max-w-[80vw]">
                    <div className="supporters w-full md:w-1/2 rounded-lg bg-slate-900 px-10 py-5">
                        {/* Show list of all supporters */}
                        <h2 className='Supporters my-5 text-2xl font-bold'>Supporters</h2>
                        <ul className='mx-2'>
                            <li className='my-4 flex gap-3 items-center'>
                                <img src="/avatar.gif" height={30} width={30} alt="user avatar" />
                                <span>
                                    Hamza donated <span className='font-bold'>$30</span> with a message &quot;I support you bro, lots of love&quot;
                                </span>
                            </li>
                            <li className='my-4 flex gap-3 items-center'>
                                <img src="/avatar.gif" height={30} width={30} alt="user avatar" />
                                <span>
                                    Hamza donated <span className='font-bold'>$30</span> with a message &quot;I support you bro, lots of love&quot;
                                </span>
                            </li>
                            <li className='my-4 flex gap-3 items-center'>
                                <img src="/avatar.gif" height={30} width={30} alt="user avatar" />
                                <span>
                                    Hamza donated <span className='font-bold'>$30</span> with a message &quot;I support you bro, lots of love&quot;
                                </span>
                            </li>
                            <li className='my-4 flex gap-3 items-center'>
                                <img src="/avatar.gif" height={30} width={30} alt="user avatar" />
                                <span>
                                    Hamza donated <span className='font-bold'>$30</span> with a message &quot;I support you bro, lots of love&quot;
                                </span>
                            </li>
                            <li className='my-4 flex gap-3 items-center'>
                                <img src="/avatar.gif" height={30} width={30} alt="user avatar" />
                                <span>
                                    Hamza donated <span className='font-bold'>$30</span> with a message &quot;I support you bro, lots of love&quot;
                                </span>
                            </li>

                        </ul>
                    </div>
                    <div className="makepayment w-full md:w-1/2 bg-slate-900 p-10">
                        <h2 className='text-2xl font-bold mb-8'>Make a Payment</h2>
                        <div className='flex items-center gap-4'>
                            {/* Input for Name and message */}
                            <input onChange={handleChange} value={paymentform.name} type="text" placeholder='Enter Name' name='name' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
                            <input onChange={handleChange} value={paymentform.message} type="text" placeholder='Enter Message' name='message' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
                        </div>
                        {/* Input for Amount */}
                        <div className='flex items-center justify-center gap-4 mt-5'>
                            <input onChange={handleChange} value={paymentform.amount} type="text" placeholder='Enter Amount' name='amount' className='px-4 w-full py-2 rounded-lg bg-slate-800 text-white' />
                            <button onClick={() => handlePay()} className='cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-xl text-sm px-6 py-2.5 text-center me-2 mb-2 disabled:opacity-50 disabled:bg-slate-900 disabled:from-blue-500 disabled:cursor-not-allowed' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount <     1}>
                                Pay
                            </button>
                        </div>
                        {/* Or choose from these Amount  */}
                        <div className='flex flex-row items-center mx-auto  gap-4 md:mx-[6.5vw] mt-5'>
                            <button onClick={() => handlePay(10000)} className='bg-slate-800 p-3 cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700'>pay $10</button>
                            <button onClick={() => handlePay(20)} className='bg-slate-800 p-3 cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700'>  pay $20 </button>
                            <button onClick={() => handlePay(30)} className='bg-slate-800 p-3 cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700'> pay $30 </button>
                            <button onClick={() => handlePay(40)} className='bg-slate-800 p-3 cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700'>pay $40</button>

                        </div>
                    </div>
                </div>
            </div>
            { clientSecret && <CheckoutForm clientSecret={clientSecret} />}
        </>
    )
}

export default PaymentPage
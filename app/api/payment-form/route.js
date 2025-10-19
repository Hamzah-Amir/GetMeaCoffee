import { stripe } from "@/lib/stripe"

export async function POST(req) {
    const body = await req.json()
    console.log("Name", body.name)
    console.log("Amount", body.amount)
    console.log("Message", body.message)

    // Create PaymentIntent as soon as the page loads
    const { client_secret: clientSecret } = await stripe.paymentIntents.create({
        amount: body.amount * 100,
        currency: 'eur',
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    })

    return new Response(JSON.stringify({clientSecret}), {status: 200})

}
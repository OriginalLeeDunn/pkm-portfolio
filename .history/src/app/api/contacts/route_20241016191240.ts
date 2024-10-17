import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  const msg = {
    to: 'your-email@example.com',
    from: 'your-sendgrid-verified-email@example.com',
    subject: `New message from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
  }

  try {
    await sgMail.send(msg)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
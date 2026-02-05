import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('Contact form error: RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const subjectLabels: Record<string, string> = {
      technical: 'Technical Issue',
      license: 'License / Activation',
      feature: 'Feature Request',
      refund: 'Refund Request',
      other: 'Other',
    }

    const { data, error } = await resend.emails.send({
      from: 'MacLayout Support <noreply@support.maclayout.com>',
      to: process.env.CONTACT_EMAIL || 'support@maclayout.com',
      replyTo: email,
      subject: `[MacLayout] ${subjectLabels[subject] || subject}: from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subjectLabels[subject] || subject}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

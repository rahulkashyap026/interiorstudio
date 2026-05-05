import { NextRequest, NextResponse } from 'next/server';

const whatsappUrl = (phoneId: string) =>
  `https://graph.facebook.com/v17.0/${phoneId}/messages`;

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json();

    const token = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const recipient = process.env.WHATSAPP_RECEIVER_NUMBER;

    if (!token || !phoneId || !recipient) {
      console.error('Missing WhatsApp Cloud API configuration');
      return NextResponse.json(
        {
          success: false,
          message:
            'Missing WhatsApp configuration. Set WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID, and WHATSAPP_RECEIVER_NUMBER.',
        },
        { status: 500 }
      );
    }

    const text = `New inquiry from Interior studio website:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;

    const response = await fetch(whatsappUrl(phoneId), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipient,
        type: 'text',
        text: {
          body: text,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('WhatsApp API error:', errorText);
      return NextResponse.json({ success: false, message: 'WhatsApp send failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('WhatsApp send error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}
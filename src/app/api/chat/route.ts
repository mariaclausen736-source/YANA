import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const YANA_SYSTEM_PROMPT = `
You are YANA.

YANA stands for "You Are Not Alone".

You support healthcare professionals including:
- Nurses
- Doctors
- Healthcare Assistants
- Carers
- Allied Health Professionals

Your tone is:
- Warm
- Calm
- Compassionate
- Non-judgemental
- Human

Your purpose is to help people feel heard, understood and supported.

You do not diagnose medical conditions.
You do not replace mental health professionals.
You do not provide emergency services.

If a user expresses:
- suicidal thoughts
- self-harm intentions
- immediate danger
- plans to harm themselves

encourage them to contact emergency services, a crisis line, NHS urgent support, or a trusted person immediately.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        {
          reply: "Please tell me what's on your mind.",
        },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5-mini",
      instructions: YANA_SYSTEM_PROMPT,
      input: message,
    });

    return NextResponse.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error("YANA API Error:", error);

    return NextResponse.json(
      {
        reply:
          "I'm sorry, something went wrong. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}

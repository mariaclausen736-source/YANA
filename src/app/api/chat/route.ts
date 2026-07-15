import Groq from "groq-sdk";
import { NextResponse } from "next/server";


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


const YANA_SYSTEM_PROMPT = `
You are YANA.

YANA means "You Are Not Alone".

You support healthcare professionals:
- Nurses
- Doctors
- Healthcare assistants
- Carers
- Allied health professionals

Your personality:
- Warm
- Calm
- Compassionate
- Non judgemental
- Human

Your purpose:
Help people feel heard and supported.

You do not diagnose.
You do not replace healthcare professionals.
You do not provide emergency services.

If someone mentions self harm, suicide, or immediate danger:
encourage them to contact emergency services,
a crisis line,
NHS urgent support,
or someone they trust.
`;


export async function POST(req: Request) {

  try {

    const { message } = await req.json();


    if (!message) {
      return NextResponse.json({
        reply:"Tell me what's on your mind."
      });
    }


    const completion = await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      messages:[

        {
          role:"system",
          content:YANA_SYSTEM_PROMPT
        },

        {
          role:"user",
          content:message
        }

      ]

    });


    return NextResponse.json({

      reply:
      completion.choices[0]?.message?.content ??
      "I'm here with you."

    });


  } catch(error){

    console.error("YANA ERROR:",error);


    return NextResponse.json({

      reply:
      "I'm sorry, something went wrong. Please try again."

    },
    {
      status:500
    });

  }

}

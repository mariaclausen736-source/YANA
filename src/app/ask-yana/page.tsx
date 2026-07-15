"use client";

import { useState } from "react";


type Message = {
  role: "user" | "assistant";
  content: string;
};


export default function AskYanaPage() {

  const [input,setInput] = useState("");

  const [messages,setMessages] = useState<Message[]>([]);

  const [saveChoice,setSaveChoice] = useState(false);


  async function sendMessage(e:React.FormEvent){

    e.preventDefault();

    if(!input.trim()) return;


    const userMessage = {
      role:"user" as const,
      content:input
    };


    setMessages(prev=>[
      ...prev,
      userMessage
    ]);


    setInput("");


    const res = await fetch("/api/chat",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        message:input,

        saveConversation:saveChoice

      })

    });


    const data = await res.json();


    setMessages(prev=>[

      ...prev,

      {

        role:"assistant",

        content:data.reply

      }

    ]);

  }


return (

<div className="max-w-3xl mx-auto px-8 py-24">


<h1 className="text-4xl font-semibold">
Talk to YANA
</h1>


<p className="mt-4 text-sm text-[var(--yana-text)]/60">

A private space to pause, reflect and talk.

You choose what you share.

</p>


<div className="mt-6 rounded-2xl border border-[var(--yana-border)] bg-[var(--yana-panel)] p-5">


<label className="flex gap-3 items-center text-sm">


<input

type="checkbox"

checked={saveChoice}

onChange={(e)=>setSaveChoice(e.target.checked)}

/>


Remember my conversations so YANA can understand my journey


</label>


<p className="mt-3 text-xs text-[var(--yana-text)]/50">

Your choice matters. 
If unchecked, conversations are not saved.

</p>


</div>



<div className="space-y-4 mt-10 mb-10">


{messages.map((m,i)=>(


<div

key={i}

className={

m.role==="user"

?

"bg-[var(--yana-panel)] p-4 rounded-xl"

:

"bg-white/5 p-4 rounded-xl"

}


>

{m.content}


</div>


))}


</div>




<form

onSubmit={sendMessage}

className="flex gap-3"

>


<input

value={input}

onChange={(e)=>setInput(e.target.value)}

placeholder="How are you feeling today?"

className="flex-1 px-5 py-4 rounded-xl bg-black/30 border border-[var(--yana-border)]"

/>


<button

className="px-6 rounded-xl bg-[var(--yana-accent)] text-black"

>

Send

</button>


</form>



<p className="mt-8 text-xs text-center text-[var(--yana-text)]/40">

YANA listens, but does not replace professional support.
If you are in immediate danger, contact emergency support.

</p>


</div>


)

}

export default function Home() {


return (

<div className="yana-dark min-h-screen">


{/* =========================
 HERO
========================= */}


<section className="

min-h-[90vh]

flex

items-center

relative

overflow-hidden

"

>


<div className="max-w-5xl mx-auto px-6">


<p className="role-pill mb-8 fade-up">

Healthcare support • Anonymous • Human

</p>



<h1 className="fade-up">


You are not alone.


</h1>



<p

className="

mt-8

max-w-2xl

text-xl

text-white/60

fade-up

"

>


A safe space for nurses, doctors,
and healthcare professionals to pause,
share, and be heard.


</p>




<div className="mt-12 flex gap-5 fade-up">


<a

href="/ask-yana"

className="yana-button"

>

Talk to YANA

</a>



<a

href="/community"

className="

px-8

py-4

rounded-full

border

border-white/20

text-white/80

hover:bg-white/5

transition

"

>

Join the community

</a>



</div>



</div>



{/* ambient glow */}


<div

className="

absolute

right-0

bottom-0

w-[500px]

h-[500px]

rounded-full

bg-[rgba(131,184,170,.12)]

blur-3xl

"

></div>



</section>






{/* =========================
 REALITY
========================= */}



<section className="max-w-6xl mx-auto px-6 py-32">


<div className="grid md:grid-cols-2 gap-16">



<div>


<h2>


The people who care
for everyone else
often carry it alone.


</h2>


</div>




<div className="text-white/60 text-lg">


Long shifts.

Emotional exhaustion.

Difficult conversations.

The pressure to stay strong.



<br/><br/>


YANA exists because healthcare workers
deserve a place where they don't always
have to be the strong one.


</div>



</div>


</section>







{/* =========================
 HOW YANA HELPS
========================= */}



<section className="max-w-6xl mx-auto px-6 py-20">


<div className="grid md:grid-cols-3 gap-6">



<div className="story-card">


<h3>

Talk

</h3>


<p className="text-white/60 mt-4">

A private space to reflect,
release pressure and be heard.

</p>


</div>





<div className="story-card">


<h3>

Connect

</h3>


<p className="text-white/60 mt-4">

Share experiences with people
who understand healthcare life.

</p>


</div>





<div className="story-card">


<h3>

Recover

</h3>


<p className="text-white/60 mt-4">

Small moments of support
that help you keep going.

</p>


</div>



</div>


</section>






{/* =========================
 COMMUNITY PREVIEW
========================= */}



<section className="max-w-6xl mx-auto px-6 py-32">


<div className="community-card">


<p className="role-pill">

Community

</p>



<h2 className="mt-8">


Someone understands
what you're feeling.


</h2>



<p className="mt-6 text-white/60 max-w-xl">


Read anonymous stories,
share your own experience,
and connect with healthcare workers
who have been there.


</p>




<a

href="/community"

className="inline-block mt-10 yana-button"

>

Explore community

</a>



</div>


</section>






{/* =========================
 FINAL CTA
========================= */}



<section className="text-center px-6 py-32">


<h2>


You don't have to carry it alone.


</h2>


<a

href="/ask-yana"

className="inline-flex mt-10 yana-button"

>

Talk to YANA

</a>



</section>




</div>


);


}

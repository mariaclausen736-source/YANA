export default function ExplorePage() {


return (

<div className="yana-dark min-h-screen">



{/* HERO */}

<section className="max-w-5xl mx-auto px-6 pt-28 pb-20">


<p className="role-pill mb-8">

Explore YANA

</p>



<h1>

Small moments
of support matter.

</h1>



<p className="mt-8 max-w-2xl text-xl text-white/60">

Find stories, reflections and resources
created for the people who spend their days
caring for others.

</p>



</section>






{/* CHECK IN */}



<section className="max-w-6xl mx-auto px-6 py-10">


<div className="community-card">


<p className="text-xs uppercase tracking-[0.25em] text-white/40">

Daily check-in

</p>



<h2 className="mt-6">

How are you arriving today?

</h2>



<div className="flex flex-wrap gap-3 mt-8">


{[

"Exhausted",

"Overwhelmed",

"Need support",

"Okay",

"Hopeful"

].map(item=>(


<button

key={item}

className="

px-5

py-3

rounded-full

bg-white/5

border

border-white/10

text-white/70

hover:bg-white/10

transition

"

>

{item}

</button>


))}



</div>


</div>


</section>







{/* STORIES */}



<section className="max-w-6xl mx-auto px-6 py-24">


<h2>

Stories from healthcare workers

</h2>



<p className="mt-4 text-white/60">

Sometimes hearing “me too”
is the support we need.

</p>




<div className="grid md:grid-cols-3 gap-6 mt-12">



<div className="story-card">


<p className="role-pill">

Nurse

</p>


<h3 className="mt-6">

"The hardest part was pretending
I was fine."

</h3>


<p className="mt-5 text-white/50">

Anonymous reflection

</p>


</div>






<div className="story-card">


<p className="role-pill">

Night Shift

</p>


<h3 className="mt-6">

"Everyone went home.
I was still carrying the day."

</h3>


<p className="mt-5 text-white/50">

Anonymous reflection

</p>


</div>






<div className="story-card">


<p className="role-pill">

Healthcare Assistant

</p>


<h3 className="mt-6">

"One kind moment changed my whole shift."

</h3>


<p className="mt-5 text-white/50">

Anonymous reflection

</p>


</div>



</div>


</section>






{/* RESOURCES */}



<section className="max-w-6xl mx-auto px-6 py-20">


<div className="grid md:grid-cols-3 gap-6">


<div className="story-card">


<h3>

After a difficult shift

</h3>


<p className="mt-4 text-white/60">

Simple ways to reset before
you carry the next day.

</p>


</div>





<div className="story-card">


<h3>

Protecting your energy

</h3>


<p className="mt-4 text-white/60">

Boundaries, rest and remembering
you matter too.

</p>


</div>





<div className="story-card">


<h3>

When it feels too much

</h3>


<p className="mt-4 text-white/60">

Find support and people
who understand.

</p>


</div>



</div>


</section>







{/* CTA */}



<section className="text-center px-6 py-32">


<h2>

Need someone right now?

</h2>



<a

href="/ask-yana"

className="yana-button inline-flex mt-8"

>

Talk to YANA

</a>



</section>



</div>

);


}

import "./globals.css";
import type { ReactNode } from "react";


export const metadata = {

  title: "YANA — You Are Not Alone",

  description:
    "A safe community for healthcare professionals to pause, share and be supported.",

};



export default function RootLayout({

children,

}: {

children: ReactNode;

}) {


return (

<html lang="en">


<body className="bg-[var(--night)] text-[var(--text)] antialiased">


{/* =========================
    HEADER
========================= */}


<header

className="

fixed

top-0

left-0

w-full

z-50

backdrop-blur-2xl

bg-[rgba(11,16,19,0.75)]

border-b

border-white/10

"

>



<div

className="

max-w-7xl

mx-auto

px-6

md:px-10

py-6

flex

items-center

justify-between

"


>


{/* LOGO */}


<a

href="/"

className="

font-semibold

tracking-[0.35em]

text-sm

text-[var(--yana-sage)]

"

>

YANA

</a>






{/* NAVIGATION */}



<nav

className="

hidden

md:flex

items-center

gap-10

text-sm

text-white/70

"


>



<a

href="/explore"

className="

hover:text-white

transition

duration-300

"

>

Explore

</a>




<a

href="/community"

className="

hover:text-white

transition

duration-300

"

>

Community

</a>




<a

href="/about"

className="

hover:text-white

transition

duration-300

"

>

About

</a>



</nav>






{/* PRIMARY ACTION */}



<a

href="/ask-yana"

className="yana-button"

>

Talk to YANA

</a>




</div>



</header>






{/* =========================
    CONTENT
========================= */}



<main

className="

pt-32

pb-32

"

>


<div

className="

max-w-7xl

mx-auto

px-6

md:px-10

"

>


{children}


</div>



</main>





</body>


</html>


);

}

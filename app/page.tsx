import Image from "next/image";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";
export default function Home() {
  const cardItems = [
    {
      title: 'Bring Your Own Framework',
      desc: " Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
    },
    {
      title: '  100% Static HTML, No JS',
      desc: "   Astro renders your entire page to static HTML, removing all JavaScript from your final build by default."

    },
    {
      title: 'On-Demand Components',
      desc: "   Need some JS? Astro can automatically hydrate interactive components when they become visible on the page."
    },
    {
      title: 'Broad Integration',
      desc: " Astro supports TypeScript, Scoped CSS, CSS  Modules, Sass, Tailwind, Markdown, MDX, and    any other npm packages.",
    },
    {
      title: 'SEO Enabled',
      desc: " Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    }, {
      title: 'Community',
      desc: "   Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
    },
  ]
  return (
    <main className="px-1 sm:px-8 md:px-14 lg:px-40">
      <NavBar />
      {/* Large Screens Layout (Above 1040px) */}
      <div className="hidden lg:flex lg:flex-row lg:gap-20 my-16">
        {/* Text and Buttons Section */}
        <div className="flex-1 my-20">
          <div className="text-6xl sm:text-5xl md:text-7xl font-bold Bricolage_Grotesque">
            Marketing website <br /> done with Astro
          </div>
          <div className="my-6 text-base sm:text-lg md:text-xl text-gray-500">
            Astroship is a starter template for startups, marketing websites &
            landing pages. Built with Astro.build and TailwindCSS. You can
            quickly create any website with this starter.
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="bg-black text-white rounded px-4 py-3 hover:bg-white hover:text-black hover:border border-black"
            >
              Download for Free
            </button>
            <button
              type="button"
              className="bg-white text-black rounded px-4 py-3 border border-black hover:bg-black hover:text-white"
            >
              GitHub Repo
            </button>
          </div>
        </div>

        {/* Image Section for Large Screens */}
        <div className="relative my-10">
          <Image
            src="/img.jpg"
            alt="Marketing Image"
            className="object-cover"
            layout="responsive"
            width={500}
            height={250}
          />
        </div>
      </div>

      {/* Tablet and Small Screens Layout (755px to 1040px) */}
      <div className="lg:hidden block mt-8">
        <div className="flex flex-col items-center">
          {/* Text and Buttons Section */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center Bricolage_Grotesque">
            Marketing website <br /> done with Astro
          </div>
          <div className="my-6 text-base sm:text-lg md:text-xl text-center text-gray-500">
            Astroship is a starter template for startups, marketing websites &
            landing pages. Built with Astro.build and TailwindCSS. You can
            quickly create any website with this starter.
          </div>
          <div className="flex flex-row sm:flex-row gap-2 justify-center">
            <button
              type="button"
              className="bg-black text-white rounded px-4 py-3"
            >
              Download for Free
            </button>
            <button
              type="button"
              className="bg-white text-black rounded px-4 py-3 border border-black"
            >
              GitHub Repo
            </button>
          </div>
          {/* Image Section for Tablet View (755px to 1040px) */}
          <div className="w-full max-w-md mx-auto mt-8">
            <Image
              src="/img.jpg"
              alt="Marketing Image"
              className="object-cover Marketing-Images"
              layout="responsive"
              width={500}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="text-5xl mx-5 font-bold Bricolage_Grotesque">
          Everything you need to start a website
        </div>
        <div className="my-4 mx-5 text-lg text-gray-500">
          Astro comes batteries included. It takes the best parts of
          state-of-the-art tools and adds its own innovations.
        </div>
      </div>

      <div className="my-5 mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {
          cardItems.map((item, index)=>(
            <Card key={index} title={item.title} desc={item.desc}/>
          ))
        }
      </div>

      <div className="text-center my-14">
        <div className="my-8">Works with your technologies</div>
        <div className="grid grid-cols-3 gap-1 sm:grid-cols-6 lg:flex lg:grid-cols-6 lg:gap-0">
          <img src="/r.jpeg" alt="" className="w-14 mx-auto" />
          <img src="/s.jpeg" alt="" className="w-16 mx-auto" />
          <img src="/a.jpeg" alt="" className="w-14 mx-auto" />
          <img src="/t.jpeg" alt="" className="w-14 mx-auto" />
          <img src="/vue.jpeg" alt="" className="w-14 mx-auto" />
          <img src="/v.jpeg" alt="" className="w-14 mx-auto" />
        </div>
      </div>

      <div>
        <div className="bg-black text-center p-10 sm:p-16 md:p-18 rounded-xl">
          <div className="text-white text-2xl sm:text-3xl md:text-6xl my-5 md:my-7 Bricolage_Grotesque">
            Build faster websites.
          </div>
          <div className="text-base sm:text-lg md:text-xl my-4 md:my-5 text-gray-300">
            Pull content from anywhere and serve it fast with Astro's next-gen island architecture.
          </div>
          <div>
            <button type="button" className="bg-white rounded px-8 py-3 sm:px-10 sm:py-4 md:px-8 md:py-4 text-center text-base sm:text-lg md:text-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <div className="text-gray-5 my-1000">Copyright © 2024 Astroship. All rights reserved.</div>
        <div className="text-gray-500">Made by Web3Templates</div>
      </div>
    </main>
  );
}

import Link from "next/link"
export default function HomePage() {
  return (
    <div>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Exploring ShadCN UI and Radix UI: Accessible UIs with Ease
          </h1>
        </header>

        <div className="mb-12">
          <img 
            src="/images/shadcn1.png" 
            alt="ShadCN UI and Radix UI illustration" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              ShadCN UI is a highly effective and versatile component library built on Tailwind CSS, tailored specifically for applications developed in React and Next.js. Designed to streamline the development process, ShadCN UI provides a suite of pre-built, reusable components such as buttons, cards, dropdowns, and more that empower developers to build visually impressive and consistent user interfaces with minimal effort.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">How To Install ShadCN UI</h2>
            <p className="text-lg mb-4">To install ShadCN UI, use the following commands:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Run This Command On CMD For Initiation</h3>
                <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code className="text-green-400">npx shadcn@latest init</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. Answer These Questions</h3>
                <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code className="text-green-400">
                    Which style would you like to use? = New York<br/>
                    Which color would you like to use as base color? = Zinc<br/>
                    Do you want to use CSS variables for colors? = no / yes
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. To Add Components On Your Project</h3>
                <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code className="text-green-400">npx shadcn@latest add button</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4. To Implement It By Importing BUTTON</h3>
                <img 
                  src="/images/shad4.PNG" 
                  alt="Button implementation code" 
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Unique Features Of ShadCN UI</h2>
            <p className="text-lg leading-relaxed">
              ShadCN UI is a meticulously crafted component library built on Tailwind CSS, specifically optimized for React and Next.js applications. Its primary goal is to enable developers to build visually engaging, responsive, and intuitive user interfaces with minimal effort and time investment. By offering a collection of pre-designed, reusable components, ShadCN UI provides developers with the flexibility to create applications that are both highly functional and aesthetically pleasing. ShadCN is based on Radix UI.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">What Is Radix UI?</h2>
            <p className="text-lg leading-relaxed">
              Radix UI is a powerful, open-source library designed to facilitate the creation of sophisticated and highly accessible user interfaces in React. By providing a suite of low-level, customizable components, Radix UI enables developers to construct intricate UIs without sacrificing performance or accessibility.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Why Choose ShadCN UI For Your Next Project?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Enhanced Productivity and Fast Development</li>
              <li>Responsive And Accessible Design</li>
              <li>Consistent Design Across Different Pages</li>
              <li>Easy To Use</li>
              <li>Pre-Built Complex Components</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Pros And Cons Of Each Library</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-purple-400">ShadCN UI:</h3>
                <p className="text-lg"><span className="font-bold">PROS:</span> Quick setup, Tailwind integration, pre-designed components.</p>
                <p className="text-lg"><span className="font-bold">CONS:</span> Less customizable than headless libraries like Radix.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-400">Radix UI:</h3>
                <p className="text-lg"><span className="font-bold">PROS:</span> Accessibility, flexibility, and customization.</p>
                <p className="text-lg"><span className="font-bold">CONS:</span> Requires more styling effort.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Further Learning</h2>
            <p className="text-xl font-semibold mb-2">Read the official ShadCN UI and Radix UI documentation:</p>
            <div className="space-y-2 grid">
              <Link href="https://ui.shadcn.com/docs" className="text-green-400 hover:text-green-300 transition-colors">
                ShadCN UI Documentation
              </Link>
              <Link href="https://www.radix-ui.com/themes/docs/overview/getting-started" className="text-green-400 hover:text-green-300 transition-colors">
                Radix UI Documentation
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Utilizing ShadCN UI and Radix UI enables developers to accelerate their workflow, maintain high-quality standards, and achieve visually cohesive and functional interfaces with ease and efficiency. Both libraries bring unique advantages to the table, making them invaluable assets in the toolkit for building responsive and user-friendly applications in React and Next.js.
            </p>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

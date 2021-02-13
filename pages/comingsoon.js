import Head from 'next/head'
import "tailwindcss/tailwind.css"
import Link from 'next/link'
export default function ComingSoon() {
  return (
    <div className="font-inter">
      <Head>
        <title>Intience</title>
        <link rel="icon" href="/intience logo.png" />
      </Head>

      <main>
      {/* Introduction Page */}
       <div>
        <div className="flex flex-row w-full flex-wrap">
        <div className="w-1/2">
           <Link href="/"><a><img src="/dd.jpg" alt="logo" className="w-40 h-30"/></a></Link>
        </div>
          
          <div className="w-1/2">
              <nav className="font-semibold text-gray-700  hidden lg:visible sm:flex invisible flex-row">
                  <p className="m-5">Work</p>
                  <p className="m-5">Products</p>
                  <p className="m-5">Pricing</p>
                  <p className="m-5 ">Contact Us</p>
              </nav>
              
          </div>
        </div>
         {/* coming soon */}
        <div  className="w-full h-screen flex flex-col justify-center">
             <div><h1 className="text-5xl h-1/2 text-gray-700 font-bold mb-10 text-center">Coming Soon.....</h1></div>
            <div className="w-full h-1/2 justify-center">
                 <div><h1 className="text-3xl text-gray-700 font-bold text-center">Coming Soon...</h1></div>
            </div>
        </div>
        </div>
      </main>

      <footer className="w-full h-screen lg:p-10">
      <div className="w-full flex flex-col lg:flex-row flex-wrap">
        <div className="lg:p-10 mt-5 w-full lg:w-1/2">
          <img src="/dd.jpg" alt="logo" className="w-40 h-30"/>
        </div>
        <div className="p-5 lg:p-10 flex flex-row flex-wrap w-full lg:w-1/2">
            <div className="w-1/2 p-5">
            <h3 className="text-1xl font-bold">Links</h3>
            <nav className="text-gray-500">
                <p>About Us</p>
                  <p>Products</p>
                  <p>What We Do</p>
            </nav>
        </div>
        <div className=" w-1/2 p-5">
            <h3 className="text-1xl font-bold">Social</h3>
            <nav className="text-gray-500">
                <p>twitter</p>
                  <p>instagram</p>
                  <p>mobile</p>
            </nav>
        </div>
        <div className="w-1/2 p-5">
            <h3 className="text-1xl font-bold">Company</h3>
            <nav className="text-gray-500">
                <p>About</p>
                  <p>Blog</p>
                  <p>Careers</p>
            </nav>
        </div>
        <div className="w-1/2 p-5">
            <h3 className="text-1xl font-bold">Legal</h3>
            <nav className="text-gray-500">
                <p>Privacy</p>
                  <p>Cookie Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Security</p>
            </nav>
        </div>
        <div className="w-1/2 p-5">
            <h3 className="text-1xl font-bold">Get In Touch</h3>
            <nav className="text-gray-500">
                <p>Warri, Nigeria</p>
                  <p>Support@intience.com</p>
                  <p>07041878794</p>
            </nav>
        </div>
        </div>
        
        </div>
        <div className="m-10 border-t-4 border-gray-200 pt-10">
            <p className="text-1xl font-bold">&copy; 2021 intience labs</p>
        </div>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import "tailwindcss/tailwind.css"

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Intience</title>
        <link rel="icon" href="/dd.jpg" />
      </Head>

      <main>
      {/* Introduction Page */}
       <div>
        <div className="flex flex-row w-full">
        <div className="w-1/2">
            <img src="/dd.jpg" alt="logo" className="w-40 h-30"/>
        </div>
          
          <div>
              <nav className="text-blue-500 font-semibold flex flex-row w-1/2">
                  <p className="m-5 w-50">Work</p>
                  <p className="m-5 w-50">Products</p>
                  <p className="m-5 w-50">Pricing</p>
                  <p className="m-5 w-50">Contact Us</p>
              </nav>
              
          </div>
        </div>

        <div className="flex w-max flex-row h-screen">
            <div className="flex-1 m-5 p-10">
                <h1 className=" mb-5 mt-20 text-5xl text-blue-500 font-bold">Build Impactful and scaleable products </h1>
                <p className="mb-5 text-1xl">Intience is a user centric digital agency that helps individuals, businesses and governments build impactful digital products</p>
                <div>
                    <button className="ml-0 m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Talk to Us</button>
                    <button className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About Us</button>
                </div>
            </div>
            <div className="flex-1">
                <p>Insert Image here</p>
            </div>
        </div>
        </div>
        {/* About Us */}
        <div className="h-screen w-full">
            <div className="w-full flex justify-center flex-column">
                <h1 className="text-5xl text-blue-500 font-bold text-center">What we do</h1>
            </div>
            <div className="w-full flex flex-row flex-wrap p-20 justify-center">
                <div className="m-5 p-5 bg-blue flex flex-col content-center bg-blue-100 h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
               <div className="m-5 p-5 bg-blue flex flex-col content-center bg-blue-100 h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center bg-blue-100 h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center bg-blue-100 h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
            </div>
        </div>

        {/* Our creative process */}
        <div className="h-screen w-full">
            <div><h1>Our Creative Process</h1></div>
            <div>
                <div>
                    <h3>NodeJS</h3>
                </div>
            </div>
        </div>

        {/* Product ShowCase */}
        <div  className="h-screen w-full">
            <div>
                <h1>Product Showcase</h1>
            </div>
            <div>
                <div>
                    <h3>Sonic.io</h3>
                    <p></p>
                </div>
            </div>
        </div>
      </main>

      <footer  className="h-screen w-full" >
      <div className="w-full flex flex-row">
        <div>
          <img src="/dd.jpg" alt="logo" className="w-30 h-20"/>
        </div>
        <div>
            <h3>Links</h3>
            <nav>
                <p>Services</p>
                  <p>Products</p>
                  <p>Contact Us</p>
            </nav>
        </div>
        <div>
            <h3>GEt In touch</h3>
            <nav>
                <p>twitter</p>
                  <p>instagram</p>
                  <p>mobile</p>
            </nav>
        </div>
        <div>
            <h3>Company</h3>
            <nav>
                <p>About</p>
                  <p>Blog</p>
                  <p>Careers</p>
            </nav>
        </div>
        </div>
        <div>
            <p>Copywrite 2021 intience labs</p>
        </div>
      </footer>
    </div>
  )
}

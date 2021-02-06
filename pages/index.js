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
              <nav className="font-semibold flex flex-row w-1/2">
                  <p className="m-5 w-94">Work</p>
                  <p className="m-5 w-94">Products</p>
                  <p className="m-5 w-94">Pricing</p>
                  <p className="m-5 w-94">Contact Us</p>
              </nav>
              
          </div>
        </div>

        <div className="flex w-full flex-row h-screen">
            <div className="flex-1 m-5 p-10">
                <h1 className="ml-20 mb-5 mt-20 text-5xl font-bold">Build Impactful and scaleable products </h1>
                <p className="ml-20 mb-5 text-1xl">Intience is a user centric digital agency that helps individuals, businesses and governments build impactful digital products</p>
                <div className="m-20 mt-10">
                    <button className="ml-0 m-1 bg-blue-800 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded">Talk to Us</button>
                    <button className="m-1 bg-blue-800 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded">About Us</button>
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
                <h1 className="text-5xl text-black font-bold text-center">What we do</h1>
            </div>
            <div className="w-full flex flex-row flex-wrap p-20 justify-center">
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
               <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
               <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
            </div>
        </div>

        {/* Our creative process */}
        <div className="h-screen w-full">
            <div><h1 className="text-5xl text-black font-bold text-center">Our Creative Process</h1></div>
            <div className="flex flex-row flex-wrap p-20 justify-center" >
                <div className="m-5 p-5 bg-gray-300 flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-black font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-blue-800 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                
            </div>
        </div>

        {/* Product ShowCase */}
        <div  className="h-screen w-full">
            <div>
                <h1>Product Showcase</h1>
            </div>
            <div className="w-full ">
                <div className="w-full bg-blue-800 flex flex-row">
                    <div className="p-20">
                        <h3 className="mb-10 text-4xl text-white font-bold">Sonic.io</h3>
                         <p className="mb-10 text-1xl text-white"> Fast and easy invoicing for entrepreneu4rs and freelanceras in nigeris</p>
                         <button>Explore</button>
                    </div>
                    <div>
                        <p>Insert image here</p>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <footer  className="w-full" >
      <div className="w-full flex flex-row">
        <div className="w-96 m-10 mt-5">
          <img src="/dd.jpg" alt="logo" className="w-52 h-52"/>
        </div>
        <div className="w-52 m-5">
            <h3 className="text-1xl font-bold">Links</h3>
            <nav>
                <p>Services</p>
                  <p>Products</p>
                  <p>Contact Us</p>
            </nav>
        </div>
        <div className="w-52 m-5">
            <h3 className="text-1xl font-bold">Get In touch</h3>
            <nav>
                <p>twitter</p>
                  <p>instagram</p>
                  <p>mobile</p>
            </nav>
        </div>
        <div className="w-52 m-5">
            <h3 className="text-1xl font-bold">Company</h3>
            <nav>
                <p>About</p>
                  <p>Blog</p>
                  <p>Careers</p>
            </nav>
        </div>
        </div>
        <div className="m-10 border-t-4 border-gray-200 pt-10">
            <p className="text-1xl font-bold">Copywrite 2021 intience labs</p>
        </div>
      </footer>
    </div>
  )
}

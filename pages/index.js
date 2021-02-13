import Head from 'next/head'
import "tailwindcss/tailwind.css"

export default function Home() {
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
            <img src="/dd.jpg" alt="logo" className="w-40 h-30"/>
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

        <div className="h-screen flex w-full flex-wrap flex-col sm:flex-row">
            <div className=" flex-1 m-1 sm:m-5 p-2 sm:m-10 mb-20 sm:mb-0 pl-5 lg:pl-10">
                <h1 className="ml-2 sm:ml-20 mb-5 text-5xl mt-10 lg:mt-20 text-gray-700 font-bold">Build Impactful and scaleable products </h1>
                <p className="ml-2 sm:ml-20 mb-5 text-lg w-96">Intience is a user centric digital agency that helps individuals, businesses and governments build impactful digital products</p>
                <div className="ml-2 sm:m-20 mt-5">
                    <button className="ml-0 m-1 bg-blue-800 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded shadow-xl">Talk to Us</button>
                </div>
            </div>
            <div className="flex-1 mt-20 sm:mt-0" >
                <p>Insert Image here</p>
            </div>
        </div>
        </div>
        {/* About Us */}
        <div className="lg:h-screen w-full">
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
        <div className="m-2 lg:h-screen w-full">
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
        <div  className=" w-full">
            <div>
                <h1>Product Showcase</h1>
            </div>
            <div className="w-full ">
                <div className="w-full bg-blue-800 flex flex-wrap flex-row">
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

      <footer className="w-full h-screen lg:p-10">
      <div className="w-full flex flex-col lg:flex-row flex-wrap">
        <div className="lg:p-10 mt-5 w-full lg:w-1/2">
          <img src="/dd.jpg" alt="logo" className="w-40 h-30"/>
        </div>
        <div className="p-5 lg:p-10 flex flex-row flex-wrap w-full lg:w-1/2">
            <div className="w-1/2 p-5">
            <h3 className="text-1xl font-bold">Links</h3>
            <nav className="text-gray-500">
                <p>Services</p>
                  <p>Products</p>
                  <p>Contact Us</p>
            </nav>
        </div>
        <div className=" w-1/2 p-5">
            <h3 className="text-1xl font-bold">Get In touch</h3>
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
            <h3 className="text-1xl font-bold">Company</h3>
            <nav className="text-gray-500">
                <p>About</p>
                  <p>Blog</p>
                  <p>Careers</p>
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
        </div>
        
        </div>
        <div className="m-10 border-t-4 border-gray-200 pt-10">
            <p className="text-1xl font-bold">Copywrite 2021 intience labs</p>
        </div>
      </footer>
    </div>
  )
}

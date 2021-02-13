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

        <div className="h-screen flex w-full flex-col lg:flex-row">
            <div className=" flex-1 m-1 sm:m-5 p-2 sm:m-10 mb-20 sm:mb-0 pl-5 lg:pl-10">
                <h1 className="ml-2 sm:ml-20 mb-5 text-5xl mt-10 lg:mt-20 text-gray-700 font-bold">Build Impactful and scaleable products </h1>
                <p className="ml-2 sm:ml-20 mb-5 text-lg w-96">Intience is a user centric digital agency that helps individuals, businesses and governments build impactful digital products</p>
                <div className="ml-2 sm:m-20 mt-5">
                    <button className="ml-0 m-1 bg-blue-800 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded shadow-xl">Talk to Us</button>
                </div>
            </div>
            <div className="flex-1 hidden invisible lg:flex lg:visible mt-20 mb-40 mr-10 p-5" >
                <img src="/home image.jpg" alt="logo" className="flex-grow"/>
            </div>
        </div>
        </div>
        {/* About Us */}
        <div className="lg:h-screen w-full">
            <div className="w-full flex justify-center flex-column">
                <h1 className="text-5xl text-gray-700 font-bold text-center">What we do</h1>
            </div>
            <div className="w-full flex flex-row flex-wrap p-20 justify-center">
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Web Development</h3>
                    <p>we build interactive and scaleable web based applications for our customers </p>
                </div>
               <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Product Development</h3>
                    <p>We commit the best resources and thoughfulness into building products that exceeds customers expectations</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Mobile Development</h3>
                    <p>We utilize cutting edge technology to build world class android and ios apps</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Ui/Ux Design</h3>
                    <p>Human centred design is our watchword when designing and curating excellent design experiences</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Desktop Development</h3>
                    <p>Our development team is experienced in building high performant applications for windows and mac operating systems</p>
                </div>
               <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Business Consultancy</h3>
                    <p>We utilize the power of data to help our clients make better decisions to grow and expand their businesses</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Hardware Development</h3>
                    <p>Our team is able to build out quantitative and qualitative hardware solutins as required by customers</p>
                </div>
                <div className="m-5 p-5 bg-blue flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-gray-700 font-semibold">Data analytics</h3>
                    <p>We deliver the best experiences when it comes to data analytics in helping clients understand their users and businesses better </p>
                </div>
            </div>
        </div>

        {/* Our creative process */}
        <div className="m-2 lg:h-screen w-full">
            <div><h1 className="text-5xl text-gray-700 font-bold text-center">Our Creative Process</h1></div>
            <div className="flex flex-row flex-wrap p-20 justify-center" >
                <div className="justify-center m-5 p-5 bg-blue-500 flex flex-col rounded-2xl content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-white font-semibold">Empathize</h3>
                    <p className="text-white">We employ a human centred approach to problem solving therefore we try to gain understading of the problem from a customer POV</p>
                </div>
                <div className="justify-center m-5 p-5 bg-green-500 rounded-2xl  flex flex-col content-center h-64 w-64 text-center">
                    <h3 className="text-white mb-5 text-2xl  font-semibold">Prototype</h3>
                    <p className="text-white">After coming up with multiple solutions we test our ideas and products against the real world to get accurate feedback</p>
                </div>
                <div className="justify-center m-5 p-5 bg-red-500 flex flex-col rounded-2xl content-center h-64 w-64 text-center">
                    <h3 className="mb-5 text-2xl text-white text-2xl font-semibold">Launch</h3>
                    <p className="text-white">We Launch the project into the wild and let our result speak for us</p>
                </div>
                
            </div>
        </div>

        {/* Product ShowCase */}
        <div  className=" w-full h-screen flex flex-col">
             <div><h1 className="text-5xl h-1/2 text-gray-700 font-bold mb-10 text-center">Product Showcase</h1></div>
            <div className="w-full h-1/2 justify-center">
                 <div><h1 className="text-3xl text-gray-700 font-bold text-center">Coming Soon...</h1></div>
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

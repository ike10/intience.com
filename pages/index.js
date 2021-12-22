import Head from 'next/head'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-inter overflow-x-hidden w-screen"
    style={{
        fontFamily:'DM Sans, Circular, Open Sans',
        backgroundColor:'#141414'
    }}
    >
      <Head>
        <title>Intience</title>
    <meta name="google-site-verification" content="_UHbz8lykoq1BPL0sWqMueDMP2h9VBBILtGjCt4q94g" />
        <link rel="icon" href="/intience logo.png" />
                       <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet' />
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css?family=Circular' rel='stylesheet' />
                <link href="https://fonts.cdnfonts.com/css/circular-std" rel="stylesheet" />
                <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet' />
      </Head>

      <main>
      {/* Introduction Page */}
       <div className="text-white">
        <div className="flex flex-row w-full">
        <div className="w-1/2">
            <Link href="/"><a><img src="/dd.jpg" alt="logo" className="w-40 h-30"/></a></Link>
        </div>
          
          <div className="w-1/2 pt-5">
              <nav className="font-semibold text-white  hidden lg:visible sm:flex invisible flex-row">
                  <p className="m-5">Works</p>
                  <p className="m-5">Products</p>
                  <p className="m-5">Pricing</p>
                  <p className="m-5 ">Contact Us</p>
              </nav>
              
          </div>
        </div>

        <div className="h-full flex w-screen flex-col lg:flex-col">
            <div className=" flex flex-col m-1 sm:m-5 p-2 sm:m-10 mb-20 sm:mb-0 pl-5 lg:pl-10">
                <h1 className="ml-2 lg:ml-20 mb-2 text-6xl mt-10 lg:mt-20 text-white font-bold transition ease-in duration-500">Impossible exists until it doesn't</h1>
                <p className="ml-2 lg:ml-20 mb-5 text-lg  w-2/3 lg:w-1/2">We are a future focused company that builds delightful products that solve problems at scale</p>
                {/* <div className="ml-2 lg:ml-20 mt-5">
                    <a href="mailto: support@intience.com"> <button className="ml-0 m-1 bg-blue-800 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded shadow-xl">Talk to Us</button></a>
                </div> */}
               
            </div>
           
        </div>
        </div>
          <div className="w-full h-screen mt-20 mb-0"
          style={{
            backgroundColor:'#131313',
        }}
          >
                    <img src="/innovation.jpg" alt="logo" className=" w-full h-full"/>
                </div>
        {/* about us */}
        {/* About Us */}
        <div className="mb-20 pt-20  w-full flex flex-col sm:flex-row justify-center items-center"
        style={{
            backgroundColor:'#131313',
        }}
        >
            <div className="w-1/2 flex justify-center flex-column"
           
            >
                <h1 className="text-xl sm:text-5xl text-white font-bold text-center">About Us</h1>
            </div>
            <div className="w-full flex flex-row flex-wrap p-5 pt-5 justify-center">
               <p className="text-white text-center text-2xl w-full lg:w-1/2 m-2">We are a future focused institution that builds technology of the <b> today</b> that empowers the <b> tomorrow</b>.  </p>
            </div>
        </div>
        {/* what we do */}
        <div className="h-full w-full flex flex-col mt-20 px-5 sm:px-20" 
        style={{
            backgroundColor:'#131313',
        }}
        >
            <div className="w-full flex flex-column pl-5 sm:pl-10">
                <h1 className="text-5xl text-white font-bold"><u>What we do</u></h1>
               
            </div>
            <div className="w-full flex flex-col p-5 sm:p-20 justify-center">
                <div className="m-2 sm:m-5 -2 sm:p-5 text-white flex flex-col sm:flex-row content-center h-full sm:h-64 w-full">
                    <h3 className="mb-5 w-full sm:w-1/2 text-3xl text-white semibold">Web Development</h3>
                    <div className="flex-col w-full sm:w-1/2 flex">
                     <p className="text-lg sm:text-2xl">we build interactive and scaleable web based applications for our customers </p> 
                     <p className="text-sm sm:text-lg mt-2">we build interactive and scaleable web based applications for our customers </p> 
                    </div>       
                </div>
                 <div className="m-2 sm:m-5 p-2 sm:p-5 text-white flex flex-col sm:flex-row content-center h-full sm:h-64 w-full">
                        <h3 className="mb-5 w-full sm:w-1/2 text-2xl text-white font-semibold">Product Development</h3>
                        <div className="flex-col w-full sm:w-1/2 flex">
                        <p className="text-2xl">We commit the best resources and thoughfulness into building products that exceeds customers expectations</p> 
                        <p className="text-lg mt-2">We commit the best resources and thoughfulness into building products that exceeds customers expectations</p> 
                        </div>       
                    </div>
                    <div className="m-2 sm:m-5 p-2 sm:p-5 text-white flex flex-col sm:flex-row content-center h-full sm:h-64 w-full">
                        <h3 className="mb-5 w-full sm:w-1/2 text-2xl text-white font-semibold">Mobile Development</h3>
                        <div className="flex-col w-full sm:w-1/2 flex flex-col">
                        <p className="text-2xl">We utilize cutting edge technology to build world class android and ios apps</p> 
                        <p className="text-lg mt-2">We utilize cutting edge technology to build world class android and ios apps</p> 
                        </div>       
                    </div>
                    <div className="m-2 sm:m-5 p-2 sm:p-5 text-white flex flex-col sm:flex-row content-center h-full sm:h-64 w-full">
                        <h3 className="mb-5 w-full  sm:w-1/2 text-2xl text-white font-semibold">Mobile Development</h3>
                        <div className="flex-col flex w-full sm:w-1/2">
                        <p className="text-2xl">We utilize cutting edge technology to build world class android and ios apps</p> 
                        <p className="text-lg mt-2">We utilize cutting edge technology to build world class android and ios apps</p> 
                        </div>       
                    </div>

            </div>
        </div>

       

        {/* Product ShowCase */}
         <div className="h-full w-full flex flex-col mt-20 pt-20 px-2 sm:px-20" 
        style={{
            backgroundColor:'#ffffff',
        }}
        >
            <div className="w-full flex flex-column pl-2 sm:pl-10">
                <h1 className="text-5xl text-black font-bold"><u>Some of our works</u></h1>
               
            </div>
            <div className="w-full flex flex-col p-5 lg:p-20 justify-center">
                <div className="m-2 sm:m-5 p-2 sm:p-5 text-gray-700 flex flex-col sm:flex-row content-center h-full w-full">
                <div className="w-full sm:w-1/2 flex-col justify-center items-center pt-10">
                    <h3 className="mb-5 w-2/3 text-3xl text-black font-semibold">sonic.io</h3>
                </div>
                    <div className="flex-col flex w-full sm:w-1/2">
                     <p className="text-2xl">A full scale business automation platform for small businesses </p> 
                     <p className="text-lg mt-2">we build interactive and scaleable web based applications for our customers </p> 
                    <div className="mt-5 w-full">         
                        <div className=" text-black w-28 h-10 border border-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer justify-center items-center flex "><p>Explore</p></div>
                    </div>
                    
                    </div>       
                </div>

                 <div className="m-2 sm:m-5 p-2 sm:p-5 text-gray-700 flex flex-col sm:flex-row content-center h-full w-full">
                <div className="w-full sm:w-1/2 flex-col justify-center items-center pt-10">
                    <h3 className="mb-5 w-2/3 text-3xl text-black font-semibold">Cruise9ja</h3>
                </div>
                    <div className="flex-col flex w-full sm:w-1/2">
                     <p className="text-2xl">A full scale business automation platform for small businesses </p> 
                     <p className="text-lg mt-2">we build interactive and scaleable web based applications for our customers </p> 
                    <div className="mt-5 w-full">         
                        <div className=" text-black w-28 h-10 border border-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer justify-center items-center flex "><p>Explore</p></div>
                    </div>
                    
                    </div>       
                </div>
              
                  
            </div>
        </div>
        {/* product showcase */}
      </main>

      <footer className="w-full h-screen lg:p-10">
      <div className="w-full flex flex-col lg:flex-row flex-wrap">
        <div className="lg:p-10 mt-5 w-full lg:w-1/2">
          <img src="/dd.jpg" alt="logo" className="w-40 h-30"/>
        </div>
        <div className="p-5 lg:p-10 flex flex-row flex-wrap w-full lg:w-1/2">
            <div className="w-1/2 p-5 text-white">
            <h3 className="text-1xl font-bold">Links</h3>
            <nav className="text-white">
                <p>About Us</p>
                  <p>Products</p>
                  <p>What We Do</p>
            </nav>
        </div>
        <div className=" w-1/2 p-5 text-white">
            <h3 className="text-1xl font-bold">Social</h3>
            <nav className="text-white">
                <p>twitter</p>
                  <p>instagram</p>
                  <p>mobile</p>
            </nav>
        </div>
        <div className="w-1/2 p-5 text-white">
            <h3 className="text-1xl font-bold">Company</h3>
            <nav className="text-white">
                <p>About</p>
                  <p>Blog</p>
                  <p>Careers</p>
            </nav>
        </div>
        <div className="w-1/2 p-5 text-white">
            <h3 className="text-1xl font-bold">Legal</h3>
            <nav className="text-white">
                <p>Privacy</p>
                  <p>Cookie Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Security</p>
            </nav>
        </div>
        <div className="w-1/2 p-5 text-white">
            <h3 className="text-1xl font-bold">Get In Touch</h3>
            <nav className="text-white">
                <p>Warri, Nigeria</p>
                  <p>Support@intience.com</p>
                  <p>07041878794</p>
            </nav>
        </div>
        </div>
        
        </div>
        <div className="m-10 border-t-4 border-gray-200 pt-10 text-white">
            <p className="text-1xl font-bold">&copy; 2021 intience labs</p>
        </div>
      </footer>
    </div>
  )
}

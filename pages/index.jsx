import { PaperClipIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'

export default function Home() {
  return (
    <div className="bg-[#f7f7f7]">
      <Head>
        <title>entorOcean.com</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,400&display=swap" rel="stylesheet"></link>
      </Head>
        
       <Header/>
       <HeaderBottom/>
       <main className="bg-[#f7f7f7]  ">
        <div className="max-w-3xl w-full flex-grow mt-4 shadow-2xl mx-auto border px-8 sm:px-16 rounded-xl bg-white mb-3">

        
        <section className=" pt-14">
          <h2 className="font-bold pb-5 pt-6 text-3xl">What Service are You looking For</h2>
          <div className="bg-white px-7 py-5 rounded-lg shadow-md">
          <h1 className="text-gray-900">
              Describe the service you are looking to purchase <br />please be as
              detailed as possible:
            </h1>
            <textarea
              className=" outline-none px-2 py-3 mt-3 flex-grow w-full  border text-gray-500 mb-2 "
              name="text"
              id="text"
              placeholder="I'm looking for..."
              cols="50"
              rows="7"
            ></textarea>
            <button className="flex shadow-md rounded-lg  items-center bg-gray-200   to-gray-700 px-2 py-2">
              <PaperClipIcon className="h-6 mr-3" />
              Attach Files
            </button>
          </div>
        </section>
        <section className=" shadow-xl p-2">
          <h2 className="font-bold pb-5 p-2 text-3xl">
           Choose Category 
          </h2>
          <div className="grid space-x-1 grid-cols-1 md:grid-cols-2">
       
          <div className=" pb-5 w-full flex-grow max-w-[400px]">
            <form className=" w-full flex-grow" action="">
              <select className=" w-full  flex-grow border-2 p-2 rounded-lg outline-none" id="dropdown">
                <option className="font-bold">Select....</option>
                <option className="p-5  bg-gray-100" value="1">Graphic Desing</option>
                <option className="p-5  bg-gray-100" value="2">Digital Marketing</option>
                <option className="p-5  bg-gray-100" value="3">Writing & Translation</option>
                <option className="p-5  bg-gray-100" value="4">Vedio & Animation</option>
                <option className="p-5  bg-gray-100" value="5">Music & Vedio</option>
                <option className="p-5  bg-gray-100" value="6">Programming & Tech</option>
                <option className="p-5  bg-gray-100" value="7">Lifesyle</option>
                <option className="p-5  bg-gray-100" value="8">Data</option>
                <option className="p-5  bg-gray-100" value="9">Advaced</option>
               
              </select>
            </form>
          </div>
          <div className=" pb-5 w-full flex-grow max-w-[400px]">
            <form  className=" w-full flex-grow" action="">
              <select disabled className=" w-full  flex-grow border-2 p-2 bg bg-gray-100 rounded-lg outline-none" id="dropdown">
              <option  className="font-bold">Select subcategory</option>
               
              </select>
            </form>
          </div>
        </div>
        </section>
         <section className=" bg-white mx-auto px-8 border-t pb-14  mb-2">
         <h1 className="text-lg font-bold pt-5 mb-3 text-gray-700">Once You place you order,when woruld you like your service delivered?</h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="px-3  max-w-sm py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        24 Hours
              </div>
              <div className="px-3  max-w-sm py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform  shadow-md transition .5s ease-out">
                       3 Day
              </div>
              <div className="px-3  max-w-sm py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        7 Days
              </div>
              <div className="px-3 max-w-sm  py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform transition shadow-md .5s ease-out">
                       Others
              </div>
              
          </div>
         
         
         </section>
         <section className="px-4 relative">
           <h1 className="font-bold text-lg ">
             What is Your Budget for this service?
           </h1>
           <input type="text" placeholder="Rs" className="outline-none  border-2 px-2 py-2 mt-3 mb-1 rounded" />
           <p className="text-xs text-green-600 cursor-pointer mb-16">Conver to USD</p>
           <div className="px-2 absolute right-0 top-24 justify-self-end py-2 w-[200px] rounded-lg text-center bg-green-400 mt-2 text-white font-bold shadow-md cursor-pointer ">
              Submit Request
          </div>
         </section>
        
         </div>
        
      </main>
      <div className=" bg-gray-800 text-white flex items-center w-full justify-self-center text-center  max-w-[200px] mx-auto px-8 ">
           MentorOcean.com
      </div>
      <Footer/>
      
    </div>
  )
}

import Image from "next/image";
import { Globe } from "../../components/ui/globe";
import { GlobeDemo } from "../components/myglobe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import div2 from '../../public/div2.png'
//import { LayoutGridDemo } from "@/components/mylayoutgrid";
import { CardHoverEffectDemo } from "@/components/myhovereffect";




export default function Home() {
  return (
    <>
      <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-dark-800 text-white py-4 px-6">
        {/* Left side */}
        <div className="flex items-center mb-4 lg:mb-0">
          <h1 className="text-lg font-bold mr-4">SecureEye</h1>
        </div>

        {/* Middle section */}
        <div className="flex items-center justify-center lg:justify-start space-x-6 mb-4 lg:mb-0">
          <a href="#" className="hover:text-gray-300">Dashboard</a>
          <a href="#" className="hover:text-gray-300">Messaging</a>
          <a href="#" className="hover:text-gray-300">Notification</a>
          <a href="#" className="hover:text-gray-300">Help Center</a>
        </div>

        {/* Right side */}
        <div className="flex justify-center lg:justify-end items-center space-x-4">
          <button className="hover:bg-slate-800 text-white border border-white font-bold py-2 px-4 rounded">Admin</button>
          <button className="bg-white hover:bg-slate-600 text-black font-bold py-2 px-4 rounded">Add Camera</button>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-1 p-6 lg:p-20">
          <h1 className="text-xl lg:text-3xl font-bold text-white text-center lg:text-left">Proactive Geo-Tagging System <br /> for Private Cameras</h1>
          <p className="text-sm lg:text-base pt-2 text-white text-center lg:text-left">GeoCamGuard is a user-friendly geo-tagging system <br /> designed to enhance law enforcement access to crucial footage, <br /> providing real-time alerts and ensuring swift response for  <br /> improved public safety.</p>
        </div>
        <div className="flex-1 mt-0">
          <GlobeDemo />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center bg-white text-black pt-20">
        {/* Text div */}
        <div className="flex-1 p-6 lg:p-20 lg:order-1 px-5">
          <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-left">Our Geo-Tag Process</h2>
          <p className="text-sm pt-5">Simple, secure, and efficient geo-tagging.</p>
          <Button variant="outline" className="text-white mt-10">Add Camera</Button>
        </div>

        {/* Image div */}
        <div className="flex-1 div2-img h-full w-full lg:order-2 rounded-md mr-10" style={{ backgroundImage: `url(${div2.src})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '200px' }}>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center text-center bg-white text-black p-20">
        <div className="w-1/3">
          <h2 className="font-semibold text-lg">Geo-Location</h2>
          <p className="text-sm">Pinpoint accuracy in geo-tagging.</p>
        </div>
        <div className="w-1/3">
          <h2 className="font-semibold text-lg">Privacy Control</h2>
          <p className="text-sm">You own and control your data.</p></div>
        <div className="w-1/3">
          <h2 className="font-semibold text-lg">Easy Integration</h2>
          <p className="text-sm">Works with your existing cameras.</p>
        </div>
      </div>

      <div className="bg-white w-full text-center" >
        <div className="flex bg-black mx-60 rounded-lg text-white align-center justify-center flex-col text-center p-10 ">
          <h2 className="text-3xl font-semibold">Ready to Geo-Tag?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <Button className="pt-10">Add Camera</Button>
        </div>
      </div>

      <div className="bg-white">
        <div className="pt-10 p-20">
          <h2 className="text-3xl font-bold">Secure Eye in Action</h2>
          <p className="text-sm pt-2">Lorem ipsum dolor sit amet, consectetur</p>
        </div>

        <div className="w-full">
          {/* <LayoutGridDemo/> */}

          <CardHoverEffectDemo />
        </div>
      </div>

      <div className="w-full font-thin text-white  p-16 flex flex-wrap justify-center gap-8 lg:justify-between lg:gap-0 lg:w-auto">
        <div className="flex flex-col text-sm lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Company</h3>
          <p >Our Story</p>
          <p>Join Up</p>
          <p>Latest Updates</p>
        </div>
        <div className="flex flex-col text-sm mb-8 lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Product Features</h3>
          <p>Feature 1</p>
          <p>Feature 2</p>
          <p>Feature 3</p>
        </div>
        <div className="flex flex-col text-sm mb-8 lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="flex flex-col text-sm mb-8 lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Join our Newsletter</h3>
          <div className="newsletter-form w-full text-white flex justify-center">
            <div className="flex flex-col">
              <h3>Get tips and updates on maximizing your geo-tagging.</h3>
              <div className="flex w-full max-w-sm items-center py-5 space-x-2 border-8 border-indigo-900 outline-8	outline-white	">
                <Input type="email" placeholder="Email" className="border-8	bg-white border-indigo-900	shadow-lg outline-8	outline-white	" />
                <Button type="submit" >Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
}

import { FaAngleRight } from "react-icons/fa";
import UpvoteButton from "./UpvoteButton";
import { HiMinusSm } from "react-icons/hi";


export default function Content() {
    return (
        <div>
            <section className="md:mx-extra-wide md:pl-16 px-3 text-center md:text-start jus ">
                <div className="md:mx-extra-wide md:px-5 md:mt-16">
                    <pre className=" mx-auto lg:flex font-lighter text-xs  text-justify  cursor-pointer hover:text-gray-950 md:block hidden" >Home <FaAngleRight className="mt-1" /> Product <FaAngleRight className="mt-1" /> VideoDubber - Fast Video Translator</pre>
                </div>
                <div>
                    <div className="md:mx-extra-wide md:px-5 md:mt-16 mt-8">
                        <h1 class=" flex md:text-5xl text-4xl font-bold text-dark-gray md:mt-10">VideoDubber<HiMinusSm className="md:block hidden"/>  Fast Video </h1>
                        <h1 className=" md:text-5xl text-3xl font-bold text-dark-gray md:mt-10 mt-1  text-center md:text-start">Translator</h1>
                    </div>
                    <div className="lg:flex justify-between md:block">
                        <div><h2 class=" md:mx-extra-wide md:px-5 px-2 mt-16 md:text-2xl text-lg font-light text-light-gray ">Translate videos in your own voice, globalize in a click!</h2></div>
                        <div><UpvoteButton /></div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
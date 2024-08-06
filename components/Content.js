import { FaAngleRight } from "react-icons/fa";
import UpvoteButton from "./UpvoteButton";


export default function Content() {
    return (
        <div>
            <section className="mx-extra-wide px-16 ">
                <div className="mx-extra-wide px-5 mt-16">
                    <pre className="mx-auto flex font-lighter text-xs cursor-pointer hover:text-gray-950" >Home <FaAngleRight className="mt-1" /> Product <FaAngleRight className="mt-1" /> VideoDubber - Fast Video Translator</pre>
                </div>
                <div>
                    <div className="mx-extra-wide px-5 mt-16"><h1 class="text-5xl font-bold text-dark-gray mt-10">VideoDubber - Fast Video Translator</h1></div>
                    <div className="flex justify-between">
                        <div><h2 class=" mx-extra-wide px-5 mt-16 text-2xl font-light text-light-gray styles_tagline__svEiR">Translate videos in your own voice, globalize in a click!</h2></div>
                        <div><UpvoteButton /></div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
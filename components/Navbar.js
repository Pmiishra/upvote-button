// import Link from "next/link";


// export default function Navbar() {
//     return (
//         <div>
//             <nav className="flex justify-evenly m-7">
//                 <div className="flex  ">
//                     <Link href={'/'}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" class="styles_logo__xwGFq">
//                             <g fill="none" fill-rule="evenodd">
//                                 <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
//                                 <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
//                             </g>
//                         </svg>
//                     </Link>

//                 </div>
//                 <div className="flex gap-10 justify-evenly cursor-pointer mt-3 ">
//                     <div className="text-orangee">Launches</div>
//                     <div className="hover:text-orangee">Products</div>
//                     <div className="hover:text-orangee">News</div>
//                     <div className="hover:text-orangee">Community</div>
//                     <div className="hover:text-orangee">Advertise</div>
//                 </div>
//                 <div className="flex gap-10">
//                     <div className="bg-orangee text-white font-bold p-2 rounded"><Link class="cursor-pointer text-16 styles_gradient__5cYBT" href={'/'}>Subscribe</Link></div>
//                     <div className="cursor-pointer text-white bg-orangee text-white font-bold p-2 rounded "><Link href={'/'}>Sign in</Link></div>
//                 </div>
//             </nav>

//         </div>
//     );
// }
// components/Navbar.js
'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-4 justify-evenly m-7">
            <div className=" mx-auto flex md:justify-evenly justify-between  items-center ">
                <Link href="/" className="text-2xl md:text-6xl font-bold lg:mr-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" class="styles_logo__xwGFq">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
                            <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
                        </g>
                    </svg>
                </Link>


                <button
                    className="md:hidden flex text-2xl md:text-6xl text-orangee"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>


                <div className={`md:flex md:justify-between md:items-center md:space-x-6 ${isOpen ? 'hidden' : 'hidden'}`}>
                    <Link href="/" className="block text-black py-2 px-1 hover:text-orangee rounded">
                        Launches
                    </Link>
                    <Link href="/about" className="block  text-black py-2 px-1 hover:text-orangee rounded">
                        Products
                    </Link>
                    <Link href="/services" className="block text-black py-2 px-1 hover:btext-orangee rounded">
                        News
                    </Link>
                    <Link href="/contact" className="block  text-black py-2 px-1 hover:text-orangee rounded">
                        Community
                    </Link>
                    <Link href="/contact" className="block text-black py-2 px-1 hover:text-orangee rounded">
                        Advertise
                    </Link>
                </div>


                <div className="md:flex items-center space-x-4 hidden">
                    <Link href="/subscribe" className="bg-orangee text-white font-bold py-2 px-4 rounded">
                        Subscribe
                    </Link>
                    <Link href="/signin" className="bg-orangee text-white font-bold py-2 px-4 rounded ">
                        Sign in
                    </Link>
                </div>
            </div>
        </nav>
    );
}

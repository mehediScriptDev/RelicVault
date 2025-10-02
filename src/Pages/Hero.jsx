
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative h-[50vh] bg-[url('../../src/images/cover-image.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center">
      {/* <Link href="#_" class="relative px-5 py-2 font-medium text-white group">
        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
        

        
        <span class="relative">Button Text</span>
      </Link> */}
      <div className="absolute inset-0 -z-0 h-[50vh] bg-black/30"></div>
   
        <div className="flex flex-col justify-center items-center text-center z-0 w-10/12 mx-auto">
             <h1 className="text-4xl font-bold text-white ">Thoughts, stories and ideas.</h1>
      <p className="py-3 font-semibold text-gray-50">Minimal and modern theme for Ghost. Use it for personal blog or multi-author blog / magazine.</p>
        </div>
     
    </div>
  );
};

export default Hero;

import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b ">
      {/* fixed top-0 flex items-center justify-between w-full p-4 bg-white shadow z-50 */}
      {/* bg-white/80 here 80 is opacity */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" 
          alt="FinNest Logo" 
          width={200} 
          height={900}
          className="h-20 w-auto object-contain" />
        </Link>
      

  <div className="flex items-center space-x-4"> {/* space-x-4 denotes all of them will have horizontal margin of 4*/}
    <SignedIn>

      <Link  href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
      <Button variant="outline">
        <LayoutDashboard size={18}/>
        {/* if the size is medium then dashboard text gets invisible or hidden */}
        <span className="hidden md:inline">Dashboard</span>
      </Button>
      </Link>

      <Link  href={"/transaction/create"} >
      {/* if we remove variant="outline" we get defualt bg i.e black for button */}
      <Button className="flex items-center gap-2">
        <PenBox size={18} />
        {/* if the size is medium then dashboard text gets invisible or hidden */}
        <span className="hidden md:inline">Add Transaction</span>
      </Button>
      </Link>

    </SignedIn>
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
          <Button variant="outline">Login</Button>
          </SignInButton >
        </SignedOut>
        <SignedIn>
          <UserButton 
          appearance={{
            elements: {
              avatarBox:"w-10 h-10",
            },
          }}/>
        </SignedIn>
        </div>
        </nav>
    </div>
  );
};

export default Header;
































// import Image from "next/image";
// import Link from "next/link";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

// const Header= ()=> {
//     return(
//       <div className="fixed top-0"> 
//       <nav>
//         <Link href="/">
//          <Image src={"/logo.png"} alt="FinNest Logo" height={60} width={200} />
//         </Link>
//       </nav>
//             <SignedOut>
//               <SignInButton />
//               <SignUpButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//         </div>
//     );
// };

// export default Header;







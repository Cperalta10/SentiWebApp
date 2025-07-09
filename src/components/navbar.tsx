import React from "react";
import {
  Navbar as MTNavbar,
} from "@material-tailwind/react";
import Image from "next/image";

export function Navbar() {
  return (
    <MTNavbar 
      shadow={false} 
      fullWidth 
      className="border-0 sticky top-0 z-50 bg-red-300"
      placeholder=""
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex items-center justify-center">
        <Image
          width={400}
          height={400}
          src="/logos/Sentimiento-Logotipo-Negro.PNG"
          alt='Senti Logo'
        />
      </div>
    </MTNavbar>
  );
}

export default Navbar;

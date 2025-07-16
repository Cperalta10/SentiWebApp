import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-8 px-2 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 container max-w-6xl mx-auto rounded-2xl md:p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
            placeholder=""
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Join our community!
          </Typography>
          <Typography
            color="white"
            className="md:w-7/12 w-full text-center my-3 !text-base"
            placeholder=""
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Get news in your inbox every week! We hate spam too, so no worries
            about this.
          </Typography>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 w-full">
            <div className="w-full md:w-80">
              {/* @ts-ignore */}
              <Input label="Email" color="white" className="w-full" />
            </div>
            <Button 
              size="md" 
              className="w-full md:w-32" 
              color="white"
              placeholder=""
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              subscribe
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Image src="/logos/Sentimiento-Logotipo-Negro.PNG" alt="Sentimiento Logo" width={100} height={100} />
          <div className="flex w-fit justify-center gap-2">
            <Link href="https://www.instagram.com/sentimiento.x" target="_blank">
              <IconButton 
                size="sm" 
                color="gray" 
                variant="text"
                placeholder=""
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-brands fa-instagram text-lg text-pink-500" />
              </IconButton>
            </Link>
            <Link href="https://open.spotify.com/playlist/37i9dQZF1E4o2WrrviFj9D" target="_blank">
              <IconButton 
                size="sm" 
                color="gray" 
                variant="text"
                placeholder=""
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-brands fa-spotify text-lg text-green-500" />
              </IconButton>
            </Link>
            <Link href="https://www.youtube.com/@SentimientoOfficial" target="_blank">
              <IconButton 
                size="sm" 
                color="gray" 
                variant="text"
                placeholder=""
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-brands fa-youtube text-lg text-red-500" />
              </IconButton>
            </Link>
            <Link href="https://music.apple.com/us/artist/sentimiento/1464798149" target="_blank">
              <IconButton 
                size="sm" 
                color="gray" 
                variant="text"
                placeholder=""
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <i className="fa-brands fa-apple text-lg text-black" />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <span className="font-semibold text-base text-gray-900 mb-1">Manager Contact Info</span>
          <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-4 md:text-base text-center text-gray-800 items-center">
            <span className="flex items-center gap-1">
              <i className="fa-brands fa-instagram text-pink-500" /> elevatewithG1
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-envelope text-blue-500" /> contact.elevatewithg1
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-phone text-green-500" /> (909) 706-2706
            </span>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
          placeholder=""
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          &copy; Sentimiento {CURRENT_YEAR}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;

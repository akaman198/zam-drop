import Zamdrop from "../assets/logos/zamdrop_Light_logo.svg";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Twitter from "../assets/logos/icons8-twitterx.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";
import Linkedin from "../assets/logos/icons8-linkedin.svg";

function Footer() {
  return (
    <section className="bg-green-800">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-200 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div>
            <img
              className="mb-4 w-36"
              src={Zamdrop}
              alt="Light version of Zamdrop logo"
            />
            <p>Start spending the smart way</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-white font-semibold">Product</p>
              <a href="#">Overview</a>
              <a href="#">Features</a>
              <a href="#">Solutions</a>
              <a href="#">Contact</a>
              <a href="#">Releases</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white font-semibold">Resources</p>
              <a href="#">Blog</a>
              <a href="#">Newsletter</a>
              <a href="#">Events</a>
              <a href="#">Help Centre</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className="w-fit">
            <h2 className="font-semibold">Get the app</h2>
            <StoreLinks type={BtnTypes.Variant} />
          </div>
        </div>
        <div className="mt-14 flex justify-between items-center border-t-2 border-t-green-700 pt-10 flex-wrap gap-4">
          <p className="text-gray-300">
            &copy; 2025 ZamDrop. All rights reserved.
          </p>
          <p className="text-center">
            Website developed by{" "}
            <a
              href="https://levelupzed.com"
              className="text-black hover:underline"
              target="_blank"
            >
              Level Up
            </a>
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter logo" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook logo" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin logo" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

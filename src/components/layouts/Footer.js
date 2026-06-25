import Image from "next/image";

function Footer() {
  return (
    <footer
      className="md:px-48 mt-[150px] relative overflow-hidden"
      style={{
        clipPath: "inset(0 0 0 0)",
      }}
    >
      <div className="bg-[#133630] w-full rounded-[50px] px-12 md:px-32 py-22">
        <div className="flex md:flex-row flex-col justify-between border-b-2 pb-12 md:pb-18">
          <p className="text-white text-[2rem]">Join Newsletter</p>
          <form action="" className="flex">
            <input type="email" name="email" id="email" placeholder="Email" className="bg-white px-5 py-3 rounded-bl-md rounded-tl-md w-[160px] md:w-[600px] text-sm" />
            <button className="bg-[#D7E7B6] px-10 py-3 rounded-br-md rounded-tr-md text-[#525252] text-sm">Submit</button>
          </form>
        </div>
        <div className="flex md:flex-row flex-col gap-10 md:gap-50 mt-12 md:mt-32">
          <Image src="/logo-footer.png" width="150" height="150" alt="logo" />
          <div className="flex flex-col gap-5">
            <p className="font-bold text-[1.5rem] text-white">Company</p>
            <a href="" className="font-light text-[1rem] text-white">
              About
            </a>
            <a href="" className="font-light text-[1rem] text-white">
              Sustainability
            </a>
            <a href="" className="font-light text-[1rem] text-white">
              Products
            </a>
            <a href="" className="font-light text-[1rem] text-white">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-[1.5rem] text-white">Contact Us</p>
            <a href="" className="font-light text-[1rem] text-white">
              Jl. Bersama, Kelurahan Kembangan <span className="block"> Kota Jakarta Barat, Jakarta 10420,</span> Indonesia
            </a>
            <a href="" className="font-light text-[1rem] text-white">
              +1 202-918-2132
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-[1.5rem] text-white">Follow Us</p>
            <div className="flex gap-3">
              <a href="" className="font-light text-[1rem] text-white">
                <Image src="/Facebook.png" width="35" height="35" alt="Facebook" />
              </a>
              <a href="" className="font-light text-[1rem] text-white">
                <Image src="/Instagram.png" width="35" height="35" alt="Instagram" />
              </a>
              <a href="" className="font-light text-[1rem] text-white">
                <Image src="/Tiktok.png" width="35" height="35" alt="Tiktok" />
              </a>
              <a href="" className="font-light text-[1rem] text-white">
                <Image src="/Youtube.png" width="35" height="35" alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center my-10 mx-12 text-md md:text-xl font-light">© 2024 Greenate Sustainable Food Products. All Rights Reserved.</p>
      <Image src="/Ellipse 2.png" width="1000" height="100" alt="Acc" className="w-full absolute left-0 top-35 z-[-10]" />
    </footer>
  );
}

export default Footer;

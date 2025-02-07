import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer xl:px-24 py-10 px-4 text-base-content">
        <aside>
          <img src="/logo.png" alt="" />
          <p className="my-3 md:w-40">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>

        <nav>
          <header className="footer-title text-black">Useful links</header>
          <a className="link link-hover" href="/about-us">About us</a>
          <a className="link link-hover" href="/faq">FAQ</a>
        </nav>

        <nav>
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover" href="/">
            Home
          </a>
          <a className="link link-hover" href="/offers">
            Offers
          </a>
          <a className="link link-hover" href="/menu">
            Menus
          </a>
          <a className="link link-hover" href="/table-booking">
            Reservation
          </a>
        </nav>

        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">gimsarabojunhala@gmail.com</a>
          <a className="link link-hover">032 563 3007</a>
        </nav>

      </footer>
      <hr />
      <footer className="footer items-center xl:px-24 px-4 py-4 mt-2">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2025 - All rights reserved for HexCode</p>
        </aside>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

          {/* Fascebook */}
          <a href="https://www.facebook.com/gimsarabojunhala"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          
          {/* WhatsApp */}
          <a href="https://wa.me/+94741348118" target="blank">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

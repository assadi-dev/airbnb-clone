import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800">
      <div className="space-y-4 text-xs test-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs test-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>its a pretty awseom clone</p>
        <p>Referral accepted</p>
        <p>Papafam</p>
      </div>
      <div className="space-y-4 text-xs test-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Papa React</p>
        <p>Present</p>
        <p>Zero to Hero</p>
        <p>Hundred of Student</p>
        <p>Join now</p>
      </div>
      <div className="space-y-4 text-xs test-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the win </p>
      </div>
    </footer>
  );
}

export default Footer;

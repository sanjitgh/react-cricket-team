const Footer = () => {
  return (
    <footer className="bg-[#06091A] pt-64">
      <div className="container mx-auto px-3 pb-16">
        <img
          className="mx-auto mb-10"
          src="logo-footer.png"
          alt=""
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">About Us</h3>
            <p className="text-gray-500 max-w-72">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="list-disc text-gray-500 ml-3">
                <a href="#">Home</a>
              </li>
              <li className="list-disc text-gray-500 ml-3">
                <a href="#">Service</a>
              </li>
              <li className="list-disc text-gray-500 ml-3">
                <a href="#">Abut</a>
              </li>
              <li className="list-disc text-gray-500 ml-3">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Subscribe</h3>
            <p className="text-gray-500 max-w-72">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="mt-5 text-center sm:text-start">
              <input
                className="p-3 rounded-l focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <button className="rounded-r bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-pink-400 hover:to-yellow-400 p-3 font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-800"></div>
      <div>
        <p className="text-center text-gray-500 py-8">
          @2024 Cricket Player. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Fragment } from "react";
import HomeSection from "../components/Landing Page/HomeSection";
import Navbar from "../components/Navbar";
import AboutUs from "../components/Landing Page/AboutUs";
import Products from "../components/Landing Page/Products";
import ContactUs from "../components/Landing Page/ContactUs";

const LandingPage = () => {
	return (
		<Fragment>
			<Navbar />
			<HomeSection />
			<AboutUs />
			<Products />
			<ContactUs />
		</Fragment>
	);
};

export default LandingPage;
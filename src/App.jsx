import { Fragment, useState } from "react";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Hero from "./components/hero/Hero";
import ProductModal from "./components/product-modal/ProductModal";

function App() {
    const [showModal, setShowModal] = useState(false);
    // console.log(showModal);
    return (
        <Fragment>
            <Header openModalFunc={setShowModal} />
            <main>
                <Hero />
                <ProductModal
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;

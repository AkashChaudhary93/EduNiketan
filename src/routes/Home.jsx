import React from "react";
import Footer from "../components/footer";
import Herosection from "../components/heroSection";
import Statement from "../components/statement";
import Capabilities from "../components/capabilities";
import Validation from "../components/validation";
import Comlocation from "../components/comLocation";

function Home() {
    return (
        <>

            <Herosection />
            <Statement />
            <Capabilities></Capabilities>
            <Validation></Validation>
            <Comlocation />
            <Footer />
        </>
    )
}
export default Home;

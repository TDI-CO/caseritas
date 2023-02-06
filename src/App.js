import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Socials/Socials";

function App() {
  return (
    <div>
      <div className="h-96 flex bg-header text-center items-center ">
        <div>
          <h1 className="ml-20 text-white text-9xl font-bold max-[600px]:hidden">
            CASERITAS
          </h1>
        </div>
        <Socials />
      </div>
      <section className="bg-black max-[600px]:h-full h-screen flex flex-row max-[600px]:flex-wrap gap-10 p-10 justify-center items-center">
        <Cards title="Hamburguesa" price="15.000" ima="bg-burguer" />
        <Cards title="Burrito" price="20.000" ima="bg-burrito" />
        <Cards title="Salchipapa" price="20.000" ima="bg-salchipapa" />
      </section>
      <Footer />
    </div>
  );
}

export default App;

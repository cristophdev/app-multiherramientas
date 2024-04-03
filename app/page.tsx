"use client"
import React from "react";
import AplicationButton from "./Components/Buttons/AplicationButton";
import "./globals.css";
import HomeButton from "./Components/Buttons/HomeButton";
import useHome from "./Logic/useHome";

export default function Home() {
  const {currentApp, setCurrentApp, aplications} = useHome()

  return (
    <section className="w-screen h-screen flex flex-row">
      <aside className="w-[22%] p-5 pt-8 text-black">
        <h3 className="font-semibold text-xl">Herramientas...</h3>
        <div className="pt-5">
          <h4 className="font-medium text-lg mb-2">Calculadoras:</h4>
          <AplicationButton
            aplication={aplications.calculator.name}
            setApp={() => setCurrentApp(aplications.calculator.path)} />
          <AplicationButton
            aplication={aplications.calculatorPro.name}
            setApp={() => setCurrentApp(aplications.calculatorPro.path)} />
        </div>
        <div className="pt-5">
          <h4 className="font-medium text-lg mb-2">Convertir medidas:</h4>
          <AplicationButton
            aplication={aplications.distances.name}
            setApp={() => setCurrentApp(aplications.distances.path)} />
          <AplicationButton
            aplication={aplications.grades.name}
            setApp={() => setCurrentApp(aplications.grades.path)} />
          <AplicationButton
            aplication={aplications.information.name}
            setApp={() => setCurrentApp(aplications.information.path)} />
          <AplicationButton
            aplication={aplications.time.name}
            setApp={() => setCurrentApp(aplications.time.path)} />
          <AplicationButton
            aplication={aplications.weight.name}
            setApp={() => setCurrentApp(aplications.weight.path)} />
        </div>
      </aside>
      <div
        className="w-[0.65%] h-[90%] mt-auto mb-auto justify-center bg-gradient-to-b from-violet-200 to-blue-200 rounded-md"
      ></div>
      <main
        className="w-[77.35%] p-5 pl-8 text-gray-700 flex justify-center"
      >
        <div
          className="max-w-[700px] max-h-[600px] relative flex flex-col items-center"
        >
          <div
            className="w-[750px] h-[620px] bg-gradient-to-b from-violet-100 to-blue-200 opacity-60 -z-10 rounded-lg absolute"
          ></div>
          <div
            className="z-10 pt-5 transition-all">
            {
              currentApp ? currentApp :
                <div id="default" className="">
                  <h1 className="text-2xl font-semibold text-center">Selecciona una aplicación</h1>
                  <section className="grid grid-cols-3 gap-8 mt-10">

                    <HomeButton
                      section={aplications.calculator.name}
                      setApp={() => setCurrentApp(aplications.calculator.path)}
                    />
                    <HomeButton
                      section={aplications.calculatorPro.name}
                      setApp={() => setCurrentApp(aplications.calculatorPro.path)}
                    />
                    <HomeButton
                      section={aplications.distances.name}
                      setApp={() => setCurrentApp(aplications.distances.path)}
                    />
                    <HomeButton
                      section={aplications.grades.name}
                      setApp={() => setCurrentApp(aplications.grades.path)}
                    />
                    <HomeButton
                      section={aplications.information.name}
                      setApp={() => setCurrentApp(aplications.information.path)}
                    />
                    <HomeButton
                      section={aplications.time.name}
                      setApp={() => setCurrentApp(aplications.time.path)}
                    />
                    <HomeButton
                      section={aplications.weight.name}
                      setApp={() => setCurrentApp(aplications.weight.path)}
                    />
                  </section>
                </div>
            }
          </div>
        </div>
      </main>
    </section>
  );
}
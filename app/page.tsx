"use client"
import React from "react";
import AplicationButton from "./Components/Buttons/AplicationButton";
import "./globals.css";
import HomeButton from "./Components/Buttons/HomeButton";
import useHome from "./Logic/useHome";
import DefaultPage from "./DefaultPage";
import CalculatorSVG from "./SVG/CalculatorSVG";
import CalculatorProSVG from "./SVG/CalculatorProSVG";
import Ruler from "./SVG/RulerSVG";
import TemperatureSVG from "./SVG/TemperatureSVG";
import ComputerSVG from "./SVG/ComputerSVG";
import TimeSVG from "./SVG/TimeSVG";
import WeightSVG from "./SVG/WeightSVG";

export default function Home() {
  const { currentApp, setCurrentApp, aplications } = useHome()

  return (
    <section className="w-screen h-screen lg:flex lg:flex-row">
      <aside className="hidden p-5 pt-8 text-black lg:block lg:w-[22%]">
        <h3 className="font-semibold text-xl">Herramientas...</h3>
        <div className="pt-5">
          <h4 className="font-medium text-lg mb-2">Calculadoras:</h4>
          <AplicationButton
            aplication={aplications.calculator.name}
            setApp={() => setCurrentApp(aplications.calculator.path)}
            svg={CalculatorSVG()}
          />
          <AplicationButton
            aplication={aplications.calculatorPro.name}
            setApp={() => setCurrentApp(aplications.calculatorPro.path)}
            svg={CalculatorProSVG()}
          />
        </div>
        <div className="pt-5">
          <h4 className="font-medium text-lg mb-2">Convertir medidas:</h4>
          <AplicationButton
            aplication={aplications.distances.name}
            setApp={() => setCurrentApp(aplications.distances.path)} 
            svg={Ruler()} 
            />
          <AplicationButton
            aplication={aplications.grades.name}
            setApp={() => setCurrentApp(aplications.grades.path)} 
            svg={TemperatureSVG()}
            />
          <AplicationButton
            aplication={aplications.information.name}
            setApp={() => setCurrentApp(aplications.information.path)} 
            svg={ComputerSVG()}
            />
          <AplicationButton
            aplication={aplications.time.name}
            setApp={() => setCurrentApp(aplications.time.path)} 
            svg={TimeSVG()}
            />
          <AplicationButton
            aplication={aplications.weight.name}
            setApp={() => setCurrentApp(aplications.weight.path)} 
            svg={WeightSVG()}
            />
        </div>
      </aside>
      {/* Line */}
      <div
        className="hidden mt-auto mb-auto justify-center bg-gradient-to-b from-violet-200 to-blue-200 rounded-md lg:block lg:w-[0.65%] lg:h-[90%]"
      ></div>

      <main
        className="w-screen h-screen p-5 lg:pl-8 text-gray-700 flex justify-center lg:w-[77.35%] transform transition-transform translate-y-0"
      >
        <div
          className="max-w-[700px] max-h-[600px] w-[300px] flex flex-col items-center px-5 relative md:w-[600px] xl:w-[700px]"
        >
          {/* Background */}
          <div
            className="max-w-[700px] h-[700px] w-[300px] bg-gradient-to-b from-violet-100 to-blue-200 opacity-60 -z-10 rounded-lg absolute md:w-[600px] xl:w-[700px] xl:h-[640px]"
          ></div>

          <div
            className="z-10 pt-5 w-full flex flex-col items-center">
            {
              currentApp ? currentApp :
                <DefaultPage pages={
                  <>
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
                  </>
                } />
            }
          </div>
        </div>
      </main>
    </section>
  );
}
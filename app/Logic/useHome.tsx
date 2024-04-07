import { ReactElement, useState } from "react"
import { Apps } from "../Types/Types"
import Calculator from "../Pages/Calculator"
import CalculatorPro from "../Pages/CalculatorPro"
import Distances from "../Pages/Distances"
import Grades from "../Pages/Grades"
import Information from "../Pages/Information"
import Time from "../Pages/Time"
import Weight from "../Pages/Weight"
import DefaultPage from "../DefaultPage"
import HomeButton from "../Components/Buttons/HomeButton"

export default function useHome() {
  const [currentApp, setCurrentApp] = useState<ReactElement>()

  const previous = () => {
    setCurrentApp(defaultPage)
  }

  const aplications: Apps = {
    calculator: {
      name: "Calculadora",
      path:
        <Calculator
          handlePrevious={previous}
        />
    },
    calculatorPro: {
      name: "Calculadora Avanzada",
      path:
        <CalculatorPro
          handlePrevious={previous}
        />
    },
    distances: {
      name: "Longitudes",
      path:
        <Distances
          handlePrevious={previous}
        />
    },
    grades: {
      name: "Grados",
      path:
        <Grades
          handlePrevious={previous}
        />
    },
    weight: {
      name: "Masas",
      path:
        <Weight
          handlePrevious={previous}
        />
    },
    information: {
      name: "Información",
      path: <Information
        handlePrevious={previous}
      />
    },
    time: {
      name: "Tiempo",
      path:
        <Time
          handlePrevious={previous}
        />
    }
  }

  const defaultPage = (
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
  )

  return { currentApp, setCurrentApp, aplications }
}
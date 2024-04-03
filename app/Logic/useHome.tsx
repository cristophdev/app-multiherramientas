import { ReactElement, useState } from "react"
import { Apps } from "../Types/Types"
import Calculator from "../Apps/Calculator"
import CalculatorPro from "../Apps/CalculatorPro"
import Distances from "../Apps/Distances"
import Grades from "../Apps/Grades"
import Information from "../Apps/Information"
import Time from "../Apps/Time"
import Weight from "../Apps/Weight"

export default function useHome() {
  const [currentApp, setCurrentApp] = useState<ReactElement>()

  const aplications: Apps = {
    calculator: {
      name: "Calculadora",
      path: <Calculator />
    },
    calculatorPro: {
      name: "Calculadora Avanzada",
      path: <CalculatorPro />
    },
    distances: {
      name: "Longitudes",
      path: <Distances />
    },
    grades: {
      name: "Grados",
      path: <Grades />
    },
    weight: {
      name: "Masas",
      path: <Weight />
    },
    information: {
      name: "Información",
      path: <Information />
    },
    time: {
      name: "Tiempo",
      path: <Time />
    }
  }

  return { currentApp, setCurrentApp, aplications }
}
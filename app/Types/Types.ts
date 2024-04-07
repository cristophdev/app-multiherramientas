import React, { ReactElement, ReactNode } from "react"

export interface Apps {
  calculator: {
    name: string
    path: ReactElement
  },
  calculatorPro: {
    name: string
    path: ReactElement
  },
  distances: {
    name: string
    path: ReactElement
  },
  grades: {
    name: string
    path: ReactElement
  },
  weight: {
    name: string
    path: ReactElement
  },
  information: {
    name: string
    path: ReactElement
  },
  time: {
    name: string
    path: ReactElement
  }
};

export interface Functionality {
  [unit: string]: number | string
}

export interface Distances extends Functionality {
  Milímetros: number,
  Centímetros: number,
  Decímetros: number,
  Metros: number,
  Decámetros: number,
  Hectómetros: number,
  Kilómetros: number,
}

export interface Grades extends Functionality {
  Celsius: string,
  Fahrenheit: string,
  Kelvin: string
}

export interface Information extends Functionality {
  Bytes: number,
  Kilobytes: number,
  Megabytes: number,
  Gigabytes: number,
  Terabytes: number,
}

export interface Time extends Functionality {
  Segundos: number,
  Minutos: number,
  Horas: number,
  Días: number,
  Semanas: number,
  Meses: number,
  Años: number 
}

export interface Weights extends Functionality {
  Miligramo: number,
  Centigramo: number,
  Decigramo: number,
  Gramo: number,
  Decagramo: number,
  Hectogramo: number,
  Kilogramo: number
}
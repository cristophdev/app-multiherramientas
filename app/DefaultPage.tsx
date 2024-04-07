import { ReactElement } from "react";

export default function DefaultPage({pages}: {pages:ReactElement}) {
  return (
    <div id="default">
      <h1 className="text-2xl font-semibold text-center">Selecciona una aplicación</h1>
      <section className="flex flex-col items-center md:grid md:grid-cols-2 gap-8 mt-10 xl:grid-cols-3">
        {pages}
      </section>
    </div>
  )
}
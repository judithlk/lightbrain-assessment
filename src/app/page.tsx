"use client"

import Header from "@/components/Header"
import Featured from "@/components/Featured"
import Detailed from "@/components/Detailed"
import SearchResult from "@/components/SearchResults"

export default function Home() {

  return(
    <>
      <Header />
      <main className="bg-bg-mid md:bg-bg-one bg-center bg-fixed bg-cover bg-no-repeat relative z-0 py-2 space-y-10">
        <div
          className="absolute inset-0 z-[-1]"
          style={{ backgroundColor: "rgba(230, 230, 230, 0.9)" }}
        />
        <SearchResult />
        <Featured />
        <Detailed />
      </main>
    </>
  )
}
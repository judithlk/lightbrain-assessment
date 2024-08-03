"use client";

import { Suspense } from "react";

import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Detailed from "@/components/Detailed";
import SearchResult from "@/components/SearchResults";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg-mid md:bg-bg-one bg-center bg-fixed bg-cover bg-no-repeat relative z-0 py-2 space-y-10">
        <div
          className="absolute inset-0 z-[-1]"
          style={{ backgroundColor: "rgba(230, 230, 230, 0.9)" }}
        />
        <Suspense
          fallback={
            <div className="container mx-auto p-4">
              Loading search results...
            </div>
          }
        >
          <SearchResult />
        </Suspense>
        <Featured />
        <Detailed />
      </main>
    </>
  );
}

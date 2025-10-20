"use client";

import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import TopControlBar from "@/components/TopControlBar";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  return (
    <>
      <Head>
        <title>Metta Muse - Shop Premium Products Online</title>
        <meta
          name="description"
          content="Browse and shop the latest products from Metta Muse. Leather handbags, kids toys, accessories, and more."
        />
      </Head>

      <Navbar />
      <IntroSection />
      <TopControlBar
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />

      <div style={{ display: "flex" }}>
      {isFilterOpen && <FilterSidebar isFilterOpen={isFilterOpen} />}
      <ProductGrid isFilterOpen={isFilterOpen} />
      </div>

      <Footer />
    </>
  );
}

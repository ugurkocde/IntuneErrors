import React from "react";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";

export default function SearchPage(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  return (
    <Layout title={`Search Results for "${query}"`}>
      <main className="container margin-vert--lg">
        <h1>Search Results</h1>
        {/* Implement your search results display here */}
      </main>
    </Layout>
  );
}

import * as React from "react";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <div className="tag-input">
        <input placeholder="Email Address" />
      </div>
    </Layout>
  );
}

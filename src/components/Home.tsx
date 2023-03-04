import * as React from "react";
import Layout from "./Layout";
import { TagInput } from "./TagInput";

export default function Home() {
  const [tags, setTags] = React.useState<string[]>([]);

  return (
    <Layout>
      <TagInput tags={tags} setTags={setTags} placeholder="Add Email" />
    </Layout>
  );
}

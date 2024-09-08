import { useLoaderData } from "react-router-dom";

export default function TemplatePage() {
  const template = useLoaderData();
  return (
    <div>
      <h2>{template.name}</h2>
      <pre>{template.body}</pre>
    </div>
  );
}

import { useLoaderData } from "react-router-dom";

export default function TypePage() {
  let type = useLoaderData();
  return (
    <div>
      <h1>Type: {type?.name} </h1>
      <h2>Templates:</h2>
      {type?.templates.length === 0 && <p>No templates found</p>}
      {type?.templates.map((template) => {
        return (
          <li key={template._id}>
            <h2>{template.name}</h2>
            <p>{template.body.substring(0, 15) + "..."}</p>
          </li>
        );
      })}
    </div>
  );
}

import { Link } from "react-router-dom";
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
            <Link to={`/templates/${template._id}`}>
              <h3>{template.name}</h3>
              <p>{template.body.substring(0, 50) + "..."}</p>
            </Link>
          </li>
        );
      })}
    </div>
  );
}

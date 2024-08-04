import "./App.css";
import { INode, FileSystemItem } from "./components/FileSystemItem";

const data: INode[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Backend",
        nodes: [],
      },
      {
        name: "Frontend",
        nodes: [{ name: "React" }, { name: "Angular" }, { name: "Vue" }],
      },
      {
        name: "FullStack",
        nodes: [
          {
            name: "MERN",
            nodes: [
              {
                name: "dummy",
              },
            ],
          },
          { name: "MEAN" },
          { name: "MEVN" },
        ],
      },
    ],
  },
  { name: "Shubhaw" },
];

function App() {
  return (
    <ul>
      {data.map((node) => (
        <FileSystemItem node={node} />
      ))}
    </ul>
  );
}

export default App;

import { INode } from "./FileSystemItem.types";
import "./FileSystemItem.styles.css";
import { FaFolder, FaFile, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

interface IFileSystemItemProps {
  node: INode;
}
export const FileSystemItem = (props: IFileSystemItemProps) => {
  const { node } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li key={node.name} className="file-system-list-item">
      <div className="node-name-container">
        {node.nodes ? (
          <>
            <button className="chevron-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
            </button>
            <FaFolder />
          </>
        ) : (
          <FaFile style={{ marginLeft: "22px" }} />
        )}
        {node.name}
      </div>
      {node.nodes && node.nodes.length > 0 && isOpen && (
        <ul className="file-system-list">
          {node.nodes.map((node) => (
            <FileSystemItem node={node} />
          ))}
        </ul>
      )}
    </li>
  );
};

"use client";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import scss from "./ProjectPage.module.scss";

type CopyProps = {
  project: {
    tools: Record<string, string>;
  };
};

export default function Copy({ project }: CopyProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error("Error copying text:", error);
    }
  };

  return (
    <div className={scss.tools}>
      {Object.entries(project.tools).map(([key, value], i) => (
        <div key={i} className={scss.toolsItems}>
          <h3>{key}</h3>
          <div className={scss.apicode}>
            <p>{value}</p>
          </div>
          <div
            className={scss.copy}
            onClick={() => handleCopy(value, key)}
          >
            {copied === key ? (
              <>
                <FiCheck /> Скопировано
              </>
            ) : (
              <>
                <FiCopy /> Копировать
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

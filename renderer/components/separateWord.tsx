import React from "react";

function SeparateWords(props: { string: string }) {
  const words = props.string.split("\n");
  const spanTags = words.map((word) => (
    <span
      className="text-blue-400 hover:text-blue-200 hover:text-sm"
      key={word}
    >
      {word}
    </span>
  ));
  return <div className="flex flex-col">{spanTags}</div>;
}

export default SeparateWords;

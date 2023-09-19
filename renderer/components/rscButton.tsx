import { runLsCommand } from "../utils/runShellCommand";
import SeparateWords from "./separateWord";
import { useState } from "react";

export const RscButton = () => {
  const [output, setOutput] = useState<string>("");

  const handleClick = async () => {
    const response = await runLsCommand();
    setOutput(response);
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
        onClick={handleClick}
      >
        Button
      </button>

      <div className="flex flex-col items-center text-xs text-center text-blue-400  ">
        {/* {output ? <SeparateWords string={output} /> : null} */}
        {output}
      </div>
    </div>
  );
};

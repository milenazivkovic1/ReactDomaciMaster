import React from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard.js";

const CopyButton = ({ textToCopy }) => {
  const [isCopied, handleCopy] = useCopyToClipboard(2000);

  return (

    <button className="dugme-kopiranje" disabled={isCopied} onClick={() => handleCopy(textToCopy)}>
      {isCopied ? "KOPIRANO" : "KOPIRAJ"}
    </button>

  );
};

export default CopyButton;
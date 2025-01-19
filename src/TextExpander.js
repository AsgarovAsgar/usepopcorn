import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 20,
  expanded = false,
  expandButtonText = "Show text",
  collapseButtonText = "Collapse text",
  buttonColor = "blue",
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const text = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const handleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px",
        backgroundColor: "lightgray",
        borderRadius: "4px",
        border: "1px solid gray",
      }}
      className={className}
    >
      <div>
        {text}
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            color: buttonColor,
          }}
          onClick={handleIsExpanded}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </div>
    </div>
  );
}

import { Link } from "./index.js";

// Highlight a matching text from the description
export function Highlighter({ highlight = "", children: text }) {
  const index = text.toLowerCase().indexOf(highlight.toLowerCase());

  if (index >= 0 && highlight.length) {
    const beforeHighlight = text.substring(0, index);
    const highlightedPart = text.substring(index, index + highlight.length);
    const afterHighlight = text.substring(index + highlight.length);

    return (
      <highlight-text>
        {beforeHighlight}
        <Link className="text-blue-500" href="#">
          {highlightedPart}
        </Link>
        {afterHighlight}
      </highlight-text>
    );
  }

  return <>{text}</>;
}

import Props from "./Props";

export default function BookmarkIconFill({
  className = "",
  size = 24,
  fill = "#fff",
}: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      className={className}
      viewBox="-4 -4 24 24"
    >
      <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
    </svg>
  );
}

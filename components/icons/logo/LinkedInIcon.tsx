import Props from "../Props";

export default function LinkedInIcon({
  className = "",
  size = 34,
  fill = "#A8A8A8",
}: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19.75 5.39v13.22a1.14 1.14 0 0 1-1.14 1.14H5.39a1.14 1.14 0 0 1-1.14-1.14V5.39a1.14 1.14 0 0 1 1.14-1.14h13.22a1.14 1.14 0 0 1 1.14 1.14zM8.81 10.18H6.53v7.3H8.8v-7.3zM9 7.67a1.31 1.31 0 0 0-1.3-1.32h-.04a1.32 1.32 0 0 0 0 2.64A1.31 1.31 0 0 0 9 7.71v-.04zm8.46 5.37c0-2.2-1.4-3.05-2.78-3.05a2.6 2.6 0 0 0-2.3 1.18h-.07v-1h-2.14v7.3h2.28V13.6a1.51 1.51 0 0 1 1.36-1.63h.09c.72 0 1.26.45 1.26 1.6v3.91h2.28l.02-4.43z"
        fill={fill}
      ></path>
    </svg>
  );
}

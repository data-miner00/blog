import { useRouter } from "next/router";

export function getStaticSidePath(): string {
  const { asPath } = useRouter();

  const injectedBasePath = process.env.APP_BASE_URL;

  const origin = injectedBasePath
    ? injectedBasePath
    : typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

  const url = `${origin}${asPath}`;

  return url;
}

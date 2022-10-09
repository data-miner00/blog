import fetch from "node-fetch";
import { getEnvironments } from "../../services/getEnvironments";

export function getApiClient() {
  const baseUrl = getEnvironments().baseUrl;

  async function getCheers(article_id: string) {
    const res = await fetch(`${baseUrl}/api/cheers/${article_id}`);
    const { cheers } = (await res.json()) as { cheers: number };
    return cheers;
  }

  return {
    getCheers,
  };
}

export function getApiClient() {
  const baseUrl = `${window.location.protocol}//${window.location.host}`;

  async function incrementCheers(article_id: string) {
    const res = await fetch(`${baseUrl}/api/cheers/${article_id}`, {
      method: "POST",
    });

    return res.ok;
  }

  return {
    incrementCheers,
  };
}

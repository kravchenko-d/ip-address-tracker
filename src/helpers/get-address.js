export async function getAddress(ip = '8.8.8.8') {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_cIbBw5cHPNoqugE7p208zyb3y0bH9&ipAddress=${ip}`,
  );
  return await response.json();
}

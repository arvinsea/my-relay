export default async function handler(req, res) {
  const target = "http://65.109.214.145:443/ray";

  const response = await fetch(target, {
    method: req.method,
    headers: req.headers,
    body: req.method !== "GET" ? req.body : undefined,
  });

  const data = await response.arrayBuffer();

  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  res.send(Buffer.from(data));
}

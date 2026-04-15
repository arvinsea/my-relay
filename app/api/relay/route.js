export default async function handler(req, res) {
  const target = "http://65.109.214.145:443:443/ray";

  try {
    const response = await fetch(target, {
      method: req.method,
      headers: {
        "content-type": req.headers["content-type"] || "",
      },
      body: req.method !== "GET" ? req.body : undefined,
    });

    const data = await response.arrayBuffer();

    res.status(response.status);
    res.setHeader("content-type", "application/octet-stream");
    res.send(Buffer.from(data));

  } catch (err) {
    res.status(500).send("relay error");
  }
}

export const ping = (req, res) => {
  res.json({ status: "ok", message: "Health On Door API running" });
};

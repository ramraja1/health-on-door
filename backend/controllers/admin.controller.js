import Provider from "../models/Provider.js";

export const getAllProviders = async (req, res) => {
  const providers = await Provider.find().populate("owner", "email");
  res.json(providers);
};


export const approveProvider = async (req, res) => {
  const provider = await Provider.findById(req.params.id);
  if (!provider) {
    return res.status(404).json({ message: "Provider not found" });
  }

  provider.status = "APPROVED";
  await provider.save();

  res.json({ message: "Provider approved" });
};

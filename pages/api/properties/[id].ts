import { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "../../../constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    const propertyId = Array.isArray(id) ? id[0] : id;
    console.log("propertyId", propertyId);

    if (!propertyId) {
      return res.status(400).json({ error: "Property ID is required" });
    }

    //SEARCH BY `id` FIELD, NOT INDEX
    const property = PROPERTYLISTINGSAMPLE.find((p) => p.id === propertyId);
    console.log("property", property);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    return res.status(200).json(property);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

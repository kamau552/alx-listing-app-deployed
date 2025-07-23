import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '../../../constants/index';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const index = parseInt(id as string);
  console.log("API Received ID:", id, "→ Parsed Index:", index);

  const property = PROPERTYLISTINGSAMPLE[index];

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  return res.status(200).json(property);
}
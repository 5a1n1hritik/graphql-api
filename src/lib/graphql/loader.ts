import DataLoader from "dataloader";
import data from "@/lib/data/data.json";

export const productLoader = new DataLoader(async (ids) => {
  return ids.map(id => data.find(item => item.id === id));
});


import DataLoader from "dataloader";
import raw from "@/lib/data/data.json";

interface Page {
  id: string;
  meta: {
    id: string;
    name: string;
    slug: string;
    createdAt: number;
    updatedAt: number;
  };
  components: unknown[];
}

interface DataFile {
  pages: Page[];
}

// JSON import ko correct type me cast karte hain
const data = raw as DataFile;

export const pageLoader = new DataLoader<string, Page | undefined>(async (ids) => {
  return ids.map((id) => data.pages.find((page) => page.id === id));
});

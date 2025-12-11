import fs from "node:fs";
import path from "node:path";

const dataFilePath = path.join(process.cwd(), "src/lib/data/data.json");

interface Product {
  id: string;
  [key: string]: unknown;
}

interface Page {
  pageId?: string;
  meta?: {
    slug: string;
    [key: string]: unknown;
  };
  sections?: unknown[];
  id?: string;
  [key: string]: unknown;
}

class ProductService {
  private readData(): Product[] {
    const file = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(file);
  }

  private writeData(data: Product[]): void {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  }

  getAll(): Product[] {
    return this.readData();
  }

  getById(id: string): Product | undefined {
    const data = this.readData();
    return data.find((p) => p.id === id);
  }

  create(input: { title: string; description: string }): Product {
    const data = this.readData();

    const newItem: Product = {
      id: String(data.length + 1),
      ...input,
    };

    data.push(newItem);
    this.writeData(data);

    return newItem;
  }
}

class PageService {
  private readData(): { pages: Page[] } {
    const file = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(file);
  }

  getPageBySlug(slug: string): Page | null {
    const { pages } = this.readData();
    return pages.find((p) => p.meta?.slug === slug) || null;
  }
}

export const pageService = new PageService();
export const productService = new ProductService();

import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/lib/data/data.json");

class ProductService {
  private readData() {
    const file = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(file);
  }

  private writeData(data: any) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  }

  getAll() {
    const data = this.readData();
    return data;
  }

  getById(id: string) {
    const data = this.readData();
    return data.find((p: any) => p.id === id);
  }

  create(input: { title: string; description: string }) {
    const data = this.readData();

    const newItem = {
      id: String(data.length + 1),
      ...input
    };

    data.push(newItem);
    this.writeData(data);

    return newItem;
  }
}

// class PageService {
//   private readData() {
//     const file = fs.readFileSync(dataFilePath, "utf-8");
//     return JSON.parse(file);
//   }

//   private writeData(data: any) {
//     fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
//   }

//   getPage(pageId: string) {
//     const data = this.readData();

//     // data.pages should be an array
//     const pages = data.pages || [];
//     return pages.find((p: any) => p.pageId === pageId) || null;
//   }

//   createPage(input: any) {
//     const data = this.readData();
//     const pages = data.pages || [];

//     const newPage = {
//       pageId: input.pageId,
//       meta: input.meta,
//       sections: input.sections
//     };

//     pages.push(newPage);
//     data.pages = pages;

//     this.writeData(data);
//     return newPage;
//   }

//   updatePage(input: any) {
//     const data = this.readData();
//     const pages = data.pages || [];

//     const idx = pages.findIndex((p: any) => p.pageId === input.pageId);

//     if (idx === -1) {
//       // page missing, create it
//       return this.createPage(input);
//     }

//     pages[idx] = {
//       ...pages[idx],
//       ...input
//     };

//     data.pages = pages;

//     this.writeData(data);
//     return pages[idx];
//   }
// }

class PageService {
  private readData() {
    const file = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(file);
  }

  getPageBySlug(slug: string) {
    const data = this.readData();
    const pages = data.pages || [];

    return pages.find((p: any) => p.meta.slug === slug) || null;
  }
}


export const pageService = new PageService();
export const productService = new ProductService();

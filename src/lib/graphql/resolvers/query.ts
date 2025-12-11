// import { pageService, productService } from "@/lib/product.service";

// // export const Query = {
// //   products: () => productService.getAll(),
// //   product: (_: any, { id }: any) => productService.getById(id)
// // };

// // export const Query = {
// //   page: (_: any, { pageId }: any) => {
// //     if (pageService.pageId === pageId) return page;
// //     return null;
// //   }
// // };

// export const Query = {
//   page: (_: any, { pageId }: any) => {
//     return pageService.getPage(pageId);
//   }
// };

import { pageService } from "@/lib/product.service";

export const Query = {
  getPage: (_: unknown, args: { slug: string }) => {
    return pageService.getPageBySlug(args.slug);
  },
};

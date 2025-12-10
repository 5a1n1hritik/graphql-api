// export const typeDefs = /* GraphQL */ `
//   type Product {
//     id: ID!
//     title: String!
//     description: String!
//   }

//   type Query {
//     products: [Product!]!
//     product(id: ID!): Product
//   }

//   input ProductInput {
//     title: String!
//     description: String!
//   }

//   type Mutation {
//     createProduct(input: ProductInput!): Product!
//   }
// `;

// export const typeDefs = /* GraphQL */ `
//   type Meta {
//     title: String
//     description: String
//   }

//   type Item {
//     icon: String
//     title: String
//     description: String
//     image: String
//     role: String
//     name: String
//     quote: String
//   }

//   type SectionProps {
//     title: String
//     subtitle: String
//     ctaLabel: String
//     ctaLink: String
//     image: String
//     buttonLabel: String
//     buttonLink: String
//     items: [Item]
//   }

//   type Section {
//     component: String
//     props: SectionProps
//   }

//   type Page {
//     pageId: String!
//     meta: Meta
//     sections: [Section]
//   }

//   input MetaInput {
//     title: String
//     description: String
//   }

//   input ItemInput {
//     icon: String
//     title: String
//     description: String
//     image: String
//     role: String
//     name: String
//     quote: String
//   }

//   input SectionPropsInput {
//     title: String
//     subtitle: String
//     ctaLabel: String
//     ctaLink: String
//     image: String
//     buttonLabel: String
//     buttonLink: String
//     items: [ItemInput]
//   }

//   input SectionInput {
//     component: String
//     props: SectionPropsInput
//   }

//   input PageInput {
//     pageId: String!
//     meta: MetaInput
//     sections: [SectionInput]
//   }

//   type Query {
//     page(pageId: String!): Page
//   }

//   type Mutation {
//     createPage(input: PageInput): Page
//     updatePage(input: PageInput): Page
//   }
// `;

export const typeDefs = /* GraphQL */ `
  scalar JSON

  type PageMeta {
    id: ID!
    name: String!
    slug: String!
    createdAt: Float!
    updatedAt: Float!
  }

  type Component {
    id: ID!
    type: String!
    variant: String!
    props: JSON
  }

  type Page {
    id: ID!
    meta: PageMeta!
    components: [Component!]!
  }

  type Query {
    getPage(slug: String!): Page
  }
`;

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createShop: Shop;
  deleteProduct: Product;
  deleteUser: Shop;
  updateProduct: Product;
  updateShop: Shop;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateShopArgs = {
  data: ShopCreateInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: ShopWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateShopArgs = {
  data: ShopUpdateInput;
  where: ShopWhereUniqueInput;
};

export type Product = {
  __typename?: 'Product';
  content?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  shopId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type ProductCreateInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  shopId: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUpdateInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  shopId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['String'];
};

export type ProductsWhereInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  shopId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductsWhereParamsInput = {
  cursor?: Maybe<ProductsWhereInput>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
  where?: Maybe<ProductsWhereInput>;
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  products: Array<Product>;
  shop?: Maybe<Shop>;
  shops: Array<Shop>;
};


export type QueryProductArgs = {
  args: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  args: ProductsWhereParamsInput;
};


export type QueryShopArgs = {
  args: ShopWhereUniqueInput;
};


export type QueryShopsArgs = {
  args: ShopWhereParamsInput;
};

export type Shop = {
  __typename?: 'Shop';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type ShopCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopWhereInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopWhereParamsInput = {
  cursor?: Maybe<ShopWhereInput>;
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
  where?: Maybe<ShopWhereInput>;
};

export type ShopWhereUniqueInput = {
  id: Scalars['String'];
};

export type ProductFragment = { __typename?: 'Product', id: string, title: string, content?: string | null | undefined, imageUrl?: string | null | undefined, published?: boolean | null | undefined, shopId?: string | null | undefined, createdAt: any, updatedAt: any };

export type GetProductsQueryVariables = Exact<{
  args: ProductsWhereParamsInput;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, title: string, content?: string | null | undefined, imageUrl?: string | null | undefined, published?: boolean | null | undefined, shopId?: string | null | undefined, createdAt: any, updatedAt: any }> };

export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  title
  content
  imageUrl
  published
  shopId
  createdAt
  updatedAt
}
    `;
export const GetProductsDocument = gql`
    query getProducts($args: ProductsWhereParamsInput!) {
  products(args: $args) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

export function useGetProductsQuery(options: Omit<Urql.UseQueryArgs<GetProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetProductsQuery>({ query: GetProductsDocument, ...options });
};
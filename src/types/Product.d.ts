export interface ProductImageEntity {
  http: string
  https: string
}

export interface Product {
  payment_option_html: string
  activation_date: string
  release: string
  available: string
  has_variation: string
  deactivation_date: string
  price: string
  model: string
  id: string
  brand: string
  slug: string
  available_in_store: string
  created: string
  available_for_purchase: string
  AdditionalInfos?: null[] | null
  brand_id: string
  Variant?: null[] | null
  release_date: string
  kit_has_variation: string
  name: string
  id_campaign: string
  ProductImage: ProductImageEntity[]
  availability: string
  video: string
  hot: string
  ean: string
  related_categories?: null[] | null
  category_id: string
  upon_request: string
  ncm: string
  payment_option: string
  url: {
    https: string
  }
  is_kit: string
  additional_button: string
  virtual_product: string
  promotional_price: string
  deactivation_status_history: string
  payment_option_details: { value: string }[]
}

export interface ProductsEntity {
  Product: Product
}

export interface Weather {
  Products: ProductsEntity[]
}

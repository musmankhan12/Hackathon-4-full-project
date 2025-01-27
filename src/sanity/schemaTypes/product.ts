export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
        Rule.required().error('Name is required'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
        Rule.required().error('Slug is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
        Rule.required().error('Price is required'),
    },
    {
      name: 'oldPrice',
      type: 'string',
      title: 'Old Price',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: { max: (val: number) => { warning: (msg: string) => void } }) =>
        Rule.max(150).warning('Keep the description under 150 characters.'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: {
        min: (val: number) => { max: (val: number) => { warning: (msg: string) => void } };
      }) =>
        Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: { min: (val: number) => { error: (msg: string) => void } }) =>
        Rule.min(0).error('Stock level must be a positive number.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
        Rule.required().error('Category is required'),
    },
  ],
};

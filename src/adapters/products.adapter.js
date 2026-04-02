export const productAdapter = (product) => {
  const { id, title, description, price, images } = product

  const productAdapted = {
    id: id,
    title: title,
    description: description,
    price: price,
    imageUrl: images[0],
  }
  return productAdapted
}

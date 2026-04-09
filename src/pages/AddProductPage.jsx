import './AddProductPage.css'

function AddProductPage() {
  return (
    <div className="add-product-page">
      <div className="add-product-card">
        <div className="add-product-header">
          <p className="add-product-eyebrow">Panel de Creación de Productos</p>
          <h1>Agregar nuevo producto</h1>
          <p className="add-product-subtitle">Completa los datos del producto para publicarlo en la tienda.</p>
        </div>
        <form className="add-product-form">
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Zapatillas Voladoras"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="120"
                min="0"
                step="1"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="categoryId">Categoría</label>
              <select
                id="categoryId"
                name="categoryId"
                defaultValue=""
                required
              >
                <option
                  value=""
                  disabled
                >
                  Selecciona una categoría
                </option>
                <option value="1">Ropa</option>
                <option value="2">Electrónica</option>
                <option value="3">Muebles</option>
                <option value="4">Zapatos</option>
                <option value="5">Otros</option>
              </select>
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Para llegar más rápido al trabajo"
                required
              ></textarea>
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="imageUrl">Imagen (URL)</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://picsum.photos/600/400"
                required
              />
            </div>
          </div>
          <div className="form-actions">
            <button
              type="submit"
              className="primary-button"
            >
              Guardar producto
            </button>
            <button
              type="reset"
              className="secondary-button"
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProductPage

const faker = require('faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
      for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl()
      })
    }
  }

  create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id === id); //Me devuelve la posicion del objeto
    if(index === -1){
      throw new Error('Producto no encontrado');
    }
    const product = this.products[index];
    this.products[index]= {
      ...product,
      ...changes//De esta manera ersiste lo que tengo en producto pero se cambia lo que tenga de cambios
    };
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item => item.id === id); //Me devuelve la posicion del objeto
    if(index === -1){
      throw new Error('Producto no encontrado');
    }
    this.products.splice(index, 1);//Splice nos permite encontrar una posicion y cuantos elementos se quieren eliminar
    return {message: 'El producto se eliminó exitosamente ', id};
  }
}

module.exports = ProductsService;

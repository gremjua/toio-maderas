# Toio Maderas
E-commerce desarrollado para un taller de carpintería. Es una SPA desarrollada en React y JS, utilizando Material UI.
La aplicación contiene una lista de productos que pueden filtrarse por categoría. Al hacer click en un producto, se abre la vista del detalle del mismo. Allí puede agregarse al carrito.
Luego de llenar sus datos, el usuario puede realizar la compra de los productos deseados y pagar a través de Mercadopago.

## Demo
Puede interactuarse con la aplicación en [https://toio-maderas.netlify.app/](https://toio-maderas.netlify.app/).

## Requerimientos
Esta aplicación ha sido desarrollada en `Node v12.18.3`. Se recomienda instalar esta misma versión antes de ejecutar la aplicación localmente.
## Uso
1. Clonar este repo
```sh
git clone https://github.com/gremjua/toio-maderas.git
```
2. Navegar al directorio `toio-maderas`
```sh
cd toio-maderas
```
3. Instalar dependencias
```sh
npm i
```
4. Correr la aplicación
```sh
npm start
```
Este comando correrá la aplicación localmente. Podrá interactuar con la aplicación desde un navegador, yendo a la URL [http://localhost:3000](http://localhost:3000).

## Dependencias
- [Material UI](https://material-ui.com/) para un desarrollo rápido y con buen diseño, sin preocuparse mucho por los estilos.
- [Formik](https://formik.org/) para la validación sencilla y eficiente de formularios.

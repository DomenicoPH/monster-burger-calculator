<img src="./public/img/readmeshow.png" alt="Project preview – Monster Burger Order & Tip Calculator" />

# 🍔 Monster Burger – Order & Tip Calculator

[Live Demo: monsterburgerorders.netlify.app](https://monsterburgerorders.netlify.app/)

**Monster Burger – Order & Tip Calculator** es una aplicación frontend desarrollada con **React + Vite + TypeScript** que simula la creación de una orden en un restaurante y el cálculo automático de propinas.

El proyecto está pensado como una **demo funcional y educativa**, enfocada en buenas prácticas modernas de React: **useReducer**, **tipado estricto con TypeScript**, **cálculos derivados con hooks de React** y **UI moderna con Tailwind CSS v4**.

---

## Características principales

- **Carta de productos interactiva** (hamburguesas)
- Agregar un producto varias veces incrementa su **cantidad**
- **Resumen de la orden** en tiempo real
- Cálculo automático de:
  - Subtotal
  - Propina (10%, 20% o 50%)
  - Total final
- Eliminación de productos individuales
- Reinicio completo de la orden
- Interfaz moderna y responsive

---

## Tecnologías utilizadas

### Frontend

- **React 19**
- **Vite**
- **TypeScript** (tipado estricto)
- **Tailwind CSS v4** (CSS-first)
- **React Icons**

### Herramientas de desarrollo

- ESLint
- TypeScript Compiler (`tsc`)
- Vite Preview

---

## Arquitectura y enfoque

El proyecto está organizado siguiendo principios de **separación de responsabilidades** y **componentización clara**.

### Componentes principales

- `MenuItem` → Renderiza cada producto del menú
- `OrderContents` → Lista los productos añadidos a la orden
- `TipPercentageForm` → Selección del porcentaje de propina
- `OrderTotals` → Cálculo y visualización de totales

Cada componente recibe únicamente las props necesarias, manteniendo una API clara y predecible.

---

## Gestión de estado con useReducer

Toda la lógica de negocio está centralizada mediante **useReducer**, permitiendo manejar un estado más complejo de forma predecible y escalable.

El reducer controla:

- Estado de la orden (`order`)
- Estado de la propina (`tip`)
- Agregar productos
- Incrementar cantidades
- Eliminar productos
- Reiniciar la orden

### Ventajas de este enfoque

- ✅ Lógica centralizada en un único reducer
- ✅ Patrón ideal para estados complejos
- ✅ Reducers fácilmente escalables
- ✅ Flujo de datos más predecible

---

## Cálculos derivados

Los cálculos de subtotal, propina y total se realizan usando **`useMemo`**, evitando recomputaciones innecesarias:

- Subtotal = suma de `(precio × cantidad)`
- Propina = `subtotal × porcentaje`
- Total = `subtotal + propina`

Esto garantiza **mejor rendimiento** y **código más expresivo**.

---

## Tipado con TypeScript

El proyecto utiliza **tipos centralizados** para mayor consistencia:

```ts
export type MenuItem = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export type OrderItem = MenuItem & {
  quantity: number;
};
```

Beneficios:

- Seguridad en tiempo de desarrollo
- Mejor autocompletado
- Menos errores en runtime

---

## Helpers

Se incluye un helper reutilizable para formateo de moneda:

```ts
formatCurrency(quantity: number)
```

Basado en `Intl.NumberFormat`, asegura un formato correcto y consistente para precios en USD.

---

## ▶ Ejecutar el proyecto localmente

Clona el repositorio e instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Compilar para producción:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

---

## Objetivo del proyecto

Este proyecto forma parte de un **portfolio frontend**, con el objetivo de demostrar:

- Manejo de estado complejo con useReducer
- Arquitectura limpia y mantenible
- Tipado sólido con TypeScript
- Diseño de UI con Tailwind CSS moderno
- Buenas prácticas en React

---

## Licencia

Este proyecto es de uso libre con fines educativos y demostrativos.

---

**Domenico Pagano <dpaganoh@gmail.com>**  

Desarrollado como proyecto de práctica y portfolio frontend.  
💼 [Domenico Pagano Portafolio](https://portfolio-gnomono.vercel.app/)
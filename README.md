# react-lite-carousel

react-lite-carousel is a lightweight and minimalistic carousel component for React, designed to be simple, fast, and easy to integrate into your projects.

## Features
- 📦 Lightweight: Minimal dependencies to keep your project size small.
- ⚡ Fast and performant: Optimized for smooth transitions and quick rendering.
- 🎨 Customizable: Simple props to control the behavior of the carousel.

## Installation

```bash
npm install react-lite-carousel
```
or using **Yarn**:
```bash
yarn add react-lite-carousel
```

## Examples

### Basic Usage

Here's a basic example of how to use the Carousel component directly in your React project:

```js
import { ReactLiteCarousel } from 'react-lite-carousel';

function App() {
  return (
    <ReactLiteCarousel>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </ReactLiteCarousel>
  )
}
```

### With Autoplay

```js
<ReactLiteCarousel autoPlay autoPlayInterval={5000}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</ReactLiteCarousel>
```

### Custom Styling
```js
<ReactLiteCarousel 
  containerWidth="80%"
  btnBackgroundColor="#000000"
  btnArrowColor="#FFFF00"
  btnRounded={true}
>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</ReactLiteCarousel>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | node | required | The slides to be rendered in the carousel. |
| autoPlay | boolean | false | Whether the carousel should automatically cycle through slides. |
| autoPlayInterval | number | 3000 | The interval (in milliseconds) between slide transitions when autoPlay is true. |
| displayButtons | boolean | true | Whether to display the next and previous navigation buttons. |
| containerWidth | string \| null | null | The width of the carousel container. If null, it defaults to 100%. |
| btnBackgroundColor | string | '#757575' | The background color of the navigation buttons. |
| btnArrowColor | string | '#FFFFFF' | The color of the arrow icons in the navigation buttons. |
| btnRounded | boolean | false | Whether the navigation buttons should have rounded corners. |

## Development

If you want to contribute and run the project locally, here are the steps to get started:

1. Clone the repository:
```bash
git clone https://github.com/Tony-S201/react-lite-carousel.git
```
```bash
cd react-lite-carousel
```

2. Install dependencies:
```bash
npm install
```
or using **Yarn**:
```bash
yarn install
```

3. Run the development server:
```bash
npm start
```

4. Build:
```bash
npm run build
```
This will generate the transpiled files in the **dist** folder.

## Bug and issues

If you encounter any issues, feel free to open an issue on GitHub:
[https://github.com/Tony-S201/react-lite-carousel/issues](https://github.com/Tony-S201/react-lite-carousel/issues)

## Thank you for using React Lite Carousel! 🎉

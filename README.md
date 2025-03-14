# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Optimizing Vanilla JS Scripts with Document Fragments](#optimizing-vanilla-js-scripts-with-document-fragments)
  - [Why Use Document Fragments?](#why-use-document-fragments)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshots

#### Desktop View

![Desktop View](/assets/screenshots/screenshot-large.png)

#### Mobile View

![Mobile View](/assets/screenshots/screenshot-mobile.png)

#### Tablet View

![Tablet View](/assets/screenshots/screenshot-tablet.png)

#### Hover State

![Hover State](/assets/screenshots/screenshot-hover.png)

Added with the help of Firefox Developer Edition browser. [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)

### Links

- Solution URL: [View Solution on GitHub](https://github.com/LivexTwin/time-tracking-dashboard)
- Live Site URL: [View Live Site](https://time-tracking-dashboard-lt.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### Optimizing Vanilla JS Scripts with Document Fragments

I learned how to optimize Vanilla JS scripts using techniques such as document fragments, which are particularly helpful for managing long loops of DOM manipulation.

By using a document fragment, you can minimize reflows and repaints in the browser, resulting in better performance when adding multiple elements to the DOM.

Here’s an example of how I implemented this approach:

```js
const frag = document.createDocumentFragment(); // Create a document fragment to hold all the items

dataArray.forEach((item) => {
  const gridItem = document.createElement("div");
  const styleDiv = document.createElement("div");
  const dataDiv = document.createElement("div");

  // Populate the child elements (styleDiv and dataDiv) with content
  styleDiv.textContent = item.style;
  dataDiv.textContent = item.data;

  gridItem.appendChild(styleDiv);
  gridItem.appendChild(dataDiv);

  frag.appendChild(gridItem); // Append grid item to the fragment
});

container.appendChild(frag); // Append the fragment to the container
```

Of course, you can skip all this functionality by using a modern framework, but for this small frontend mentor challenge, it's great knowledge to understand exactly what these tools are using under the hood.

### Why Use Document Fragments?

Using a document fragment is better than manually appending each child element directly to the container for several reasons:

1. **Performance**: When you append elements directly to the DOM one by one, the browser performs reflows and repaints for each addition. By using a document fragment, you build the structure in memory first and append it to the DOM in one go, reducing the number of reflows.

2. **Efficiency**: This approach minimizes the number of operations on the live DOM, leading to improved performance, especially when dealing with a large number of elements.

3. **Cleaner Code**: Document fragments can help simplify your code by allowing you to manipulate a collection of nodes without having to deal with the live DOM until you're ready to render the final result.

In summary, document fragments are a powerful tool for optimizing DOM manipulation and improving performance in your JavaScript applications.

### Continued Development

I started optimizing my Frontend Mentor projects as well as my personal projects because, why not? I figured that since they are being deployed to the web, even simple optimizations can greatly improve user experience.

For example, I’ve been using tools like [Cloudinary's Image to WebP](https://cloudinary.com/tools/image-to-webp) to optimize images and improve loading times. Additionally, I check performance with [PageSpeed Insights](https://pagespeed.web.dev/) to identify further areas for enhancement.

### Resources

- [MDN Web Docs: DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) - This resource provided a comprehensive overview of the DocumentFragment API, helping me understand its benefits and use cases.
- [JSFiddle](https://jsfiddle.net/) - An excellent online code editor that allows for quick testing and sharing of JavaScript, HTML, and CSS snippets. It’s a great tool for prototyping and collaboration.

Bonus: If I were feeling a little lazier, [Alpine.js](https://alpinejs.dev/) would have been perfect for this small-scale Frontend Mentor challenge. It offers a simple way to add interactivity to my projects without the overhead of a full framework.

## Author

- Website - [Anthony Molina](https://a-is-lt.com)
- Frontend Mentor - [@LivexTwin](https://www.frontendmentor.io/profile/LivexTwin)

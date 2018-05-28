export default (markup, initialData, isProduction) => {
  const css = '\n      <link rel="stylesheet" href="static/build/main.css">';
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Example</title>${isProduction ? css : ''}
      <script type="application/javascript">
        window.initialData = ${JSON.stringify(initialData)};
      </script>
    </head>
    <body>
      <div id="app">${markup}</div>
      <script src="static/build/main.js"></script>
    </body>
  </html>`;
};

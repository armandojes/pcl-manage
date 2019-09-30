function Layout (properties) {
  return (`<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <base href="${BASEURL}">
      <meta charset="utf-8">
      <title>PCL</title>
      <link rel="stylesheet" href="${ASSETS}/styles.css" />
    </head>
    <body>
      <div id="render_target">
      </div>
      <script src="${ASSETS}/client.js"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin" media="all">
    </body>
  </html>`)
}
 export default Layout;

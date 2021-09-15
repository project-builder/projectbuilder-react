/**
 * Creates the root index file for the project.
 * @param title The title of the project
 */
const createHTML = (title: string) =>
`
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="./reset.scss">
  </head>
  <body>
    <div id="root"></div>
    <script src='./app/index.jsx'></script>
  </body>
</html>
`

export default createHTML

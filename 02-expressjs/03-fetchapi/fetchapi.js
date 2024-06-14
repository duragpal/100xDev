<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <script>
    // function getAnimalData() {
    //   fetch("https://fakerapi.it/api/v1/persons") //by default get request
    //     .then(function (response) {
    //       response.json()
    //         .then(function (finalData) {
    //           console.log(finalData)
    //         })
    //     })
    // }

    async function getAnimalData() {
      const response = await fetch("https://fakerapi.it/api/v1/persons") //by default get request
      const finalData = await response.json()

      console.log(finalData)

    }
  </script>
  <button onclick="getAnimalData()">Get Animal Data</button>
</body>

</html>
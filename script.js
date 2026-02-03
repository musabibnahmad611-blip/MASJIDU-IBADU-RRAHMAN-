
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="description" content="Affordable and professional web design">
  <meta name="keywords" content="web design, affordable web design, professional web design">
  <meta name="author" content="Brad Traversy">
  <title>مسجد عباد الرحمان | Welcome</title>
  <link rel="stylesheet" href="./css/style.css">
  <link rel="icon" href="img/favicon.png">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    header {
      background: #333;
      color: #fff;
      padding: 10px 0;
    }

    header a {
      color: #fff;
      text-decoration: none;
    }

    nav ul {
      list-style: none;
      padding: 0;
    }

    nav ul li {
      display: inline;
      margin: 0 10px;
    }

    .highlight {
      color: #f90;
    }

    footer {
      background: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    button {
      padding: 10px;
      background: #f90;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <div id="branding">
        <h1><span class="highlight">مسجد عباد الرحمان </span> </h1>
      </div>
      <nav>
        <ul>
          <li class="current"><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section>
    <h1>MASJIDU IBADU-RRAHMAN</h1>
    <p> KWALKWOTA, </p>
    <ul>
      <li>MINNA,</li>
      <li>NIGER STATE.</li>
      <li> Sheikh KHIDR HASHIM ABUBAKAR</li>
    </ul>
  </section>

  <img src="https://example.com/lion.jpg" alt="A lion image">
  <button id="button1" onclick="myFunction()"> Click Me! </button>

  <footer>
    <p>© Mus'ab Ibn Ahmad@2026</p>
  </footer>

  <script>
    function myFunction() {
      alert('Button clicked! Welcome to مسجد عباد الرحمان');
    }
  </script>
</body>
</html>
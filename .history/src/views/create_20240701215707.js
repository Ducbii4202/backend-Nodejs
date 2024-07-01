<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create A User</title>
  <link rel="stylesheet" href="/css/styles.css" />

</head>

<body>
  <div class="topnav">
    <a class="active" href="/">Home</a>
    <a href="/news">Create Users</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
  </div>
  <div class="form-add-new">
    <form action="/create-user" method="post">
      <fieldset>
        <legend>Add new Users</legend>

        <div class="input-group">
          <label>Email:</label>
          <input type="text" name="email" />
        </div>
        <div class="input-group">
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div class="input-group">
          <label>City</label>
          <input type="text" name="city" />
        </div>
        <div>
          <button>
            Save
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</body>

</html>
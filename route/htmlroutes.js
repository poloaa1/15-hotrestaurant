let path = require("path");

module.exports = (app)=> 
{
  app.get("/tables", (req, res)=> 
  {
    res.sendFile(path.join(__dirname, "../frontend/tables.html"));
  });

  app.get("/reserve", (req, res)=> 
  {
    res.sendFile(path.join(__dirname, "../frontend/reserve.html"));
  });

  app.get("/*", (req, res)=> 
  {
    res.sendFile(path.join(__dirname, "../frontend/home.html"));
  });
};

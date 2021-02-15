hexo.on("generateBefore", () => {
  require("./data")(hexo);
  // Merge config.
  require("./config")(hexo);
});

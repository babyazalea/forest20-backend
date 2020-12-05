export const postUpload = (req, res) => {
  const {
    body: { portfolioTitle, portfolioDescription },
  } = req;
  console.log(portfolioTitle, portfolioDescription);
  res.end();
};

const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();
app.use(express.json())

const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`),
);

app.get("/api/v1/nfts", (req, res) => {
  res.status(200).json({
    status: "success",
    results: nfts.length,
    data: { nfts: nfts },
  });
});

app.post("/api/v1/nfts", (req, res) => {
//   console.log(req);
 const newId = nfts[nfts.length - 1] +1;  
 const newNFTs = Object.assign({id:newId},req.body);
 nfts.push(newNFTs);
 fs.writeFileSync(`${__dirname}/nft-data/data/nft-simple.json`,JSON.stringify(nfts),err=>{
    res.status(201).json({
        status: "success",
        nfts: newNFTs,
    })
 });
//  res.send("POST NFT");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

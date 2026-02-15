"use client";

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import Category from "@/components/Category";
import Brand from "@/components/Brand";
import NFTDetailsPage from "@/components/NFTDetailsPage";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";

const NFTdetail = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const params = useParams();   

  const [nft, setNft] = useState(null);

  useEffect(() => {
    const loadNFT = async () => {
      const allNFTs = await fetchNFTs();

      console.log("PARAM ID:", params.id);

      const selectedNFT = allNFTs.find(
        (item) => Number(item.tokenId) === Number(params.id)
      );

      if (selectedNFT) {
        setNft(selectedNFT);
      }
    };

    if (params?.id) {
      loadNFT();
    }
  }, [params, fetchNFTs]);

  if (!nft) return <div>Loading...</div>;

  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTdetail;

"use client";

import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Category from "@/components/Category";
import Brand from "@/components/Brand";
import NFTDetailsPage from "@/components/NFTDetailsPage";

const NFTdetail = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const [nft, setNft] = useState(null);

  useEffect(() => {
    const nftData = searchParams.get("nft");

    if (nftData) {
      const parsed = JSON.parse(decodeURIComponent(nftData));
      setNft(parsed);
    }
  }, [searchParams]);

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

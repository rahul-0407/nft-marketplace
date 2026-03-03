"use client";

import React, { Suspense, useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { NFTMarketplaceContext } from "@/context/NFTMarketplaceContext";
import Button from "@/components/Button";

const ReSellTokenContent = () => {
  const { currentAccount, createSale } = useContext(NFTMarketplaceContext);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const tokenURI = searchParams.get("tokenURI");

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);
    setImage(data.image);
  };

  useEffect(() => {
    if (tokenURI) {
      fetchNFT();
    }
  }, [tokenURI]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, image, id);
      router.push(`/author/${currentAccount}`);
    } catch (error) {
      console.log("error while resell", error);
    }
  };

  return (
    <div className="w-full my-16">
      <div className="w-[60%] mx-auto">
        <h1 className="text-5xl font-bold">ReSell Your Token, Set Price</h1>

        <div className="mt-8">
          <label className="block ml-4 font-bold text-lg">Price</label>

          <input
            type="number"
            min={1}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="reSell Price"
            className="
              w-full mt-2 p-4
              border border-(--icons-color)
              rounded-xl
              bg-transparent outline-none
              placeholder:text-(--icons-color)
            "
          />
        </div>

        <div className="my-16">
          {image && (
            <img
              src={image}
              alt="resell nft"
              width={400}
              height={400}
              className="rounded-xl"
            />
          )}
        </div>

        <div className="my-16">
          <Button btnName="Resell NFT" handleClick={resell} />
        </div>
      </div>
    </div>
  );
};

const ReSellToken = () => {
  return (
    <Suspense
      fallback={<div className="w-full my-16 text-center">Loading...</div>}
    >
      <ReSellTokenContent />
    </Suspense>
  );
};

export default ReSellToken;

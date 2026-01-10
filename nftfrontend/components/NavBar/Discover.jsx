import React from "react";
import Link from "next/link";

const Discover = () => {
  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Searc", link: "search" },
    { name: "Author Profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account-setting" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div
          key={i}
          className="
            px-4 py-2
            transition-all duration-300 ease-in
            z-[22222222222]
            hover:bg-[var(--icons-color)]
            hover:text-[var(--shadow-dark-color)]
            hover:rounded-[0.3rem]
          "
        >
          <Link href={`/${el.link}`}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;

import React from "react";
import UploadNFT from "@/components/UploadNFT";

const UploadNFT = () => {
  return (
    <div className="uploadNFT">
      <div class="uploadNFT_box">
        <div class="uploadNFT_heading">
          <h1>Create new NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div class="uploadNFT_box_title">
            <h2>Image, Video, Audio, or 3D Model</h2>
            <p>File types supported: JPG, PNG, GIF, SVG, MP4, WAV, OGG, GBL, GLTF. Max Size: 100MB</p>
        </div>

        <div class="uploadNFT_box_for">
            <UploadNFT/>
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;

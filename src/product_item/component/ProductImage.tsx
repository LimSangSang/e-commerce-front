import React, { useState, useEffect } from "react";
import Image from "next/image";
import { flex_css } from "../../../shared/styles/shared";
import { css } from "@emotion/react";
import DefaultImage from "../../images/default-image.png";
import { makeStyles } from "@mui/material";

interface Props {
  images: string[];
}

const image_css = {
  image: css({
    marginTop: 20,
    marginRight: 20,
  }),
  zoom: css({
    transition: "1s",
    "&:hover": {
      transform: "scale(1.5)",
    },
  }),
};

const ProductImage = ({ images }: Props) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);

  const onClickImage = async (imageUrl: string) => {
    setSelectedImg(imageUrl);
  };

  useEffect(() => {
    console.log("===click===");
    setSelectedImg(images[0]);
  }, [images]);

  return (
    <div css={flex_css.flex_column}>
      <Image
        src={selectedImg || DefaultImage}
        height={800}
        width={600}
        alt="detail-image"
        placeholder="blur"
        blurDataURL="../../images/default-image.png"
        // priority
        // css={image_css.zoom}
      />
      <div css={flex_css.flex_row}>
        {images.length > 0 &&
          images.map((x, i) => {
            return (
              <div
                key={i}
                css={image_css.image}
                onClick={() => onClickImage(x)}
              >
                <Image src={x} height={80} width={60} alt="detailImg" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductImage;

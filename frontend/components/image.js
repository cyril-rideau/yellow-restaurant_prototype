import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
    if (image.data == null) {
        /*console.log("IMAGE")
        console.log(image)*/
        return null
    }

    const { alternativeText, width, height } = image.data.attributes;

    return (
        <NextImage
            layout="responsive"
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(image)}
            alt={alternativeText || ""}
        />
    );
};

export default Image;
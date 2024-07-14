import noImage from "../assets/noImage.png"


interface Prop {
    imageUrl: string;
    width?: number;
    height?: number;
}


const getCroppedImageUrl = ({ imageUrl, width = 600, height = 400 }: Prop) => {
    if (!imageUrl) return noImage;

    const target = "media/";
    const index = imageUrl.indexOf(target) + target.length;
    return imageUrl.slice(0, index) + "crop/" + width + "/" + height + "/" + imageUrl.slice(index);
}

export default getCroppedImageUrl;


interface Prop {
    url: string;
    width?: number;
    height?: number;
}


const getCroppedImageUrl = ({ url, width = 600, height = 400 }: Prop) => {
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/" + width + "/" + height + "/" + url.slice(index);
}

export default getCroppedImageUrl;
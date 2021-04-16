
export const hideImage = (setViewImage: Function, setSelectedImage: Function) => {
    setViewImage(false);
    setSelectedImage('');
};


export const showImage = (setViewImage: Function, setSelectedImage: Function, image: string) => {
    setViewImage(true);
    setSelectedImage(image);
};

export const changeImage = (setShowModal: Function, setMainImages: Function, mainImages: any, selectedImage: string, setAction: Function) => {
    setShowModal(false);
    setAction('');
    setTimeout(() => {
        setMainImages({ ...mainImages, 'main-one': selectedImage });
    }, 100);
};


export const countSelecteds = (array: any) => {
    let selected = 0;
    array.forEach((image: any) => selected = image.selected ? selected + 1 : selected);
    return selected === 4 ? '#075E54' : 'gray';
};
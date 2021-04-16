import React, { useState, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { changeImage, showImage, hideImage, countSelecteds } from '../../utils/Modal';
import { Container } from './Styles';

const Modal = () => {

    const { images, setShowModal, mainImages, setMainImages, action, setAction } = useContext(ModalContext);

    const [viewImage, setViewImage] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [modalImages, setModalImages] = useState(images);
    const [textImage, setTextImage] = useState({ description: '', image: '', show: false });
    const [bgsend, setBgsend] = useState('gray');
    const imageHeight = action && '130px';
    const sendClass = bgsend === '#075E54' && 'active-button';
    const bgSend2 = textImage.description ? '#075E54' : 'gray';
    const sendClass2 = bgSend2 === '#075E54' && 'active-button';


    const closeModal = () => {
        setShowModal(false);
        setAction('');
    };

    const selectImage = (index: number) => {
        const newImages = modalImages;
        newImages[index]['selected'] = !newImages[index]['selected'];
        setModalImages(newImages);
        const shadow = document.getElementById(`shadow${index}`);
        shadow.classList.toggle('hidden');
        setBgsend(countSelecteds(newImages));
    };

    const changeImagesBgTwo = () => {
        const saveChanges = bgsend === '#075E54';
        if (saveChanges) {
            const images = modalImages.filter((image: any) => image.selected);
            setTimeout(() => {
                setMainImages({ ...mainImages, 'main-two': images });
            }, 100);
            closeModal();
        };
    };

    const selectImageWithText = (image: any) => setTextImage({ ...image, show: true });
    const changeTextImage = (e) => setTextImage({ ...textImage, description: e.target.value });
    const hideImageWithText = () => setTextImage({ description: '', image: '', show: false });
    const saveTextWhithImage = () => {
        if (textImage.description) {
            setTimeout(() => {
                setMainImages({ ...mainImages, 'main-four': textImage});
            }, 100);
            closeModal();
        };
    };

    return (
        <Container selectedImage={selectedImage} imageHeight={imageHeight} bgSend={bgsend} bgSend2={bgSend2}>
            <section className='modal-options m-auto relative'>

                <div className="modal-header flex justify-between text-white p-2">
                    <p className='font-bold'>Cargar imagen</p>
                    <div className="close-modal flex justify-center items-center cursor-pointer rounded-full" onClick={closeModal}>X</div>
                </div>

                <div className='flex flex-wrap images-container'>
                    {modalImages?.map((image: any, index: number) => (
                        <div className='modal-image-container relative' key={`image-${index}`}> <img className='modal-image cursor-pointer' src={image.image} alt="image"
                            onClick={() => !action ? showImage(setViewImage, setSelectedImage, image.image) : action === 'images' ? selectImage(index) : selectImageWithText(image)}
                        />
                            {action === 'images' && (
                                <div id={`shadow${index}`} className="shadow-image absolute text-white flex justify-center items-center hidden"
                                    onClick={() => action === 'images' && selectImage(index)}
                                >✓</div>
                            )}
                        </div>
                    ))}
                    {action === 'images' && (
                        <div className={`absolute flex justify-center items-center rounded-full second-send cursor-pointer ${sendClass}`}
                            onClick={changeImagesBgTwo}
                        >
                            <i className="fas fa-paper-plane text-white  send-icon" />
                        </div>
                    )}
                </div>

                {(!action && viewImage) && (
                    <div className="selected-image absolute w-full flex justify-center items-center">
                        <i className="fas fa-arrow-left absolute text-white p-1"
                            onClick={() => hideImage(setViewImage, setSelectedImage)} />
                        <div className="send-button absolute flex justify-center items-center rounded-full"
                            onClick={() => changeImage(setShowModal, setMainImages, mainImages, selectedImage, setAction)}>
                            <i className="fas fa-paper-plane text-white" />
                        </div>
                    </div>
                )}

                {textImage.show && (
                    <div className="selected-image-text flex absolute w-full">
                        <img className='image-text' src={textImage.image} alt="phone-img" />
                        <textarea className='description' name="description" value={textImage.description} onChange={changeTextImage}>
                            {textImage.description}
                        </textarea>
                        <i className="fas fa-arrow-left absolute p-1 left-arrow cursor-pointer" onClick={hideImageWithText} />
                        <div className={`finish-button absolute flex justify-center items-center rounded-full cursor-pointer ${sendClass2}`}
                            onClick={saveTextWhithImage}
                        >
                            <i className="fas fa-paper-plane text-white pr-1" />
                        </div>
                    </div>
                )}

            </section>
        </Container >
    );
};

export default Modal;
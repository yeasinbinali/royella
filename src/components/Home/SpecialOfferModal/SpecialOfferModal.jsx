import React, { useState } from 'react';
import Modal from 'react-modal';
import discount from '../../../../images/discount.png';

const SpecialOfferModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal
            className='w-1/3 mx-auto bg-complex mt-10 p-10 text-center'
            isOpen={isOpen}
            onRequestClose={closeModal}
        >
            <img src={discount} className='w-full h-full' alt="" />
            <p className='text-xl mt-5'><span className='font-bold'>10% discount</span> on every room throughout the month</p>
        </Modal>
    )
}

export default SpecialOfferModal;
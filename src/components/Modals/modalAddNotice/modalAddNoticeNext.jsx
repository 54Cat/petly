// import { useState } from 'react';
// // import { useDispatch } from 'react-redux';

// import Modal from 'react-modal';
// import CloseIcon from '@mui/icons-material/Close';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { BtnAddFileIcon } from 'components/Modals/ModalAddsPet/AddsPetForm/AddsPetModalStyled';



// import {
//     AddNoticeWrapper,
//     Textarea,
//     AddNoticeTitle,
//     AddNoticeForm,
//     SubmitBtnList,
//     FormLabel,
//     ModalStyle,
//     CloseBtn,
//     SubmitBtn,
//     FormInput,
//     AddFoto,
//     FieldPhoto,

// } from './modalAddNoticeStyled';

// export const ModalAddNoticeNext = () => {
//     // const dispatch = useDispatch();
//     // const [sex, setSex] = useState('');
//     // const [location, setLocation] = useState('');
//     // const [price, setPrice] = useState('');
//     // const [breed, setBreed] = useState('');
//     const [modalIsOpen, setIsOpen] = useState(false);

//    Modal.setAppElement('#root');

//     function openModal() {
//         setIsOpen(true);
//     }

//     function closeModal() {
//         setIsOpen(false);
//     }

// return (
//       <AddNoticeWrapper>
//           <div onClick={openModal} id="button">
//               <AddCircleIcon />
//           </div>
//           <ModalStyle
//             isOpen={modalIsOpen}          
//             onRequestClose={closeModal}
//             style={{ overlay: { background: 'rgba(17, 17, 17, 0.6' } }}
//             contentLabel="Modal add notice"          
//           >              
//             <CloseBtn
//                 type="submit"
//                 onClick={closeModal}
//                 aria-label="close"
//             >
//                 <CloseIcon />
//             </CloseBtn>                
//                   <AddNoticeTitle>Add pet</AddNoticeTitle>               
          
//           <AddNoticeForm onSubmit={handleSubmit}>
//               <FormLabel htmlFor="locationInputId">
//                   Location <span>*</span>:</FormLabel>
//               <FormInput
//                   type="text"
//                   name="locationInput"
//                   placeholder="Type location"                 
//                 //   onChange={handleChange}
//                 //   id={locationInputId}
//               />
//               <FormLabel htmlFor="priceInputId">Price<span>*</span>:</FormLabel>
//               <FormInput
//                   type="number"
//                   name="priceInput"
//                   placeholder="Type price"               
//                 //   onChange={handleChange}
//                 //   id={priceInputId}
//               />
//               <FormLabel>Load the pet's image</FormLabel>
//               <AddFoto htmlFor="PetsPhoto">
//                 <BtnAddFileIcon />
//                 <FieldPhoto
//                     id="PetsPhoto"
//                     type="file"
//                     name="PetsPhoto"
//                 />               
//               </AddFoto>

//               <FormLabel htmlFor="comments">Comments</FormLabel>
//               <Textarea
//                 type="text"
//                 name="comments"
//                 placeholder="Type comment"
//                 as="textarea"                  
//               />
//             <SubmitBtnList>
//               <SubmitBtn onClick={closeModal} type="submit">
//                   Back
//               </SubmitBtn>
//               <SubmitBtn type="submit">Done</SubmitBtn>
//             </SubmitBtnList>
//           </AddNoticeForm>
              
//           </ModalStyle>
//       </AddNoticeWrapper>
//     );


// }

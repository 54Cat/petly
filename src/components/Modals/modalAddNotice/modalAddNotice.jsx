// import { useState, useMemo } from 'react';
// import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
// import Modal from 'react-modal';
// import CloseIcon from '@mui/icons-material/Close';

// import {
//   AddNoticeWrapper,
//   CloseBtn,
//   AddNoticeTitle,
//   Text,
//   ModalStyle,
//   CategorierList,
//   CategoriesBtn,
//   AddNoticeForm,
//   FormInput,
//   FormLabel,
//   SubmitBtnList,
//   SubmitBtn,
// } from './modalAddNoticeStyled';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

// export const ModalAddNotice = () => {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//     const [namePet, setNamePet] = useState('');
//     const [birth, setBirth] = useState('');
//     const [breed, setBreed] = useState('');
//     const [modalIsOpen, setIsOpen] = useState(false);

//     Modal.setAppElement('#root');

//     function openModal() {
//         setIsOpen(true);
//     }

//     // function afterOpenModal() {
//     //     // references are now sync'd and can be accessed.
//     //     color = '#f00';
//     // }

//     function closeModal() {
//         setIsOpen(false);
//     }

//     const handleChange = e => {
//         const title = e.target.title;
//         const value = e.target.value;
//         switch (title) {
//             case 'inputTitle':
//                 setTitle(value);
//                 break;

//             case 'inputNamePet':
//                 setNamePet(value);
//                 break;

//             case 'inputBirth':
//                 setBirth(value);
//                 break;

//             case 'inputBreed':
//                 setBreed(value);
//                 break;

//             default:
//                 return;
//         }
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         dispatch({ title, namePet, birth, breed });
//         setTitle('');
//         setNamePet('');
//         setBirth('');
//         setBreed('');
//         // должна очищаться и открывать следующую форму
//     };

//     const titleInputId = useMemo(() => nanoid(), []);
//     const namePetInputId = useMemo(() => nanoid(), []);
//     const birthPetInputId = useMemo(() => nanoid(), []);
//     const breedInputId = useMemo(() => nanoid(), []);

//     return (
//       <AddNoticeWrapper>
//           <div onClick={openModal} id="button">
//               <AddCircleIcon />
//           </div>
//           <ModalStyle
//             isOpen={modalIsOpen}
//             // onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={{ overlay: { background: 'rgba(17, 17, 17, 0.6' } }}
//           contentLabel="Modal add notice"          
//           >              
//             <CloseBtn
//                 type="submit"
//                 onClick={closeModal}
//                 aria-label="close"
//             >
//                 <CloseIcon />
//             </CloseBtn>
//                   {/* <CloseBtn type="submit" ><CloseIcon  sx={{ fontSize: 20 }} /></CloseBtn> */}
//                   <AddNoticeTitle>Add pet</AddNoticeTitle>
//                   <Text>
//                       Lorem ipsum dolor sit amet, consectetur Lorem ipsum
//                       dolor sit amet, consectetur
//                   </Text>
//           <CategorierList>
//             <CategoriesBtn type="submit">In good hands</CategoriesBtn>
//             <CategoriesBtn type="submit">lost/found</CategoriesBtn>
//             <CategoriesBtn type="submit">sell</CategoriesBtn>
//           </CategorierList>

//           <AddNoticeForm onSubmit={handleSubmit}>
//               <FormLabel htmlFor="titleInputId">
//                   Tittle of ad <span>*</span>
//               </FormLabel>
//               <FormInput
//                   type="text"
//                   name="inputTitle"
//                   placeholder="Type name"
//                   value={title}
//                   onChange={handleChange}
//                   id={titleInputId}
//               />
//               <FormLabel htmlFor="namePetInputId">Name pet</FormLabel>
//               <FormInput
//                   type="text"
//                   name="inputNamePet"
//                   placeholder="Type name pet"
//                   value={namePet}
//                   onChange={handleChange}
//                   id={namePetInputId}
//               />

//               <FormLabel htmlFor="birthPetInputId">
//                   Date of birth
//               </FormLabel>
//               <FormInput
//                   type="data"
//                   name="inputBirth"
//                   placeholder="Type date of birth"
//                   value={birth}
//                   onChange={handleChange}
//                   id={birthPetInputId}
//               />

//               <FormLabel htmlFor="breedInputId">Breed</FormLabel>
//               <FormInput
//                   type="text"
//                   name="inputBreed"
//                   placeholder="Type breed"
//                   value={breed}
//                   onChange={handleChange}
//                   id={breedInputId}
//               />
//             <SubmitBtnList>
//               <SubmitBtn onClick={closeModal} type="submit">
//                   Cancel
//               </SubmitBtn>
//               <SubmitBtn type="submit">Next</SubmitBtn>
//             </SubmitBtnList>
//           </AddNoticeForm>
              
//           </ModalStyle>
//       </AddNoticeWrapper>
//     );
// };

import { Formik, ErrorMessage } from 'formik';
import {
    StyledPicker,
    ButtonCloseModal,
    ButtonCloseIcon,
    Title,
    ErrorText,
    ModalItem,
    FlexBox,
    StyledLabel,
    FormStyled,
    FieldStyled,
    CancelBtn,
    NextBtn,
    LabelBox,
} from '../AddsPetForm/AddsPetModalStyled';
import * as yup from 'yup';
//import { DatePickerField } from 'components/Datapicker/Datapicker';
const cyrillic = /[A-Za-z]/;
const validationSchema = yup.object({
    name: yup
        .string()
        .min(2)
        .max(16)
        .required()
        .matches(cyrillic, 'only Latin letters'),
    birthday: yup.string().required(),
    breed: yup
        .string()
        .min(2)
        .max(16)
        .required()
        .matches(cyrillic, 'only Latin letters'),
});

const StepOne = props => {
    const FormError = ({ name }) => {
        return (
            <ErrorMessage
                name={name}
                render={message => <ErrorText>{message}</ErrorText>}
            />
        );
    };

    const handleSubmit = data => {
        props.next(data);
        console.log(props);
    };

    const { onClose } = props;
    return (
        <Formik
            //enctype="multipart/form-data"
            initialValues={props.data}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <ModalItem>
                    <ButtonCloseModal type="button" onClick={() => onClose()}>
                        <ButtonCloseIcon />
                    </ButtonCloseModal>
                    <FormStyled>
                        <Title>Add pet</Title>
                        <LabelBox>
                            <StyledLabel htmlFor="name">
                                Name pet
                                <FieldStyled
                                    type="text"
                                    name="name"
                                    placeholder="Type name pet"
                                />
                            </StyledLabel>
                        </LabelBox>
                        <FormError name="name" />
                        <LabelBox>
                            <StyledLabel htmlFor="birthday">
                                Date of birth
                                <StyledPicker
                                    type="text"
                                    name="birthday"
                                    placeholder="Type date of birth"
                                />
                            </StyledLabel>
                        </LabelBox>
                        <FormError name="birthday" />

                        <LabelBox>
                            <StyledLabel htmlFor="breed">
                                Breed
                                <FieldStyled
                                    type="text"
                                    name="breed"
                                    placeholder="Type breed"
                                />
                            </StyledLabel>
                        </LabelBox>
                        <FormError name="breed" />
                        <FlexBox>
                            <NextBtn type="submit">Next</NextBtn>
                            <CancelBtn type="button" onClick={() => onClose()}>
                                Cancel
                            </CancelBtn>
                        </FlexBox>
                    </FormStyled>
                </ModalItem>
            )}
        </Formik>
    );
};
export default StepOne;

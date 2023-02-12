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
    names: yup
        .string()
        .min(2)
        .max(16)
        .required()
        .matches(cyrillic, 'only Latin letters'),
    birthdays: yup.string().required(),
    breeds: yup
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
                            <StyledLabel htmlFor="names">
                                Name pet
                                <FieldStyled
                                    type="text"
                                    name="names"
                                    placeholder="Type name pet"
                                />
                            </StyledLabel>
                        </LabelBox>
                        <FormError name="names" />
                        <LabelBox>
                            <StyledLabel htmlFor="birthdays">
                                Date of birth
                                <StyledPicker
                                    type="text"
                                    name="birthdays"
                                    placeholder="Type date of birth"
                                />
                            </StyledLabel>
                        </LabelBox>
                        <FormError name="birthdays" />

                        <LabelBox>
                            <StyledLabel htmlFor="breeds">
                                Breed
                                <FieldStyled
                                    type="text"
                                    name="breeds"
                                    placeholder="Type breed"
                                />
                            </StyledLabel>
                        </LabelBox>
                        <FormError name="breeds" />
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

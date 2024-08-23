import React, { useState } from "react";
import {
  Email,
  Form,
  ModalWrapper,
  Subtitle,
  Title,
  Overlay,
  Wrapper,
  Input,
  SubmitButton,
  CloseModalButton,
  CheckboxGroupWrapper,
  Checkbox,
  CheckboxWrapper,
} from "./styles";
import { useForm } from "@formspree/react";

interface ModalForm {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companyWebsite?: string;
  websiteDesign: boolean;
  seo: boolean;
  digitalMarketing: boolean;
  customProject: boolean;
}

const ContactModal = ({ handleCloseModal }: { handleCloseModal: Function }) => {
  const [modalForm, setModalForm] = useState<ModalForm>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    websiteDesign: false,
    seo: false,
    digitalMarketing: false,
    customProject: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //@ts-ignore
    const { name, value, type, checked } = e.target;

    // If the input is a checkbox, update the state with the checked value
    if (type === "checkbox") {
      setModalForm((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setModalForm((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [state, handleSubmit] = useForm("xeqbwyrb");
  if (state.succeeded) {
    handleCloseModal();
  } else if (state.errors) {
    alert("Something went wrong, please try again.");
  }

  return (
    <Wrapper id="modal">
      <Overlay />
      <ModalWrapper>
        <CloseModalButton onClick={() => handleCloseModal()}>
          {"X"}
        </CloseModalButton>
        <Title>{"Ready to Get Started?"}</Title>
        <Subtitle>
          {"Please fill out the form below or email us at "}
          <Email>{"admin@snowboundlabs.com"}</Email>
          {" to start planning your project."}
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={modalForm.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={modalForm.lastName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="YourEmail@email.com"
            name="email"
            value={modalForm.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={modalForm.companyName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            placeholder="Company Website (if applicable)"
            name="companyWebsite"
            value={modalForm.companyWebsite}
            onChange={handleChange}
          />
          <CheckboxGroupWrapper>
            <div>{"Services You're interested in"}</div>
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                id="website-design"
                name="websiteDesign"
                checked={modalForm.websiteDesign}
                onChange={handleChange}
              />
              <label>{"Website Design"}</label>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                id="seo"
                name="seo"
                checked={modalForm.seo}
                onChange={handleChange}
              />
              <label>{"Search Engine Optimization (SEO)"}</label>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                id="digital-marketing"
                name="digitalMarketing"
                checked={modalForm.digitalMarketing}
                onChange={handleChange}
              />
              <label>{"Digital Marketing"}</label>
            </CheckboxWrapper>
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                id="custom-project"
                name="customProject"
                checked={modalForm.customProject}
                onChange={handleChange}
              />
              <label>{"Custom Project"}</label>
            </CheckboxWrapper>
          </CheckboxGroupWrapper>

          <SubmitButton type="submit">{"Let's Talk!"}</SubmitButton>
        </Form>
      </ModalWrapper>
    </Wrapper>
  );
};

export default ContactModal;

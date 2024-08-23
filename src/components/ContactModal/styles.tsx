import { PageTile } from "@/layouts/HomePage/styles";
import styled from "styled-components";

export const Wrapper = styled(PageTile)`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
`;
export const Overlay = styled.div`
  background-color: black;
  opacity: 0.85;
  position: fixed;
  top: 0px;
  z-index: 9998;
  width: 100%;
  height: 100vh;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  gap: 10px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 32px 16px;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  z-index: 9999;
  border-radius: 5px;
  font-size: 14px;
  @media only screen and (min-width: 767px) {
    gap: 30px;
    width: 100%;
    max-width: 625px;
    padding: 64px 64px;
    font-size: 18px;
  }
  @media only screen and (min-width: 767px) {
    max-width: 725px;
    padding: 64px 64px;
  }
`;

export const Title = styled.div`
  color: #56baa9;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 40.8px */
`;

export const Subtitle = styled.div`
  color: #000;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 30.6px */
`;

export const Email = styled.span`
  color: #8155ba;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 15px;
  flex-direction: column;
  color: #000;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 30.6px */
`;

export const Input = styled.input`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #332d3b;
`;

export const SubmitButton = styled.button`
  display: flex;
  height: 33px;
  align-self: stretch;
  border-style: none;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: rgb(179, 146, 223);
  background: linear-gradient(
    298deg,
    rgba(179, 146, 223, 1) 3%,
    rgba(162, 130, 204, 1) 40%,
    rgba(129, 85, 186, 1) 100%
  );
  color: #fff;
  text-align: center;
  font-family: Space Grotesk;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 34px */
  cursor: pointer;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  border-style: none;
  border-radius: 50%;
  border-width: 2px;
  top: -10px;
  right: -10px;
  z-index: 9999;
  border-color: black;
  width: 30px;
  aspect-ratio: 1;
  background-color: #fff;
  border-style: solid;
  cursor: pointer;
`;

export const CheckboxGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Checkbox = styled.input`
  display: flex;
  width: 15px;
  align-items: baseline;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

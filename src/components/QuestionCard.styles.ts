import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ebfeff;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  height: 40px;
  margin: 5px 0px;
  color: #fff;
  border: 3px solid #ffffff;
  background: ${({ correct, userClicked }) =>
    correct
      ? "linear-gradient(90deg, #56FFA4, #59BC86)"
      : !correct && userClicked
      ? "linear-gradient(90deg, #FF5656, #C16868)"
      : "linear-gradient(90deg, #56ccff, #6eafb4)"};
  border-radius: 10px;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

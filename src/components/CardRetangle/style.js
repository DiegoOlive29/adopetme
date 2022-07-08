import styled from "styled-components";

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  .start-align {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: center;
    max-width: 1000px;
    min-width: 320px;
    width: 80%;
  }

  .page {
    min-height: 39px;
    max-width: 40%;
    background-color: #3b8788;
    border-radius: 17px 17px 0 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    padding: 0 1em;
  }

  .solicitacao {
    color: white;
    font-family: "Fredoka";
    font-size: 100%;
  }
  .card-blue {
    background-color: #4db1b3;
    width: 100%;
    height: auto;
    border-radius: 0 28px 28px 28px;
    display: flex;
    max-width: 1000px;
  }

  .trace-line {
    width: 88%;
    height: 2px;
    background-color: white;
    position: absolute;
    margin-left: 4px;
  }

  .trace-up {
    width: 2px;
    height: auto;
    background-color: white;
  }

  .card-p,
  .card-p-block {
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: white;
    padding: 10px;
    display: block;
  }

  .nul {
    color: #4db1b3;
  }

  .div {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }

  input,
  label,
  img,
  .p-hide {
    display: none;
  }

  @media (min-width: 1025px) {
    .solicitacao {
      font-size: 20px;
    }
    .card-p-block {
      display: none;
    }
    input {
      background-color: #3b8788;
      border: solid white 2px;
      border-radius: 6px;
      color: white;
      padding: 6px;
      width: 280px;
      margin-top: 17px;
      margin-left: 16px;
      display: block;
      ::placeholder {
        color: white;
      }
    }
    label {
      color: white;
      margin-left: 16px;
      display: block;
    }

    .container-inputs {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      flex-direction: column;
    }

    span {
      border-radius: 8px;
      border: solid white 2px;
      width: 285px;
      height: 31px;
      background-color: #3b8788;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .p-hide {
      display: block;
    }
    img {
      margin-top: 38px;
      display: block;
    }
  }
`;

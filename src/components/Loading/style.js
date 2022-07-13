import styled from "styled-components";

export const SpinnerContainer = styled.div`
  .spinner {
    height: 50px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    font-size: 18px;
    font-weight: 600;
    font-family: monospace;
    letter-spacing: 1em;
    color: var(--orange);
    -webkit-filter: drop-shadow(0 0 10px);
    filter: drop-shadow(0 0 10px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .spinner span {
    -webkit-animation: loading6454 1.75s ease infinite;
    animation: loading6454 1.75s ease infinite;
  }

  .spinner span:nth-child(2) {
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }

  .spinner span:nth-child(3) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  .spinner span:nth-child(4) {
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
  }

  .spinner span:nth-child(5) {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  .spinner span:nth-child(6) {
    -webkit-animation-delay: 1.25s;
    animation-delay: 1.25s;
  }

  .spinner span:nth-child(7) {
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }

  @-webkit-keyframes loading6454 {
    0%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    50% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }

  @keyframes loading6454 {
    0%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    50% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }
`;

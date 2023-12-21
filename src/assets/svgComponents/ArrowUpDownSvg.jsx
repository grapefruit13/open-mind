import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: 1.4rem;
  height: 1.4rem;

  path {
    fill: ${props => props.fill};
  }
`;

function ColoredArrowImg({ isFolded }) {
  return (
    <StyledSVG>
      {isFolded ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L18.5303 9.53033C18.8232 9.23744 18.8232 8.76256 18.5303 8.46967C18.2374 8.17678 17.7626 8.17678 17.4697 8.46967L12 13.9393L6.53033 8.46967C6.23744 8.17678 5.76256 8.17678 5.46967 8.46967C5.17678 8.76256 5.17678 9.23744 5.46967 9.53033L11.4697 15.5303Z"
            fill="#818181"
          />
        </svg>
      )}
    </StyledSVG>
  );
}

export default ColoredArrowImg;

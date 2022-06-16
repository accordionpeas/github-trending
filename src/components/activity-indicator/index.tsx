import { StyledWrapper } from './styled'

const size = 50

const ActivityIndicator = () => (
  <StyledWrapper style={{ width: size, height: size }}>
    <svg width="100%" height="100%" viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="#000">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="6">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18" />
        </g>
      </g>
    </svg>
  </StyledWrapper>
)

export default ActivityIndicator

import { ClipLoader } from 'react-spinners'

function LoadingDisplay() {
  return (
    <div className="loadingDisplay">
      <ClipLoader size={120} speedMultiplier={0.7} />
    </div>
  )
}

export default LoadingDisplay

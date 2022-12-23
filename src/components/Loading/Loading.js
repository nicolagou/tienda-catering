import { Spinner } from "react-bootstrap";
import './Loading.css'

const Loading = () => {
  return (
    <div className="loadingPadre">
        <div className="loadingHijo">
        <Spinner/>
        </div>
    </div>
  )
}

export default Loading
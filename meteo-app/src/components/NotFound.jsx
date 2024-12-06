import { useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="text-center py-5 bg-color vh-100">
      <h1 className="text-center text-light">Sono in NOTFOUND, 404</h1>
      <Button
        onClick={() => {
          navigate('/')
        }}
        className="ms-3 p-2 px-3 mt-3 btn-outline-warning bg-dark border-0"
      >
        Torna in home
      </Button>
    </div>
  )
}

export default NotFound

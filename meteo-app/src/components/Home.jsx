import '../App.css'
import React, { useState } from 'react'
import {
  Form,
  Button,
  Container,
  Alert,
  Card,
  Col,
  CardText,
  CardBody,
  Row,
} from 'react-bootstrap'
import {
  Sun,
  CloudSun,
  CloudRain,
  CloudSnow,
  ThermometerHalf,
  Thermometer,
  Droplet,
  Wind,
  Cloud,
  Sunrise,
  Sunset,
} from 'react-bootstrap-icons'

const Home = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Funzione per gestire la ricerca
  const handleSearch = () => {
    console.log('Avvio ricerca meteo per la città:', city)

    setLoading(true)
    setError('')

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c213aae94d24bcb33da8a0f54e3d6e1&units=metric`
    )
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Città non trovata')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Dati meteo ricevuti:', data)
        setWeather(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Errore nella fetch:', error)
        setError(error.message)
        setLoading(false)
      })
  }

  // Funzione per determinare l'icona in base alle condizioni meteo
  const getWeatherIcon = (description) => {
    if (description.includes('clear')) {
      return <Sun size={50} color="yellow" />
    } else if (description.includes('cloud')) {
      return <CloudSun size={50} color="gray" />
    } else if (description.includes('rain')) {
      return <CloudRain size={50} color="blue" />
    } else if (description.includes('snow')) {
      return <CloudSnow size={50} color="lightblue" />
    } else {
      return <Sun size={50} color="gray" />
    }
  }

  return (
    <Container className="d-flex justify-content-center flex-column align-items-center py-5">
      <Form className="d-flex mb-5 mt-3">
        <Form.Control
          type="search"
          placeholder="Nome città"
          className="me-2 border-black"
          aria-label="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="outline-warning" onClick={handleSearch}>
          Cerca
        </Button>
      </Form>

      {loading && <div>Caricamento...</div>}

      {error && <Alert variant="danger">{error}</Alert>}

      {weather && (
        <Card className="shadow-lg rounded mb-4">
          <Card.Body className="text-center bg-warning text-white">
            <Card.Title className="fs-3">Meteo {weather.name}</Card.Title>
            <Card.Text className="d-flex justify-content-center align-items-center">
              {getWeatherIcon(weather.weather[0].description)}
              <span className="fs-2 ms-3">{weather.main.temp}°C</span>
            </Card.Text>
          </Card.Body>
          <Card.Body className="row text-center mt-2 pb-0">
            <Col sm={6} md={4} lg={4}>
              <CardText className="mb-1 fw-semibold">Media Minima</CardText>
              <Thermometer className="fs-4 mb-2 text-info" />
              {weather.main.temp_min}°C
            </Col>
            <Col sm={6} md={4} lg={4}>
              <CardText className="mb-1 fw-semibold">Media Massima</CardText>
              <ThermometerHalf className="fs-4 mb-2 text-danger" />
              {weather.main.temp_max}°C
            </Col>
            <Col sm={6} md={4} lg={4}>
              <CardText className="mb-0 fw-semibold">Condizione:</CardText>
              {weather.weather[0].description}
            </Col>
            <Col sm={6} md={4} lg={4} className="mt-3">
              <CardText className="mb-0 fw-semibold">Umidità</CardText>
              <Droplet className="fs-5 mb-2 text-primary" />
              {weather.main.humidity}%
            </Col>
            <Col sm={6} md={4} lg={4} className="mt-3">
              <CardText className="mb-0 fw-semibold">Venti</CardText>
              <Wind className="fs-5 mb-2 text-secondary" />
              {weather.wind.speed} km/h
            </Col>
            <Col sm={6} md={4} lg={4} className="mt-3">
              <CardText className="mb-0 fw-semibold">Nuvole</CardText>
              <Cloud className="fs-5 mb-2 text-muted" />
              {weather.clouds.all}%
            </Col>
          </Card.Body>
          <CardBody className="pt-0">
            <Row>
              <Col className="d-sm-flex justify-content-sm-around">
                <Col className="text-center mt-4" md={6}>
                  <Sunrise className="fs-4 text-warning" />
                  <CardText className="mb-0 fw-semibold">
                    Alba ore:{' '}
                    <span className="fw-normal">
                      {new Date(
                        weather.sys.sunrise * 1000
                      ).toLocaleTimeString()}
                    </span>
                  </CardText>
                </Col>
                <Col className="text-center mt-4" md={6}>
                  <Sunset className="fs-4 text-danger" />
                  <CardText className="mb-0 fw-semibold">
                    Tramonto ore:{' '}
                    <span className="fw-normal">
                      {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </CardText>
                </Col>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}

      {/* Mostra l'immagine solo se non ci sono dati meteo */}
      {!weather && (
        <img
          src="/assets/images/images.jpg"
          alt="Logo"
          width="400px"
          className="my-5 img-fluid img-sm"
        />
      )}
    </Container>
  )
}

export default Home

import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import './Calendar.css';

function Calendar() {
  return (
    <div data-testid="calendar" className="d-flex flex-row align-items-center">
        <div className="col-md-2 offset-md-1 p-2">
          <MDBCard data-testid="card-lunes" style={{ maxWidth: '22rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Lunes</MDBCardTitle>
            <MDBCardText>--comidas--</MDBCardText>
            <MDBBtn>+</MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-md-2 p-2">
          <MDBCard data-testid="card-martes" style={{ maxWidth: '22rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Martes</MDBCardTitle>
            <MDBCardText>--comidas--</MDBCardText>
            <MDBBtn>+</MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-md-2 p-2">
          <MDBCard data-testid="card-miercoles" style={{ maxWidth: '22rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Miércoles</MDBCardTitle>
            <MDBCardText>--comidas--</MDBCardText>
            <MDBBtn>+</MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-md-2 p-2">
          <MDBCard data-testid="card-jueves" style={{ maxWidth: '22rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Jueves</MDBCardTitle>
            <MDBCardText>--comidas--</MDBCardText>
            <MDBBtn>+</MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-md-2 p-2">
          <MDBCard data-testid="card-viernes" style={{ maxWidth: '22rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Viernes</MDBCardTitle>
            <MDBCardText>--comidas--</MDBCardText>
            <MDBBtn>+</MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </div>
      </div>
  );
}

export default Calendar;
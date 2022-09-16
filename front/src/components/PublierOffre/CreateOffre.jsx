import React from "react";
import "../styles/Modal.css";

import FormOffre from "./Form/FormOffre";

function CreateOffre() {
   
    const close=()=> {

      document.getElementById('annonceform').style.display='none';    
  
  }
  return (
    <div className="modalBackground" id="annonceform">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={close}
          >
            X
          </button>
        </div>
        <Container className="h-100">
        {/* <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
        <Row>
          {
            submitted ?
            <Card>
              <Card.Body>
                <p>Covoiturage bien publier!</p>
              </Card.Body>
              <Card.Footer>
                <Button onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            </Card> :
          <Card>
            <Card.Body>
              <MultiStepForm
                list={questions}
                step={index}
                onPageUpdate={onPageAnswerUpdate}
                pagesAnswers={pagesAnswers}
                />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button onClick={prevButton} disabled={index == 1}>Retour</Button>
              <Button onClick={nextButton}>{index == totalPagesCount ? 'Publier' : 'Continuer'}</Button>
            </Card.Footer>
          </Card>
        }
        </Row> */}

    

      </Container>
      </div>
    </div>
  );
}

export default CreateOffre;
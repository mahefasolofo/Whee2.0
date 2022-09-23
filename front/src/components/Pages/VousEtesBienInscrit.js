import React from 'react'

function VousEtesBienInscrit() {
    return (<>
        <h1>CG Congrats modal</h1>
        {/* Modal */}
        <div className="modal fade in" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <canvas
                height={1}
                id="confetti"
                width={1}
                style={{ display: "none" }}
              />
              <canvas id="drawing_canvas" />
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="anim_container">
                  <canvas
                    id="myCanvas"
                    data-completed={100}
                    data-width={200}
                    data-height={200}
                    height={170}
                  />
                  <div className="toto" />
                  <div id="count" className="round">
                    <div className="num">15700</div>
                  </div>
                  <div className="tata">
                    <p>V</p>
                  </div>
                </div>
                <h1 className="modal-title">Congratulations!</h1>
                <h3 className="modal-subtitle sub1">You finished the level</h3>
                <h3 className="modal-subtitle sub2">"Beginner Manager"</h3>
              </div>
              <div className="modal-footer">
                <div className="modal-footer-text">
                  <p>
                    Your course is considered completed but
                    <br />
                    by finishing more content and activities
                  </p>
                  <p className="next-level">
                    115 points remaining
                    <br />
                    to finish ‘‘ Advance Manager ’’ level (1000 pts)
                  </p>
                </div>
                <button type="button" className="btn btn-goal" data-dismiss="modal">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      )
}

export default VousEtesBienInscrit

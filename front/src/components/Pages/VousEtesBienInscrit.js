import React from 'react'

function VousEtesBienInscrit() {
    return (<div>

        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-6"> {" "}
                    <button type="button" className="btn btn-lg btn-warning" data-toggle="modal" data-target="#myModal">
                        Open Congratulations card Modal
                    </button>
                    {" "} </div>
            </div>
        </div>
        <div className=" fade" id="myModal" role="dialog">
            <div className="modal-dialog">
                <div className="card">
                    <div className="text-right cross"> {" "}
                        <i className="fa fa-times"/>{" "} </div>
                    <div className="card-body text-center"> {" "}
                        <img src="https://img.icons8.com/bubbles/200/000000/trophy.png"/>
                        <h4>CONGRATULATIONS!</h4>
                        <p>
                            You have been personally selected to take part in our 2017 annual visitors
                                                                                                            survey!
                        </p>
                        {" "}
                        <button className="btn btn-out btn-square continue">CONTINUE</button>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default VousEtesBienInscrit

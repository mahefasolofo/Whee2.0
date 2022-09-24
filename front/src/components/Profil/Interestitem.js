import React from 'react'

export default function Interestitem({interest}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 item"
                        style={
                            {
                                width: 125,
                                height: 125,
                                marginTop: 15,
                                borderRadius: 15
                            }
                    }>
                        <div style={
                            {
                                width: 110,
                                height: 110,
                                marginTop: 10,
                                borderRadius: 15,
                                paddingLeft: 15,

                                backgroundImage: 'url(' + interest.imageCI + ')'
                            }
                        }>
                            <label htmlFor="" className="labelCentreInteretProfil">
                                {interest.nomCI}
                            </label>
                    </div>
                    </div>
  )
}

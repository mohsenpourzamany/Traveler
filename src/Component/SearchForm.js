import React from 'react'

const SearchForm = () => {
  return (
    <div className="mb-5">
                        <div className="bg-white" style={{"padding": "30px"}}>
                            <div className="input-group">
                                <input type="text" className="form-control p-4" placeholder="Keyword"/>
                                <div className="input-group-append">
                                    <span className="input-group-text bg-primary border-primary text-white"><i
                                            className="fa fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default SearchForm;
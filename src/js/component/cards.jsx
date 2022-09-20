import React from "react";

export const Cards = () => {

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 pb-5 mx-4 px-2">
        <div className="col">
          <div className="card h-100">
            <img src="http://placeimg.com/450/300/nature" alt="" />
            <div className="card-body m-3 text-center">
              <h5 className="card-title p-3 m-2">Card title</h5>
              <p className="card-text m-2">
              Arcu sagittis pharetra blandit cras magna diam litora curae eros, conubia ut risus mi posuere vestibulum aliquam est duis, magnis netus fringilla praesent euismod orci feugiat condimentum. 
              </p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="http://placeimg.com/450/300/animals" alt="" />
            <div className="card-body m-3 text-center">
              <h5 className="card-title p-3 m-2">Card title</h5>
              <p className="card-text m-2">
              Purus turpis cras odio mi litora placerat interdum ac pellentesque, erat fusce phasellus nulla ante tortor netus faucibus, curabitur non viverra varius conubia etiam nascetur felis.
              </p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="http://placeimg.com/450/300/people" alt="" />
            <div className="card-body m-3 text-center">
              <h5 className="card-title p-3 m-2">Card title</h5>
              <p className="card-text m-2">
              Lobortis vitae nulla habitant sed accumsan leo iaculis maecenas pretium non placerat magna, velit convallis tempor tincidunt nostra dui primis pulvinar at auctor. 
              </p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="http://placeimg.com/450/300/tech" alt="" />
            <div className="card-body m-3 text-center">
              <h5 className="card-title p-3 m-2">Card title</h5>
              <p className="card-text m-2">
              Congue est dapibus dictumst inceptos lacus magna praesent maecenas augue, montes class hac convallis sodales sociis urna vestibulum.
              </p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
      </div>
    )
}
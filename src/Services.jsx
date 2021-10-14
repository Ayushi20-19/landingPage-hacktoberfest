import React from "react";
import Card from "./components/Cards/Card";
import Sdata from "./Sdata";

function Services() {
  return (
    <>
      <div className='my-5 text-center'>
        <h1>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {Sdata.map((val, id) => {
                return <Card key={id} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

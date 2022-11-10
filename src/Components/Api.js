import axios from "axios";
import { useEffect } from "react";

export const Api = () => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOjIsImlkIjoxODY4OSwiaWF0IjoxNjMxNTI2NTY4LCJpc3MiOiJwcmltZS1zZXJ2aWNlIn0.XM_eG-lbl8xy5wRo1yVELDFuce8cVBVTIJLT02C-ujk";
  let payload={
      type: 0,
      truckNumber: null,
      vin: null,
      plate: null,
      subCompany_Id: null,
      pageSize: 50,
      pageIndex: 0,
      sortDirection: "ASC",
      sortExpression: "truckNumber"
    }
    let headers={
          "Content-Type":"applicaton/json",
          Authorization: "Bearer " + token,
    }
    useEffect(() => {
    axios
      .post("https://api.etruckingsoft.com/ets/api/truck/getTruckListbyCompany",payload,{headers})
      .then((response) => {
        console.log("response-- " + JSON.stringify(response));
      });
  }, []);

  return <></>;
};

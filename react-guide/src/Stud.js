import React from "react";
import Form from "./Form/Form";

function Stud() {
  const sendDataToPerent = (hindiMark, mathsMark, scienceMark) => {
    console.log(hindiMark);
    document.write("Hindi mark's is::" + hindiMark + " ");
    document.write("");

    console.log(mathsMark);
    document.write("Maths mark's is::" + mathsMark + " ");
    document.write("");

    console.log(scienceMark);
    document.write("Science mark's is::" + scienceMark + "");
    document.write("");

    calMark(hindiMark, mathsMark, scienceMark);
  };
  const calMark = (hindiMark, mathsMark, scienceMark) => {
    let data =
      (Number(hindiMark) + Number(mathsMark) + Number(scienceMark)) / 3;
    console.log(data);
  };

  return (
    <div>
      <Form sendDataToPerent={sendDataToPerent}></Form>
    </div>
  );
}

export default Stud;

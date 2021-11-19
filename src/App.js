import './App.css';
import { useState } from 'react';
import * as XLSX from "xlsx";
import QRCode from 'react-qr-code'
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  const [items, setItems] = useState([]);


  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {


      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
        const bufferArry = e.target.result;

        const wb = XLSX.read(bufferArry, { type: 'buffer' })

        const wsname = wb.SheetNames[0]

        const ws = wb.Sheets[wsname]

        const data = XLSX.utils.sheet_to_json(ws)

        resolve(data)
      };

      fileReader.onerror = (error) => {
        reject(error)
      }

    })

    promise.then((d) => {

      setItems(d)

    })
  }

  return (

    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand"><b>ID card Generate Website</b></a>
          <label class="d-flex input-group w-auto">
            <b> RollNo Name FatherName Course Batch </b>
          </label>
        </div>
      </nav>

      <div>
        <form class="md-form">
          <div class="file-field" >
            <br />
            <div class="d-flex justify-content-center">
              <div class="btn btn-mdb-color btn-rounded float-left bg-success" >
                <span class="bg-success">Choose file</span>

                <input type="file" onChange={(e) => {
                  const file = e.target.files[0];
                  readExcel(file)
                }} />

              </div>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />
      {/* <br /> */}
      {items.map((v,i) => (
    
      <div class="main">

        <div class="card_front">
          <div class="logo">
            {/* <img src="./backImg.jpg" alt="" /> */}
            {/* <img src="backImg.jpg" /> */}
            <img src="https://bit.ly/3nvoGCq" alt="" />
          </div>

          <div class="border"></div>

          <div class="student_img">
            {/* <!-- <img src="https://bit.ly/30DIUkE" alt=""> --> */}

          </div>

          <div class="name">
            <p>{v.Name}</p>
          </div>

          <div class="student_info">
            <p class="card_num">{v.RollNo}</p>
            <p class="course">{v.Course}</p>
          </div>

        </div>

<br />
<br />
<br />
<br />
        <div class="card_back">

          <div class="info">
            <table>
              <tr>
                <td class="td">Name:</td>
                <td>{v.Name}</td>
              </tr>
              <tr>
                <td class="td">Father Name:</td>
                <td>{v.FatherName}</td>
              </tr>
              <tr>
                <td class="td">Course:</td>
                <td>{v.Course}</td>
              </tr>
              <tr>
                <td class="td">ID:</td>
                <td>{v.RollNo}</td>
              </tr>
              <tr>
                <td class="td">Batch:</td>
                <td>{v.Batch}</td>
              </tr>
            </table>
          </div>

          <div class="office">
            <div class="barcode_div">
              <div class="barcode">
              {<QRCode size="102" value={v.RollNo} />}
              </div>
            </div>

            <div class="signature_div">
              <div class="sign">
                <hr />
              </div>
              <div class="signby">
                <p>Authorized Sign</p>
              </div>

              <div class="fb_id">
                <p><i class="fab fa-facebook"></i>/SaylaniMassTraining</p>
              </div>
            </div>
          </div>

        </div>


      </div>
    // console.log(v.Name)
    ))}

    </div>
  );
}

export default App;



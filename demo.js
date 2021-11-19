<table className="table container">

<tbody>
  {items.map((d) => (

    // <tr key={d.Sno}>
    <div class="" >
      <div class="w-50  float-left" id="idcard">


        <div class="w-50 p-3 float-left " ><img src="https://www.saylaniwelfare.com/public_html/images/saylani/Saylani-logo.png" height="48px" width="" /> </div>
        <div class="w-50 p-3 float-right text-center" id="smitprogram">SAYLANI MASS<br />IT TRAINING PROGRAM</div>


        <div class="w-100 text-center" id="identity"><b>IDENTITY CARD</b> </div>

        <div class="w-75 h-50 float-left" >
          {/* Width 45% */}
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item" id="name">Roll No:</li>
            <li class="list-group-item" id="namedetail">{d.RollNo}</li>
          </ul>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item" id="name">Name:</li>
            <li class="list-group-item" id="namedetail">{d.Name}</li>
          </ul>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item" id="name">Course:</li>
            <li class="list-group-item" id="namedetail">{d.Course}</li>
          </ul>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item" id="name">Batch:</li>
            <li class="list-group-item" id="namedetail">{d.Batch}</li>
          </ul>
        </div>
        <div class="w-25 float-right text-center" id="photo" ><br /><br /><br /><b>Photo</b><br /><br /></div>

      </div>
      Qrcode
      <div class="w-50 float-right" id="qr" >

        <div class="w-50 p-3 float-left " ><img src="https://www.saylaniwelfare.com/public_html/images/saylani/Saylani-logo.png" height="48px" width="" /> </div>
        <div class="w-50 p-3 float-right text-center" id="smitprogram">SAYLANI MASS<br />IT TRAINING PROGRAM</div>
        {/* <div class="w-50 p- float-right text-center" id="Smiit"><b>SMIT</b></div> */}


        <div class="w-100 text-center" id="Qrcode"><b>Roll No.: <u> {d.RollNo}</u></b> </div>
        {/* <QRCode id="abc" value={d.Qrcode} /> */}
        <div id="qrSize">
          <div id="qrSizebox">
            {<QRCode size="139" value={d.RollNo} />}
          </div>


        </div>

      </div>
      c------
    </div>



  ))}
</tbody>
</table>



#idcard{
    border: 1px solid;
    margin-left: -6px;
    padding: 0px;
    margin-bottom: 10px;       
    /* margin bottom */
  }
  #identity{
    
    margin-top: 70px;
    padding: 10px;
    font-size: 25px;
    border:  1px solid rgb(49, 84, 150);
    background-color: rgb(49, 84, 150);
    color: white;
    text-align: center;
    
   
  
  }
  
  #name{
    width: 200px;
    border: 1px solid black;
    font-weight: bold;
  }
  #namedetail{
    border: 1px solid ;
    width: 200%;
    font-weight: bold;
    font-size: 16px;
  }
  #Qrcode{
    
    margin-top: 70px;
    padding: 10px;
    font-size: 25px;
  
  }
  #Smiit{
    font-size: 35px;
  }
  #qrSize{
  height: 166px;
  position: relative;
  }
  #qrSizebox{
    margin: 0;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 130PX;
    width: 140px;
  }
  
  #qr{
    padding-left: 1px;
    padding-right: 1px;
    border: 1px solid;
    height: 302px;
    margin-bottom: 15px;       
    /* margin bottom */
  }
  #smitprogram{
    font-weight: bold;
  font-size: 16px;
  }
  #photo{
    height: 168px;
    border: 1px solid black;
  
  }
  
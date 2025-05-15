
var subActivtiesCount1=0;
var alarmflg = 0;
var timerMasterJson={};
var resultJson={};
function subActivties1()
{
    
    $("#header2").html("<center><span> COMMISSIONING OF THE PLANT </span></center>");

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    let shuffledData = shuffleArray([...plantDocuments.statements]);

    var htm=''
        +'<div class="row">'
        +'<div class="col-sm-2 " id="Selection"></div>'
        +'<div class="col-sm-10 " id="diagram"></div>'
        +'</div>';
    $("#mainDiv").html(htm);
    
    htm='<div class="row">'
    +'<div class="col-sm-12 ">'    
    +'<div class="row justify-content-center" style="margin-bottom:0px;">'
    +'<div class="col-md-10 instruction-box">'
    +'<h5 class="text-center" style="color: #297076;font-weight: 900;font-family: emoji;"> '
    +'1. Which documents (most important) will you collect from the System Integrator or site engineer before starting the commissioning of the plant?'
    +'</h5>'
    +'</div>'
    +'</div>'
    +'<table>'
    +'<thead>'
    +'<tr>'
    +'<th>ACTIVITIES </th>'
    +'<th>STATUS</th>'
    +'</tr>'
    +'</thead>'
    +'<tbody id="output">';
    
    shuffledData.forEach((item, index) => {
        htm+= '<tr>'
            +'<td>'+item.statement+'</td>'
            +'<td> <input type="text" class="stepInput" value="" data-correct="'+item.status+'"></td>'
            +'</tr>';
    });
    
    htm+='</tbody>'
    +'</table>'
    +'<button id="verifyButton" class="btn btn-danger btn1" data-toggle="modal" data-target="#preReq">SUBMIT</button>'
  +'	<!-- 			    The Modal  ProStr -->'
  +'	  <div class="modal fade " id="preReq">'
  +'	    <div class="modal-dialog modal-md" >'
  +'		      <div class="modal-content">'
  +'<!-- 		        Modal Header -->'
  +'		        <div class="modal-header">'
  +'	          <h4 class="modal-title"><center>Message Box</center></h4>'
  +'		          <button type="button" class="close" data-dismiss="modal">&times;</button>'
  +'		        </div>'
  +'<!-- 		        Modal body -->'
  +'		        <div class="modal-body" id="modalMessage" style="color:red">'
  
  +'		        </div>'
  +'<!-- 			        Modal footer -->'
  +'		        <div class="modal-footer">'
  +'	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
  +'		        </div>'
  +'		      </div>'
  +'		    </div>'
  +'		  </div>'
  +'<!-- 			  End Modal ProStr -->'
    
    
    $("#diagram").html(htm);
	var htm=''
	+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
	+'<center><span >PANEL</span></center>'
	+'</div>'
	+'<div class="row">'
	+'<div class="col-sm-6">'
	+'<button id="NextLevel" class="btn btn-danger" style="width:100%"  disabled>Next Level</button>'
//	+'<button id="refMimic" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#refMimicModal" >Mimic</button>'
	+'</div>'
	+'<div class="col-sm-6">'
//	+'<button id="result" class="btn btn-danger" style="width:100%" disabled >Result</button>'
	+'</div>'
	+'</div>'
	$("#Selection").html(htm);
    $("#NextLevel").click(function () {
    	 resultJson.subActivtiesCount1=subActivtiesCount1;
        subActivties2();
       
    });
    
    var attempts = 0;
    const maxAttempts = 4;
    var totalAccuracy = 0;
    
    $(document).ready(function () {
        let attempts = 4;
        const maxAttempts = 3;
        
      // Modal box logic
      var modal = $('#resultModal');
      var span = $('.close');
  
      function showModal(message) {
          $('#modalMessage').html(message);
          modal.css('display', 'block');
      }
  
      span.click(function () {
          modal.css('display', 'none');
      });
  
      $(window).click(function (event) {
          if (event.target === modal[0]) {
              modal.css('display', 'none');
          }
      });
        $(".stepInput").on("blur", function () {
            let enteredValue = $(this).val().trim().toUpperCase();
            let validValues = ["YES", "NO"];
            
            if (!validValues.includes(enteredValue)) {
                toastr.error("Please enter YES or NO.");
                $(this).val('');
                return;
            }
        });
        
        $('#verifyButton').click(function () {
        	subActivtiesCount1++;
            if (attempts <= 0) {
                toastr.error("No attempts remaining.");
                $("#result").prop("disabled", false);
            }
            
            let isValid = true;
            $('.stepInput').each(function () {
                let value = $(this).val().trim().toUpperCase();
                
                if (value === "") {
                    toastr.error("All fields must be filled.");
                    isValid = false;
                    return false;
                }
            });
            
            if (!isValid) return;
            
            let correctCount = 0;
            $(".stepInput").each(function () {
                let userValue = $(this).val().trim().toUpperCase();
                let correctValue = $(this).data("correct");
                
                if (userValue === correctValue) {
                    correctCount++;
                }
            });
            
            if (correctCount === plantDocuments.statements.length) {
            	  showModal("All answers are correct. Click on next level");
                $("#NextLevel").prop("disabled", false);
            } else {
                attempts--;
                if (attempts === 0) {
                    stdtable();
                    $("#NextLevel").prop("disabled", false);
                } else {
//                    toastr.warning(`You still have ${attempts} attempts to identify correctly.`);
                    showModal(`
                          <strong style="color:#153f68;font-size: large;">You still have <b style="color:red;">${attempts}</b> attempts to identify correctly.</strong>
          	   			 `);
                }
            }
        });
        
        function stdtable(){
            var htm=`<div class="row justify-content-center" style="margin-bottom:0px;">
                <div class="col-md-10 instruction-box">
                    <h5 class="text-center" style="color: #297076;font-weight: 900;font-family: emoji;"> 
                  1. Which documents (most important) will you collect from the System Integrator or site engineer before starting the commissioning of the plant?
  
                </div>
                </div>
                <table class="table ">
                    <thead>
                        <tr class="table-info">
                        <th>Statement</th>
                            <th>Required</th>
                            
                        </tr>
                    </thead>
                    <tbody id="dataTable"></tbody>
                </table>`;
                
            $("#diagram").html(htm);
            var tableBody = $("#dataTable");
            plantDocuments.statements.forEach(function (item) {
                var row = `<tr>
                   
                    <td>${item.statement}</td>
                     <td>${item.status}</td>
                </tr>`;
                tableBody.append(row);
            });
        }
    });
}

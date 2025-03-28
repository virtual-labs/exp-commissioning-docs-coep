var seqCount=0;
var alarmflg = 0;
function BoilerSquActivites()
{
        timerMasterJson.instr=$("#counter").text();
		console.log(timerMasterJson);
		seconds = 0;
		updateCounter();
	$("#footerModal").empty();
	//$("#modalForContinue").
	// $(".modal-dialog").removeClass("modal-md").addClass("modal-xl"); // Change modal size
      
	$("#Header").html("	<center><span>SEQUENCE OF EVENTS</span></center>");
	 function shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        // Shuffle statements
        let shuffledData = shuffleArray([...jsonData.statements]);

        // Append to table
//        let tableBody = $("#jsonTable tbody");
        
	var htm=''
//    +'<div class="col-sm-12 note" id="">'
//	+'<b style="font-size:18px;color:#f6f685;">NOTE - </b><span>You are required to arrange these activities as per the phase of the project like pre-engineering, post- Engineering,'
//	+'and Maintenance requirements of the project. These are 11 activities and you will have to number them in a chronological sequence. </span>'

	 +'<div class="row">'
	 +'<center><h5>SEQUENCE OF EVENTS</h5></center>'
	 +'<div class="col-sm-12 " id="">'
	+'<table>'
	+'<thead>'
	+'<tr>'
	+' <th>EVENTS </th>'
	+' <th>SEQUENCE NUMBER</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody id="output">'
	shuffledData.forEach((item, index) => {
           htm+= '<tr>'
             +'<td>'+item.statement+'</td>'
//                +'<td><input type="number" class="stepInput" data-correct="'+item.step_no+'" /></td>'
              +'<td> <input type="number" class=" stepInput" data-min="1" data-max="10" data-correct="'+item.step_no+'"></td>'
           +' </tr>'
   
        });
	 htm+='</tbody>'
	+'</table>'
	+'<button id="verifyButton" class="btn btn-danger btn1" data-toggle="modal" data-target="#preReq">SUBMIT</button>'
	+'<div ></div>'
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
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
//		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-12">'
		+'<button id="refMimic" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#myModal1" disabled>reference Mimic</button>'
		+'</div>'

		+'</div>'
		$("#Selection").html(htm);
// Shuffle function
	
	var attempts = 0;
	const maxAttempts = 4;
	var totalAccuracy = 0;

//	$(document).ready(function () {
//	
//		let attempts = 3;
//
//	    // Modal box logic
//	    var modal = $('#resultModal');
//	    var span = $('.close');
//
//	    function showModal(message) {
//	        $('#modalMessage').html(message);
//	        modal.css('display', 'block');
//	    }
//
//	    span.click(function () {
//	        modal.css('display', 'none');
//	    });
//
//	    $(window).click(function (event) {
//	        if (event.target === modal[0]) {
//	            modal.css('display', 'none');
//	        }
//	    });
//
//	    // Blur event validation
//	    $('.stepInput').on('blur', function () {
//	        let enteredValue = $(this).val();
//	        let minLimit = 1;
//	        let maxLimit = 11;
//
//	        // Check if the input is a number
//	        if (!/^\d+$/.test(enteredValue) || enteredValue.trim() === "") {
//	            if (enteredValue.trim() === "") {
//	                toastr.error("This field cannot be empty. Please enter a valid numerical value.");
//	            } else {
//	                toastr.error("Please enter a valid numerical value.");
//	            }
//	            $(this).val(''); // Clear invalid input
//	            return;
//	            
//	        }
//	        // Validate range
//	        if (enteredValue < minLimit || enteredValue > maxLimit) {
//	            toastr.warning(`Please enter a value between ${minLimit} and ${maxLimit}.`);
//	            $(this).val(''); // Clear invalid input
//	            return;
//	        }
//
//	        // Check for duplicate entries directly from inputs
//	        let allValues = $('.stepInput').map(function () {
//	            return $(this).val();
//	        }).get();
//
//	        if (allValues.filter(value => value === enteredValue).length > 1) {
//	            toastr.warning("Duplicate entry is not allowed.");
//	            $(this).val(''); // Clear invalid input
//	        }
//	    });
//
//	    // Verify button logic
//	    $('#verifyButton').click(function () {
//	    	seqCount++;
//	        if (attempts >= maxAttempts) {
//	            showModal("No attempts remaining.");
//	            return;
//	        }
//
//	        let correctCount = 0;
//            $(".stepInput").each(function () {
//                let userValue = $(this).val();
//                let correctValue = $(this).data("correct");
//
//                if (userValue == correctValue) {
//                    correctCount++;
////                    $(this).css("background-color", "lightgreen");
//                } else {
////                    $(this).css("background-color", "lightcoral");
//                }
//            });
//
//            if (correctCount === jsonData.statements.length) {
//            	showModal(`<span class='success'> All answers are correct. Go to result</span>`);
//                $("#verifyButton").prop("disabled", true);
//                
//                var htm='<div class="col-sm-12">'
//		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%">Result</button>'
//		+'</div>'
//		$("#footerModal").html(htm);
//            } else {
//                attempts--;
//                $("#attempts").text(attempts);
//
//                if (attempts === 0) {
//                	showModal("<span class='error'> No attempts left.</span>");
//                    $(".stepInput").prop("disabled", true);
//                    $("#verifyButton").prop("disabled", true);
//                } else {
//                	 showModal(`<span class='error'>${correctCount} correct answers. Try again!</span>`);
//                }
//            }
//
//	       
//	    });
//	});
$(document).ready(function () {
    
    let attempts = 3; // Total attempts allowed
    const maxAttempts = 3; // Max attempts limit

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

    // Input validation on blur event
    $('.stepInput').on('blur', function () {
        let enteredValue = $(this).val().trim();
        let minLimit = 1;
        let maxLimit = 10;

        // Check if the input is empty or not a valid number
        if (enteredValue === "" || !/^\d+$/.test(enteredValue)) {
            toastr.error("This field cannot be empty. Please enter a valid number.");
            showModal("This field cannot be empty. Please enter a valid number.");
            $(this).val(''); // Clear invalid input
            return;
        }

        // Validate range
        let numberValue = parseInt(enteredValue);
        if (numberValue < minLimit || numberValue > maxLimit) {
            toastr.warning(`Please enter a value between ${minLimit} and ${maxLimit}.`);
             showModal(`Please enter a value between ${minLimit} and ${maxLimit}.`);
            $(this).val(''); // Clear invalid input
            return;
        }

        // Check for duplicate entries
        let allValues = $('.stepInput').map(function () {
            return $(this).val();
        }).get();

        if (allValues.filter(value => value === enteredValue).length > 1) {
            toastr.warning("Duplicate entry is not allowed.");
              showModal("Duplicate entry is not allowed.");
            $(this).val(''); // Clear invalid input
        }
    });

    // Verify button logic
    $('#verifyButton').click(function () {
		$(".error").css({ 
    "font-size": "19px", 
    "font-weight": "600", 
    "color": "brown"
});
        if (attempts <= 0) {
            showModal("No attempts remaining.");
               toastr.error("No attempts remaining.");
            return;
        }

        // Validate all inputs before checking answers
        let isValid = true;
        $('.stepInput').each(function () {
            let value = $(this).val().trim();

            if (value === "" || !/^\d+$/.test(value)) {
                toastr.error("All fields must be filled with valid numbers.");
               showModal("All fields must be filled with valid numbers.");
                isValid = false;
                return false; // Break loop
            }
        });

        if (!isValid) return; // Stop verification if validation fails

        // Check correctness of answers
        let correctCount = 0;
        $(".stepInput").each(function () {
            let userValue = $(this).val();
            let correctValue = $(this).data("correct");

            if (userValue == correctValue) {
                correctCount++;
            }
        });

        if (correctCount === jsonData.statements.length) {
            showModal(`<span class='success'> All answers are correct. Go to result</span>`);
            $("#verifyButton").prop("disabled", true);

            alarmflg = 1;

        } else {
            attempts--;
            $("#attempts").text(attempts);

            if (attempts === 0) {
					stdtable();
//                showModal(`<span class='error'> No attempts left.</span>`);
//                $(".stepInput").prop("disabled", true);
//                $("#verifyButton").prop("disabled", true);
            } else {
                showModal(`<span class='error'>${correctCount} correct answers. Try again!</span>`);
            }
        }
        
        if(alarmflg == 1){
			  htm = '<div class="col-sm-12">'
                + '<button type="button" class="btn btn-danger" id="nextAlm" style="margin-top:10px;float:right;">Next</button>'
                + '</div>';
            $("#footerModal").html(htm);
		}
		
		$("#nextAlm").click(function(){
			
				
			
		})
    });
    function stdtable(){
//		$('#modalForContinue').modal('hide');
		
		
		var htm=`
		 <table class="table table-striped">
			    <thead>
			      <tr>
			        <th>step no</th>
			        <th>Statement</th>
			        
			      </tr>
			    </thead>
			    <tbody id="dataTable">
			     
			    </tbody>
			  </table>
					`;
				    $("#bodymodalForContinue").html(htm);	
					
					 var tableBody = $("#dataTable");
					 jsonData.statements.forEach(function (item) {
            var row = `<tr>
                <td>${item.step_no}</td>
                <td>${item.statement}</td>
            </tr>`;
            tableBody.append(row);
             alarmflg = 1;
        });
        
       
	}

});

}

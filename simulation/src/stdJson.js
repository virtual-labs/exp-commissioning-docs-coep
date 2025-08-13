var plantDocuments = {
    "statements": [
        {"Step No": "1", "statement": "P & I diagram", "status": "Yes"},
        {"Step No": "2", "statement": "Plant design document", "status": "No"},
        {"Step No": "3", "statement": "Plant GA diagram", "status": "No"},
        {"Step No": "4", "statement": "Customer requirement document", "status": "Yes"},
        {"Step No": "5", "statement": "As built drawings for the control system wiring", "status": "Yes"},
        {"Step No": "6", "statement": "A copy of ladder program", "status": "No"},
        {"Step No": "7", "statement": "A copy of SCADA screen", "status": "No"},
        {"Step No": "8", "statement": "Installation drawings", "status": "No"},
        {"Step No": "9", "statement": "FAT report of all instruments and control system", "status": "Yes"},
        {"Step No": "10", "statement": "Loop wiring diagrams", "status": "No"},
        {"Step No": "11", "statement": "Panel wiring details", "status": "Yes"},
        {"Step No": "12", "statement": "Communication details and its wiring", "status": "Yes"},
        {"Step No": "13", "statement": "UPS and back-up system details", "status": "Yes"},
        {"Step No": "14", "statement": "HVAC and fire alarm details", "status": "Yes"},
        {"Step No": "15", "statement": "Contract document containing performance criteria", "status": "Yes"},
        {"Step No": "16", "statement": "Penalty and all other legal clauses document", "status": "Yes"}
    ]
};

	      var subJsonData1 = {
	    		  "statements": [
	    			    { "step_no": "1", "statement": "Physical inspection of the plant" },
	    			    { "step_no": "2", "statement": "Visual inspection of the control room and installed control system" },
	    			    { "step_no": "3", "statement": "Loop testing report" },
	    			    { "step_no": "4", "statement": "Soap test report for all pneumatic instruments" },
	    			    { "step_no": "5", "statement": "Readiness of all utilities like water, electricity, and steam demand" },
	    			    { "step_no": "6", "statement": "Checking of all close loops keeping them in manual mode" },
	    			    { "step_no": "7", "statement": "Interlock functionality" },
	    			    { "step_no": "8", "statement": "Communication details and working of network components" }
	    			  ]
	    			}

      //console.log(subJsonData1);
      
      var subJsonData2 = {
    		  "statements": [
    			    { "step_no": "1", "statement": "Check the permissive to start the plant" },
    			    { "step_no": "2", "statement": "Fill the feed water tank" },
    			    { "step_no": "3", "statement": "Close the steam valve" },
    			    { "step_no": "4", "statement": "Start the SCR module" },
    			    { "step_no": "5", "statement": "Wait till temperature reached up to 133oC and pressure up to 3.5 Kg/cm2" },
    			    { "step_no": "6", "statement": "Keep the heater ON till it trips else check the steam vent valve opens, note the readings" },
    			    { "step_no": "7", "statement": "Start the cold water circulation pump of heat exchanger" },
    			    { "step_no": "8", "statement": "Crack open the steam valve and observe the drop in pressure" },
    			    { "step_no": "9", "statement": "Raise the SCR firing angle so as to maintain the temperature" },
    			    { "step_no": "10", "statement": "Increase the cold water flow and open steam valve note the hot water temperature and flow" },
    			    { "step_no": "11", "statement": "Measure time required to raise steam pressure when the cold water flow is maximum" },
    			    { "step_no": "12", "statement": "Maintain this condition for some time and observe stability" },
    			    { "step_no": "13", "statement": "Lower the boiler feed tank level and check whether heater trips" },
    			    { "step_no": "14", "statement": "Lower down the demand by reducing heat exchanger water flow and check how much time it takes to raise the steam pressure" },
    			    { "step_no": "15", "statement": "Open steam control valve fully and check the maximum temperature attained at hot water side" },
    			    { "step_no": "16", "statement": "STOP the heater" },
    			    { "step_no": "17", "statement": "STOP the heat exchanger cold water pump" }
    			  ]
    			}

    //console.log(subJsonData2);
    var subJsonData3 = {
    		  "statements": [
    			    { "step_no": "1", "statement": "Turn the plant in AUTO mode and give START command" },
    			    { "step_no": "2", "statement": "Check the sequence of operations and compare with manual mode" },
    			    { "step_no": "3", "statement": "Take temperature control loop in AUTO mode check for correct action of PID controller" },
    			    { "step_no": "4", "statement": "Take the hot water temperature loop in AUTO mode check for correct action of PID controller" },
    			    { "step_no": "5", "statement": "Tune the PID controller for steam with various load conditions" },
    			    { "step_no": "6", "statement": "Tune Hot water temperature loop for various load conditions" },
    			    { "step_no": "7", "statement": "Check the proportional control valves for water and condensates are working properly" },
    			    { "step_no": "8", "statement": "Carry out one batch of load variations and check the functioning for at least THREE hours" },
    			    { "step_no": "9", "statement": "Activate shut down mode and check for its correctness" },
    			    { "step_no": "10", "statement": "Monitor the process from SCADA screen and evaluate the reports based on roles" },
    			    { "step_no": "11", "statement": "Check the performance parameters and compare with the agreed contract" },
    			    { "step_no": "12", "statement": "If performance is not matching check for the reasons and retune the PID controller" },
    			    { "step_no": "13", "statement": "Check all interlocks for their correctness" },
    			    { "step_no": "14", "statement": "Repeat second batch of operation and if it satisfies recommend for final performance test in front of client" },
    			    { "step_no": "15", "statement": "Conduct the test after taking care of comments by consultant and client" },
    			    { "step_no": "16", "statement": "Hand over the control to client and obtain handover document" },
    			    { "step_no": "17", "statement": "Observe the smooth running of the plant for couple of batches" }
    			  ]
    			}

    //console.log(subJsonData3);
 

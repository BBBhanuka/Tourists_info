
function display_info() {

    var x = document.getElementById('dropdown').value;

    if ( x == "USD") {
        document.getElementById('out1').innerHTML = "1 USD Equals to Rs.202.95 ";
    }

    else if ( x == "EUR") {
        document.getElementById('out1').innerHTML = "1 EUR Equals to Rs.230.35 ";
    }

    else if ( x == "JPY") {
        document.getElementById('out1').innerHTML = "1 JPY Equals to Rs.1.76 ";
    }

    else if ( x == "GBP") {
        document.getElementById('out1').innerHTML = "1 GBP Equals to Rs.273.72 ";
    }

    else if ( x == "AUD") {
        document.getElementById('out1').innerHTML = "1 AUD Equals to Rs.146.61 ";
    }

    else if ( x == "CAD") {
        document.getElementById('out1').innerHTML = "1 CAD Equals to Rs.159.60 ";
    }

    else if ( x == "CHF") {
        document.getElementById('out1').innerHTML = "1 CHF Equals to Rs.221.82 ";
    }

    else if ( x == "CNH") {
        document.getElementById('out1').innerHTML = "1 CNH Equals to Rs.31.93";
    }

    else {
        document.getElementById('out1').innerHTML = "";
    }

}
        


function Calculate() {
    var y = document.getElementById('input').value;
    var a = document.getElementById('dropdown').value;
    var b = document.getElementById('out2').value;


    if ( y == '' || isNaN(y)) {

        if(y == '') {
            alert("Please enter a value for required field");
        }

        else {

            alert("Please only enter numeric value in required field");

        }     
    }

    
    else {
        
        var z = parseInt(y);
            var y = "Rupee Amount is : "

            if ( a == "USD") {
                var total = z*202.95;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else if ( a == "EUR") {
                var total = z*230.35;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else if ( a == "JPY") {
                var total = z*1.76;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else if ( a == "GBP") {
                var total = z*273.72;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else if ( a == "AUD") {
                var total = z*146.61;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else if ( a == "CAD") {
                var total = z*159.60;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else if ( a == "CHF") {
                var total = z*221.82;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else if ( a == "CNH")  {
                var total = z*31.93;
                document.getElementById('out2').innerHTML = y + total.toFixed(2);
            }

            else {
                document.getElementById('out2').innerHTML = "";
            }



        }
    
}



function withoutclick() {

    if(document.getElementById('out2').innerHTML != '') {
        
        Calculate();
    }

    }
 
    
    function Clear() 
{       
        document.getElementById('out1').innerHTML = "";
        document.getElementById('out2').innerHTML = "";
        document.getElementById('input').value = "";
        document.getElementById('dropdown').value = "USD";
}



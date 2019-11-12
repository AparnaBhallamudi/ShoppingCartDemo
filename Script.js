function addItem()
{ 
    
    var p = document.getElementById('product');
    var q = document.getElementById('quantity');
    var letters = /^[A-Za-z]+$/;
    if(!p.value || !p.value.match(letters)){
        alert("please enter a valid vegetable or fruit");             
    }
    else{
         if (q.value <= 0){
            alert("Please Enter Valid weight");
        }
        else{
                         
            var table = document.getElementById("myTable");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.innerHTML = p.value;
            cell2.innerHTML = q.value + "lb";
            cell3.innerHTML = '<input id="Button" type="button" value="Remove" onclick="remove(this)" />'


        }

        
    }
        
      p.value = "";
      q.value = "";
    }

function remove(r){
    var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}
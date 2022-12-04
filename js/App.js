var age = 22;


if (age >= 18 && age <= 25 ) {
       document.write(" Perfect Age");
    } else if (age>= 26 && age< 31) {
       document.write("Ektu beshi, kintu chole");
    } else if (age >= 31 && age < 40) {
       document.write("Apni akjon bura bedi, Rasta Mapen!");
    } else {
       alert('Ulta palta kaj chaira daw!!!!!!!')
    }


    function textChange() {
      document.getElementById('btn').innerText = 'Selected';
      document.getElementById('btn').style.color = 'red'
   }
   
   

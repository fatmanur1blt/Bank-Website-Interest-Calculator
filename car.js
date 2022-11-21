// // // ARAÇ KREDİSİ

document.getElementById("nd3").addEventListener("click", car);

function car(){
    let a2,b2;
    a2 = document.getElementById("ayn2").value;
    b2 = parseInt(document.getElementById("cm2").value);
    let list = document.getElementById("vade3");
    vadeSayisi3=list.options[list.selectedIndex].value;
    if(a2 < 5500){
        document.getElementById("demo3").innerHTML = "NET GELİRİNİZ 5500 TL VE ÜZERİ OLMALIDIR.";
        console.log("kabul edilmeyen net gelir.");
    } else{
        console.log("hesaplama yapılabilir.");
        f=document.getElementById("12ay3").value;
        f1=document.getElementById("24ay3").value;
        f2=document.getElementById("36ay3").value;
        f3=document.getElementById("48ay3").value;
        if(vadeSayisi3== f){
            toplamOdeme2=(b2/100)*(1.3/12)*12 + b2;
            document.getElementById("demo3").innerHTML = `12 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme2} Tl dir.`;
        }
        else if(vadeSayisi3== f1){
            toplamOdeme2=(b2/100)*(1.5/12)*12 + b2;
            document.getElementById("demo3").innerHTML = `24 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme2} Tl dir.`;
        }
        else if(vadeSayisi3== f2){
            toplamOdeme2=(b2/100)*(1.7/12)*12 + b2;
            document.getElementById("demo3").innerHTML = `36 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme2} Tl dir.`;
        }
        else if(vadeSayisi3== f3){
            toplamOdeme2=(b2/100)*(2.1/12)*12 + b2;
            document.getElementById("demo3").innerHTML = `48 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme2} Tl dir.`;
        }
      
    }
}
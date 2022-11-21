// // // KONUT KREDİSİ

document.getElementById("nd1").addEventListener("click", konut);

function konut(){
    let a1,b1;
    a1 = document.getElementById("ayn1").value;
    b1 = parseInt(document.getElementById("cm1").value);
    let list = document.getElementById("vade2");
    vadeSayisi1=list.options[list.selectedIndex].value;
    if(a1 < 5500){
        document.getElementById("demo2").innerHTML = "NET GELİRİNİZ 5500 TL VE ÜZERİ OLMALIDIR.";
        console.log("kabul edilmeyen net gelir.");
    } else{
        console.log("hesaplama yapılabilir.");
        d=document.getElementById("12ay2").value;
        d1=document.getElementById("24ay2").value;
        d2=document.getElementById("36ay2").value;
        d3=document.getElementById("48ay2").value;
        d4=document.getElementById("60ay2").value;
        if(vadeSayisi1== d){
            toplamOdeme1=(b1/100)*(1.7/12)*12 + b1;
            document.getElementById("demo2").innerHTML = `12 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme1} Tl dir.`;
        }
        else if(vadeSayisi1== d1){
            toplamOdeme1=(b1/100)*(1.9/12)*12 + b1;
            document.getElementById("demo2").innerHTML = `24 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme1} Tl dir.`;
        }
        else if(vadeSayisi1== d2){
            toplamOdeme1=(b1/100)*(2.1/12)*12 + b1;
            document.getElementById("demo2").innerHTML = `36 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme1} Tl dir.`;
        }
        else if(vadeSayisi1== d3){
            toplamOdeme1=(b1/100)*(2.3/12)*12 + b1;
            document.getElementById("demo2").innerHTML = `48 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme1} Tl dir.`;
        }
        else if(vadeSayisi1== d4){
            toplamOdeme1=(b1/100)*(2.5/12)*12 + b1;
            document.getElementById("demo2").innerHTML = `60 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme1} Tl dir.`;
        }
    }
}
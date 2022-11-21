// // // İHTİYAÇ KREDİSİ

// Faiz hesabı (Anapara/100) * (faiz oranı/12) * Ay sayısı => Aylık faiz


document.getElementById("nd").addEventListener("click", need);

function need(){
    let a,b;
    a = document.getElementById("ayn").value;
    b = parseInt(document.getElementById("cm").value);
    let list = document.getElementById("vade1");
    vadeSayisi=list.options[list.selectedIndex].value;
    if(a < 5500){
        document.getElementById("demo1").innerHTML = "NET GELİRİNİZ 5500 TL VE ÜZERİ OLMALIDIR.";
        console.log("kabul edilmeyen net gelir.");
    } else{
        console.log("hesaplama yapılabilir.");
        c=document.getElementById("12ay1").value;
        c1=document.getElementById("24ay1").value;
        c2=document.getElementById("36ay1").value;
        if(vadeSayisi== c){
            toplamOdeme=(b/100)*(1.6/12)*12 + b;
            document.getElementById("demo1").innerHTML = `12 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme} Tl dir.`;
        }
        else if(vadeSayisi== c1){
            toplamOdeme=(b/100)*(2.1/12)*12 + b;
            document.getElementById("demo1").innerHTML = `24 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme} Tl dir.`;
        }
        else if(vadeSayisi== c2){
            toplamOdeme=(b/100)*(2.4/12)*12 + b;
            document.getElementById("demo1").innerHTML = `36 Ay Vade için Toplam Geri Ödeyeceğiniz tutar ${toplamOdeme} Tl dir.`;
        }
    }
}
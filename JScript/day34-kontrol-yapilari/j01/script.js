function reklamKaldir(){ 
    var d = new Date();
    var saat=d.getHours();
    var dakika=d.getMinutes(); 
    
    //sayfaya giriş saati
    var girisSaati=saat*60+dakika;
    var suAnkiSaat=(d.getHours()*60)+d.getMinutes();
    if(suAnkiSaat - girisSaati >= 1){       
        document.getElementById("reklam").style.display="none";
    }

}
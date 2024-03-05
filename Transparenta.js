document.getElementById("planuri").addEventListener("click", function(){
    document.getElementById("tabel1").style.display = "block";
    document.getElementById("tabel2").style.display = "none";
    document.getElementById("tabel3").style.display = "none";
    document.getElementById("tabel4").style.display = "none";
  });
  document.getElementById("rapoarte").addEventListener("click", function(){
    document.getElementById("tabel1").style.display = "none";
    document.getElementById("tabel2").style.display = "block";
    document.getElementById("tabel3").style.display = "none";
    document.getElementById("tabel4").style.display = "none";
  });
  document.getElementById("achizitii").addEventListener("click", function(){
    document.getElementById("tabel1").style.display = "none";
    document.getElementById("tabel2").style.display = "none";
    document.getElementById("tabel3").style.display = "block";
    document.getElementById("tabel4").style.display = "none";
  });
  document.getElementById("declaratii").addEventListener("click", function(){
    document.getElementById("tabel1").style.display = "none";
    document.getElementById("tabel2").style.display = "none";
    document.getElementById("tabel3").style.display = "none";
    document.getElementById("tabel4").style.display = "block";
  });
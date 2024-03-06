
var clicou = 0;
function AbrirMenu() {
    if (clicou % 2 == 0) {
          // Criar um novo elemento de imagem
          let novaImagem = document.createElement('img');
          novaImagem.src = "./assets/closeHamburguer.png";
          novaImagem.alt = "Ícone de fechar menu";

          

      
          // Substituir o conteúdo da div com o novo elemento de imagem
          let divImgHamburguer = document.getElementById("imgHamburguerOpne");
          divImgHamburguer.innerHTML = ''; // Limpar qualquer conteúdo existente
          divImgHamburguer.appendChild(novaImagem);

          
          document.getElementById('Sub-Nav').style.display = 'block';



          clicou++
          console.log("Abriu");
    }else{
         // Criar um novo elemento de imagem
         let novaImagem = document.createElement('img');
         novaImagem.src = "./assets/Hamburguer-open.png";
         novaImagem.alt = "Ícone de fechar menu";
     
         // Substituir o conteúdo da div com o novo elemento de imagem
         let divImgHamburguer = document.getElementById("imgHamburguerOpne");
         divImgHamburguer.innerHTML = ''; // Limpar qualquer conteúdo existente
         divImgHamburguer.appendChild(novaImagem);

         document.getElementById('Sub-Nav').style.display = 'none';

         clicou++
         console.log("Fechou");
    }


    
}


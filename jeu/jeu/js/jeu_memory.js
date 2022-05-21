var carte_tiree=new Array(16); // tableau 16 images
var jeu=2;
var carte=new Array(2);
var no_carte=new Array(2);
var gagne=0,bloc=false;
var nb_coups=0,fl_gene=true;
var depart=50; // nombre d'essais de l'utilisateur
var imam=new Array(8); 
for (var i=0;i<8;i++) { imam[i]=new Image();imam[i].src="img"+(i+1)+".jpg";}

function chargement()
{
 for ( var i=0;i<16;i++)carte_tiree[i]=100;
 charge();
}
function retourner(n,m)
{ 
  document.images[n].src="dos.jpg";
  document.images[m].src="dos.jpg";
  bloc=false;
}
function clic(n)
{ 
  if ((jeu>0)&& (!bloc) && (nb_coups<depart) && (fl_gene)) 
   { nb_coups+=1;document.fm.zone.value=(depart-nb_coups);
     if (nb_coups<1) fl_gene=false;
     document.images[n].src="img"+(carte_tiree[n]+1)+".jpg";
     jeu -=1;
     carte[jeu]=carte_tiree[n];no_carte[jeu]=n;
     if (jeu==0)
      { jeu=2; 
        if (carte[1] != carte[0])
         { 
           bloc=true;
           setTimeout('retourner(no_carte[0],no_carte[1]);',500);//setTimeout permet d'appeler une fonction aprés un nombre prédéfinis
         } 
         else {
               gagne+=1;
               if (gagne==8)
                {alert("Bravo...Vous avez gagné en "+nb_coups+' Cliques !'+
                       "\nVous pouvez tenter de nouveau votre chance !");
               fl_gene=false;
              }
         }
       }
     }
}


function dos()//toutes les cartes sur le dos..
 {for (var n=0;n<16;n++);
        
 }
function verif(m) //rôle : vérifier si le nombre m est déja tiré !
{
 var c=0;
 for (i=0;i<16;i++)
    if (carte_tiree[i]==m) c++; 
 if (c==2) return false; else return true;
}

function charge()//charge le tableau aléatoirement.
 { for (var i=0;i<16;i++)
          {carte_tiree[i]=100;
           var flag_ok=false;
           while (!flag_ok)
            {  
             var n=Math.floor(Math.random()*8); // variable qui prend un nombre aléatoire 
             if (verif(n)) { 
                            carte_tiree[i]=n;
                            flag_ok=true;
                           }
            }
          }
 }
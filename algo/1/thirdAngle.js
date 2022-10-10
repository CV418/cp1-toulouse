/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/

function thirdAngle(a, b) {

  let somme = a + b;

  if (somme < 180) {
    return (180 - somme)
  }

  // Your code here !
}
module.exports = thirdAngle;

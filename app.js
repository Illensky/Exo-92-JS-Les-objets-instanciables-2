function Personne (prenom, nom, age, sexe) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;

    this.getInfo = function () {
        return "Prenom : " + this.prenom + ", nom : " + this.nom + ", age : " + this.age + ", sexe : " + this.sexe
    }

    this.setAgeSexe = function (age, sexe) {
        this.age = age;
        this.sexe = sexe;
    }
}

const classe = [
    new Personne("Jean", "Pastissier", 27, "Homme"),
    new Personne("Toma", "Walle", 28, "Homme"),
    new Personne("Sam", "Saoule", 32, "Homme"),
    new Personne("Jeanne", "Ine", 23, "Femme"),
    new Personne("Elsa", "Roselesfleurs", 21, "Femme")
]

for (let person of classe) {
    document.getElementById("info").innerHTML += "Prénom : " + person.prenom + ", nom : " + person.nom + ", age : " + person.age + " sexe : " + person.sexe + "<br>"
}
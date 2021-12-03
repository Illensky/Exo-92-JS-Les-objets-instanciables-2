function personne (prenom, nom, age, sexe) {
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
    new personne("Jean", "Pastissier", 27, "Homme"),
    new personne("Toma", "Walle", 28, "Homme"),
    new personne("Sam", "Saoule", 32, "Homme"),
    new personne("Jeanne", "Ine", 23, "Femme"),
    new personne("Elsa", "Roselesfleurs", 21, "Femme")
]
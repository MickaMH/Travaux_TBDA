function strtok(str1, str2, n) {
    let mot = str1.split(str2);
    if (n > mot.length) {
        return "Erreur";
    }
    return mot[n - 1];
}

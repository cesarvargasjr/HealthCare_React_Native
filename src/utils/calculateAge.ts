function calculateAge(date) {
    if (!date) {
        return null
    } 
    var today = new Date();
    var currentYear = today.getFullYear();
    var anoNascParts = date.split('/');
    var birthDay = anoNascParts[0];
    var birthMonth = anoNascParts[1];
    var birthYear = anoNascParts[2];
    var age = currentYear - birthYear;
    var mesAtual = today.getMonth() + 1;
    // Se mês atual for menor que o nascimento, não fez aniversário ainda  
    if (mesAtual < birthMonth) {
        age--;
    } else {
        // Se estiver no mês do nascimento, verificar o dia
        if (mesAtual == birthMonth) {
            if (new Date().getDate() < birthDay) {
                //Se a data atual for menor que o dia de nascimento ele ainda não fez aniversário
                age--;
            }
        }
    }
    return age;
}

export default calculateAge;
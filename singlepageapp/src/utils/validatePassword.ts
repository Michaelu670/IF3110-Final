export const validatePassword = (password: string) => {
    /*
        minimum 8 char  : {8,}
        one lower case  : (?=.*[a-z]
        one upper case  : (?=.*[A-Z])
        one digit       : (?=.*\d)
    */
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}

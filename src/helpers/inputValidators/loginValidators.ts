const reg = /^[\w][\w-]*@[\w-]+\.[a-z]{2,7}$/i;

export const emailValidator = (email: string) => {
    if (!reg.test(email)) return false;
    return true;
};

export const passValidator = (pass: string) => {
    if (pass === '') return false;
    return true;
};

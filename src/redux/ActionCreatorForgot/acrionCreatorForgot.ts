export const CHANGE_EMAIL = "FORGOT/CHANGE_EMAIL";
export const ERROR = "FORGOT/ERROR";
export const IS_LOADING = "FORGOT/IS_LOADING";

//interface
interface IChangeEmail {
    type: typeof CHANGE_EMAIL;
    email: string
}

interface IError {
    type: typeof ERROR;
    errorMessage : string
}

interface IIsLoading {
    type: typeof IS_LOADING;
    isLoading : boolean
}

export type ForgotActions = IChangeEmail | IError | IIsLoading;


//actionCreator
export const changeEmailCreatorAC = (email: string): IChangeEmail => ({type: CHANGE_EMAIL, email});
export const errorCreatorAC = (errorMessage : string): IError => ({type: ERROR, errorMessage});
export const isLoadingAC = (isLoading : boolean): IIsLoading => ({type: IS_LOADING, isLoading});
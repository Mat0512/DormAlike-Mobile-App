import { Accomodation } from "./Accomodation"

export interface User {
     firstname?: string,
     lastname?: string,
     username?: string,
     phone?: string,
     email?: string,
     preference?: Accomodation[],
     resevation?: Accomodation[]
}
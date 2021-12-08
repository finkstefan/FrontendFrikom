import { Artikl } from "./artikl";
import { Datum } from "./datum";
import { Objekat } from "./objekat";

export class IstorDne {
 
    idIstorDne: number;
    datum: Datum;
    objekat: Objekat;
    artikl: Artikl;
    ulazDobavljac: number;
    ulazMagacin: number;
    povracajDobavljac: number;
    povracajMagacin: number;
    prodaja: number;

}
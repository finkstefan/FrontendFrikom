import { KategObj } from "./kateg_obj";
import { Lanac } from "./lanac";
import { Mesto } from "./mesto";

export class Objekat {
    idObjekat: number;
    nazivObjekta: String;
    adresa: String;
    status: String;
    format: String;
    regija: String;
    kategObj: KategObj;
    mesto: Mesto;
    lanac: Lanac;
}
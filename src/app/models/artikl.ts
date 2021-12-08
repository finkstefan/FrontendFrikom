import { JedMere } from "./jedmere";
import { VrstaAmbal } from "./vrstaambal";

export class Artikl{
    idArtikl: number;
    cenaBezpdv: number;
   cenaPdv: number;
   eonKod: string;
   komercijalnoPakovanje: number;
   maloprodajnaCena: number;
   naziv: string;
   promena: number;
   rok: number;
   transportniBarKod: string;
   transportnihPakovanja: number;
   zapremina: number;
   jedMere: JedMere;
   vrstaAmbal: VrstaAmbal;
    
  }

  
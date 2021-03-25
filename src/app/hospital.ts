import { _links2, page } from "./illness";

interface waitingList{
    patientCount: number;
    levelOfPain: number;
    averageProcessTime: number;
}

export interface hospital {
    id: number;
    name: string;
    waitingList: waitingList[];
}


interface _embeddedForHospital {
    hospitals: hospital[];
}

export interface Hospital {
    _embedded: _embeddedForHospital;
    _links: _links2;
    page: page;
}


export interface sortedHospital {
    levelofPain: number;
    name: string;
    averageProcessingTime: number;
    patienCount: number;
    waitingTime: number;
}
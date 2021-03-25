export interface illness {
    name : string;
    id: number;
}

interface _links {
    illnesses: any;
    self: any;
}

interface illnesses {
    illness: illness;
    _links: _links;
}

interface _embedded {
    illnesses: illnesses[];
}

export interface _links2{
    self: any;
    next: any;
}

export interface page{
    size: number;
    totoalElements: number;
    totalPages: number;
    number: number;
}





export interface Iillness {
    _embedded: _embedded;
    _links: _links2;
    page: page;
}



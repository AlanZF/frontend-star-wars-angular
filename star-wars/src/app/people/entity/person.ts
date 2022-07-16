import { Films } from "src/app/films/entity/films"

export interface Person {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    films: Films[]
}

export interface ObjectPeople {
    count: number
    next: string
    previous: string
    results: Person[]
}

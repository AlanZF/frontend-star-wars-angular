export interface Films {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    url: string;
}

export interface ObjectFilms {
    count: number
    next: string
    previous: string
    results: Films[]
}
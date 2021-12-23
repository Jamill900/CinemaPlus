import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        title: "Angel Has Fallen",
        poster: "../assets/img/banner1.png",
        banner: "../assets/img/slider1.png",
        trailer: "https://www.youtube.com/watch?v=isVtXH7n9lI",
        overview: "Mike Banning, a secret service agent, is assigned to protect the US president. Things take a turn when Mike is falsely accused of carrying an attack on the president while on a fishing trip.",
        director: "Ric Roman Waugh",
        cast: ["Gerard Butler", "Morgan Freeman", "Nick Nolte", "Piper Perabo"],
        genre: ["Action", "Thriller"],
        release_date: "08/23/2019",
        runtime: 121,
        mpaa: "R"
      },
      {
        id: 2,
        title: "The Lion King",
        poster: "../assets/img/banner2.png",
        banner: "../assets/img/slider2.png",
        trailer: "https://www.youtube.com/watch?v=7TavVZMewpY",
        overview: "Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.",
        director: "Jon Favreau",
        cast: ["James Earl Jones", "Beyonce Knowles", "Donald Glover", "Chiwetel Ejiofor"],
        genre: ["Animation", "Adventure", "Drama", "Family", "Musical"],
        release_date: "07/19/2019",
        runtime: 118,
        mpaa: "PG"
      },
      {
        id: 3,
        title: "Avengers: Endgame",
        poster: "../assets/img/banner3.png",
        banner: "../assets/img/slider3.png",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        overview: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        director: "Russo Brothers",
        cast: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Jeremy Renner"],
        genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
        release_date: "04/26/2019",
        runtime: 182,
        mpaa: "PG-13"
      },
      {
        id: 4,
        title: "Avengers: Infinity War",
        poster: "../assets/img/banner4.png",
        banner: "../assets/img/slider4.png",
        trailer: "https://www.youtube.com/watch?v=ELeMaP8EPAA",
        overview: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan",
        director: "Russo Brothers",
        cast: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Jeremy Renner"],
        genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
        release_date: "04/26/2018",
        runtime: 149,
        mpaa: "PG-13"
      },
      {
        id: 5,
        title: "Fast & Furious: Hobbs & Shaw",
        poster: "../assets/img/banner5.png",
        banner: "../assets/img/slider5.png",
        trailer: "https://www.youtube.com/watch?v=vtfeFfJT40Y",
        overview: "US agent Luke Hobbs and British mercenary Deckard Shaw are forced to put their rivalry side and work together to stop a genetically enhanced supervillain.",
        director: "David Leitch",
        cast: ["Dwayne Johnson", "Jason Statham", "Vanessa Kirby", "Idris Elba"],
        genre: ["Action", "Adventure", "Thriller"],
        release_date: "08/02/2019",
        runtime: 136,
        mpaa: "PG-13"
      },
      {
        id: 6,
        title: "Dora & The lost City of Gold",
        poster: "../assets/img/banner6.png",
        banner: "../assets/img/slider6.png",
        trailer: "https://www.youtube.com/watch?v=gUTtJjV852c",
        overview: "Dora and her group of friends, including Boots the Monkey, go to the forest to look for the lost city of gold. She meets numerous challenges and dangerous situations on the way.",
        director: "James Bobin",
        cast: ["Isabela Merced", "Michael Pena", "Eugenio Derbe", "Jeff Wahlberg"],
        genre: ["Animation", "Action", "Adventure", "Comedy", "Family", "Fantasy", "Mystery"],
        release_date: "11/16/2018",
        runtime: 102,
        mpaa: "PG"
      },
      {
        id: 7,
        title: "The Angry Birds 2",
        poster: "../assets/img/banner7.png",
        banner: "../assets/img/slider7.png",
        trailer: "https://www.youtube.com/watch?v=T73h5bmD8Dc",
        overview: "Bird and Piggy Islands are under threat when Zeta, the leader of Eagle Island, wants to occupy them. Red must join forces with Leonard's team to thwart her bold schemes and save their homes.",
        director: "Thurop Van Orman",
        cast: ["Jason Sudeikis", "Awkwafina", "Leslie Jones", "Bill Hader"],
        genre: ["Animation", "Action", "Adventure", "Comedy", "Family"],
        release_date: "08/14/2019",
        runtime: 96,
        mpaa: "PG"
      },
      {
        id: 8,
        title: "Aladdin",
        poster: "../assets/img/banner8.png",
        banner: "../assets/img/slider8.png",
        trailer: "https://www.youtube.com/watch?v=qSzQa2b5LOQ",
        overview: "Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with the help of Genie. When Jafar, the grand vizier, tries to usurp the king, Jasmine, Aladdin and Genie must stop him from succeeding.",
        director: "Guy Ritchie",
        cast: ["Will Smith", "Mena Massoud", "Navid Negahban", "Naomi Scott"],
        genre: ["Romance", "Musical", "Adventure", "Comedy", "Family"],
        release_date: "05/24/2019",
        runtime: 128,
        mpaa: "PG"
      },
      {
        id: 9,
        title: "Hustlers",
        poster: "../assets/img/banner9.png",
        banner: "../assets/img/slider9.png",
        trailer: "https://www.youtube.com/watch?v=_e67tHHEk5w",
        overview: "Destiny meets Ramona, an old friend and veteran exotic dancer, who shows her how to swindle money from rich clients. However, they soon land in trouble as their scheme does not last very long.",
        director: "Lorene Scafaria",
        cast: ["Jennifer Lopez", "Lili Reinhart", "Constance Wu", "Julia Stiles"],
        genre: ["Comedy", "Crime", "Drama"],
        release_date: "09/13/2019",
        runtime: 110,
        mpaa: "R"
      }
    ];
    return {movies};
  }
}
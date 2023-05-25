class Book {
     constructor(name, img, authors, synopsis, genres, date, filename) {
          this.name = name;
          this.img = img;
          this.authors = authors;
          this.synopsis = synopsis;
          this.genres = genres;
          this.date = date;
          this.filename = filename;
     }

     static fromJson(json) {
          const contents = JSON.parse(json);
          return new Book(
               contents.name, 
               contents.img, 
               contents.authors, 
               contents.synopsis, 
               contents.genres, 
               contents.date,
               contents.filename
          );
     }

    static createDefault() {
     return new Book(
          "Loading",
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1277163268i/7670800.jpg",
          ["Loading"],
          "Loading",
          ["Loading"],
          "Loading",
          "Loading"
          );
     }
}

export default Book;
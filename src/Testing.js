//First component --> nested components
// import React from "react";
// import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <h1>My First Component</h1>
//       <Person/>
//       <Message/>
//     </div>
//   );
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => <p>This is my message</p>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);


//props: Antes de iterar.
// import React from "react";
// import ReactDOM from "react-dom/client";

// import "./index.css";
// const firstBook = {
//   author: "Jordan Moore",
//   title: "Interesting Facts For Curious Minds",
//   img: "https://m.media-amazon.com/images/I/518z5dvykPL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
// };
// const secondBook = {
//   author: "Shanora Williams",
//   title: "The Wife Before",
//   img: "https://m.media-amazon.com/images/I/81Ivt18vkzL._AC_UL400_.jpg",
// };

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       ><p>Prueba</p></Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   );
// };
// //Refactored: 1 solo componente (preferiblemente y css en archivo aparte)
// const Book = (props) => {
//   const { img, title, author, children } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BookList />);

const EventExample = () => {
    const handleFormInput = (e) => console.log(`handle input: ${e.target.value}`);
    const handleButton = () => alert('handle button');
    const handleFormSubmit = (e) => {
      e.preventDefault();
      alert('form submitted');
    }
    return (
      <section>
        <form onSubmit={handleFormSubmit}>
          <h2>Typical form</h2>
          <input type="text" name="example" onChange={handleFormInput} style={{ margin: "1rem" }} />
        </form>
        <button onClick={handleButton}>Click me</button>
      </section>
    );
  };
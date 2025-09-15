export default function Books({book}) {
    return(
        <div>
            <p>ID: {book.id}, Book Name: {book.BookName}, Price: {book.price}</p>
        </div>
    )
}
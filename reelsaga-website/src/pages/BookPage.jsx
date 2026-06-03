import React from 'react';
import { useRS } from '../hooks/useRS';
import { getBook, getCopy } from '../content';
import BookDetail from '../components/books/BookDetail';

/* Book detail page. Resolves the book by id and shows a fallback if missing. */
export default function BookPage({ id }) {
  const { go } = useRS();
  const copy = getCopy();
  const book = getBook(id);
  React.useEffect(() => { window.scrollTo(0, 0); }, [id]);
  if (!book) {
    return (
      <div className="page" style={{ paddingTop: 220, textAlign: 'center' }}>
        <p>{copy.reader.notFound}</p>
        <button className="bd-dl" style={{ margin: '18px auto 0' }} onClick={() => go('books')}>{copy.reader.backToBooks}</button>
      </div>
    );
  }
  return <BookDetail book={book} />;
}

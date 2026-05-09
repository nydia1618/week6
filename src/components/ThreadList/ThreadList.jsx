import { Container } from "react-bootstrap";
import './ThreadList.css';
import ThreadCard from "./ThreadCard";//importamos la plantilla

export default function ThreadList({ threads, onSelect }) {
  const handleUpvote = () => {
    alert('Upvote clicked!');
  };
  const handleDownvote = () => {
    alert('Downvote clicked!');
  };

  return (
    <Container fluid className="px-0">
      {/* Your Code Here  */}
        {/*1. Verificamos que threads exista y usamos .map()*/}
        {threads.map((thread) =>  (
            <div 
            key={thread.id}//<--Desde aqui va la key
            onClick={() => onSelect(thread.id)} //aqui conectamos el click
            style={{ cursor: 'pointer' }}
            >
              <ThreadCard thread={thread} />
            </div>  
        ))}
    </Container>
  );
}

import { useState, useEffect } from 'react';
import { fetchRecentThreads } from '../../services/threadService.js';
import ThreadPage from './ThreadPage.jsx';
import ThreadList from '../../components/ThreadList/ThreadList.jsx';
import { Container, Card } from "react-bootstrap";
import './Home.css';

export default function Home() {
  const [recentThreads, setRecentThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    fetchRecentThreads().then(setRecentThreads);
  }, []);

  if (selectedThread) {
    return <ThreadPage thread={selectedThread} goBack={() => setSelectedThread(null)} />;
  }

  return (
    <Container className="home-container">
      <Card className="home-card shadow-lg border-0 rounded-4 p-4">
        <h1 className="home-title mb-4 display-6 fw-semibold border-bottom pb-2">
          🧵 Recent Threads
        </h1>
        {/* Your Code Here  */}

        {/*Llamamos a ThreadList y le pasamos la "gasolina" ( los datos) */}
        <ThreadList
          threads={recentThreads}
          onSelect={(id) => {
            //buscamos el hilo completo en el array usando el ID (como un findById en Mongo)
            const thread = recentThreads.find(t => t.id ===id);
            setSelectedThread(thread);
          }}
          />
      </Card>
    </Container>
  );
}
import React, { useState } from 'react';
import './Accordion.css';

type Topic = {
  id: number;
  title: string;
  content: string;
};

export function Accordion({ list }: Record<string, Topic[]>) {
  const [selectedID, setSelectedID] = useState<number>(0);

  const results = list.map((t) => (
    <TopicCard
      topic={t}
      selectedID={selectedID}
      onClick={() => setSelectedID(t.id)}
    />
  ));
  return <>{results}</>;
}

type CardProps = {
  topic: Topic;
  selectedID: number;
  onClick: () => void;
};

function TopicCard({ topic, selectedID, onClick }: CardProps) {
  return (
    <div className="topic-container">
      <div className="topic-title" onClick={onClick}>
        {topic.title}
      </div>
      <div
        className={
          topic.id === selectedID ? 'topic-content' : 'topic-content hidden'
        }>
        {topic.content}
      </div>
    </div>
  );
}

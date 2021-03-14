import React, { useState } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';

export default function TodoForm({ todos = [], setTodos }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(...todos, { name: todo, isDone: false });
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              value={todo}
              onChange={onChange}
              placeholder="todo name"
            />
          </Form.Group>
        </Col>
        <Col>
          <Button onClick={handleSubmit}>Add Todo</Button>
        </Col>
      </Row>
    </Form>
  );
}

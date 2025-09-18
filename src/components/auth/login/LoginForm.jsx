import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <h2 className="mb-3 text-center">Sign In</h2>
              <p className="text-muted text-center small">
                By using our service, you accept our{" "}
                <a href="#">User Agreement</a> and acknowledge our{" "}
                <a href="#">Privacy Policy</a>.
              </p>

              <div className="d-grid gap-2 mb-3">
                <Button variant="outline-secondary">
                  📱 Continue with Phone Number
                </Button>
                <Button variant="outline-primary">
                  🟦 Continue with Google
                </Button>
                <Button variant="outline-dark">🍎 Continue with Apple</Button>
              </div>

              <hr />

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mb-3">
                  <a href="#" className="small">
                    Forgot your password?
                  </a>
                  <a href="#" className="small">
                    Register
                  </a>
                </div>

                <div className="d-grid">
                  <Button type="submit" variant="danger">
                    Sign In
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

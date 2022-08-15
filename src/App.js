import { Col, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import { Button, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
function App() {
  const [message, setMessage] = useState("");
  console.log(message);

  const sendMessage = () => {
    axios("https://demonodeappchatbot.herokuapp.com/webhook1", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },

      data: { response: message },
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Row style={{ display: "flex" }}>
        <Col span={12}>
          <Input
            placeholder="Type here..."
            multiline={true}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Col>
        <Col span={12}>
          <Button text={"Send"} onClick={() => sendMessage()} title="Send" />
        </Col>
      </Row>
    </>
  );
}

export default App;

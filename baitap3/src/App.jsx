import { useState } from "react";
import CounterStateful from "./components/CounterStateful";
import MessageStateless from "./components/MessageStateless";
import ChildToParent from "./components/ChildToParent";
import './App.css';

function App() {
  const [parentMessage, setParentMessage] = useState("Chưa có tin nhắn");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Bài 2 - Demo State & Data Flow trong React</h1>

      <hr />

      <h2>1. Stateful Component (Có state)</h2>
      <CounterStateful />

      <hr />

      <h2>2. Stateless Component (Nhận props)</h2>
      <MessageStateless text="Tôi chỉ nhận props, không có state." />

      <hr />

      <h2>3. Giao tiếp giữa component (Child {" -> "} Parent)</h2>
      <ChildToParent onSendMessage={setParentMessage} />
      <p><strong>Tin nhắn nhận từ con:</strong> {parentMessage}</p>

      <hr />

      <h2>4. Luồng dữ liệu một chiều</h2>
      <p>
        Dữ liệu luôn đi từ <strong>Cha {" -> "} Con</strong> thông qua props.
        Khi cần gửi ngược lên, ta dùng <strong>callback function</strong>.
      </p>
    </div>
  );
}

export default App;
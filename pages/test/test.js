import Form from "../../components/test/form";
import Input from "../../components/test/input";

export default function Test() {
  return (
    <div>
      <h1>Custom Input Component</h1>
      <Form>
        <Input id="email" />
        <Input id="username" />
      </Form>
    </div>
  );
}

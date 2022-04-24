import Form from "../../components/test/form";
import Input from "../../components/test/input";

export default function Test() {
  const customRules = {
    weirdRule: {
      rule() {
        return {
          test(fieldValue) {
            return fieldValue === "weird";
          },
        };
      },
      formatter(id) {
        return `${id} can have only one value: weird`;
      },
    },
  };
  return (
    <div>
      <h1>Custom Input Component</h1>
      <Form>
        <Input id="email" customRules={customRules} validate="weirdRule" />
        <Input id="username" validate="numeric" />
      </Form>
    </div>
  );
}

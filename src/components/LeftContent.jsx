import Heading from "./Heading";
import CheckBox from "./CheckBox";
import Input from "./Input";
import Button from "./Button";

const LeftContent = () => {
  const checkedTexts = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <div className="m-auto flex flex-col">
      <Heading
        title="Stay Updated!"
        paragraph="Join 60,000+ product managers receiving monthly updates on:"
      />
      <CheckBox textArray={checkedTexts} />
      <Input label="Email address" placeholder="email@company.com" />
      <Button>Subscribe to monthly newsletter</Button>
    </div>
  );
};

export default LeftContent;

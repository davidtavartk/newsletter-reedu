

const Input = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <span className="text-sm font-bold text-navy">{label}</span>
      <input
        className="w-full rounded-lg border border-custom-border py-4 pl-6 text-navy placeholder:opacity-90"
        type="email"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

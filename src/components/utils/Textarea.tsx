import { ContactType } from "../ContactForm";

type TextareaProps = {
  label: string;
  name: string;
  contact: ContactType;
  error: ContactType;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({
  label,
  name,
  contact,
  error,
  handleChange,
}: TextareaProps) => {
  return (
    <div className="w-full flex flex-col p-2 border-2">
      {" "}
      <label
        className="text-[#474747] text-lg w-[50%] p-1 font-bold"
        htmlFor=""
      >
        {label} <i className="text-sm text-red-400">(Required)</i>
      </label>
      <textarea
        value={contact[name as keyof ContactType]}
        onChange={handleChange}
        className="w-full h-40 outline-none resize-none rounded border-2 p-3"
      />
      {error[name as keyof ContactType] && (
        <div className="text-red-400 font-bold text-xs">
          {error[name as keyof ContactType]}
        </div>
      )}
    </div>
  );
};

export default Textarea;

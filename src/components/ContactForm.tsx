import { useState } from "react";
import Joi from "joi";
import Input from "./utils/Input";
import Textarea from "./utils/Textarea";

export type ContactType = {
  firstname: string;
  lastname: string;
  email: string;
  title: string;
  message: string;
};
const ContactForm = () => {
  const [err, setErr] = useState({} as ContactType);
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    title: "",
    message: "",
  });

  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .messages({
        "string.empty": "Email should not be empty",
      }),
    firstname: Joi.string().messages({
      "string.empty": "First Name should not be empty",
    }),
    lastname: Joi.string().messages({
      "string.empty": "Last Name should not be empty",
    }),
    title: Joi.string().messages({
      "string.empty": "Title should not be empty",
    }),
    message: Joi.string().messages({
      "string.empty": "Message should not be empty",
    }),
  });
  const handleChange = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {} as ContactType;
    const { error } = schema.validate(contact, { abortEarly: false });
    if (error) {
      for (let index = 0; index < error.details.length; index++) {
        errors[error.details[index].path[0] as keyof typeof contact] =
          error.details[index].message;
      }
      return setErr(errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-center gap-2"
      action=""
      method="post"
    >
      <div className="w-full flex flex-row justify-center items-center gap-2">
        <Input
          handleChange={handleChange}
          label={"First Name"}
          contact={contact}
          error={err}
          type={"text"}
          name={"firstname"}
        />
        <Input
          handleChange={handleChange}
          label={"Last Name"}
          contact={contact}
          error={err}
          type={"text"}
          name={"lastname"}
        />
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-2">
        <Input
          handleChange={handleChange}
          label={"Email"}
          type={"text"}
          name={"email"}
          contact={contact}
          error={err}
        />
        <Input
          handleChange={handleChange}
          label={"Title"}
          type={"text"}
          name={"title"}
          contact={contact}
          error={err}
          placeholder={"MR / MRS"}
        />
      </div>
      <div className="w-full flex flex-row justify-center items-center gap-2">
        <Textarea
          handleChange={handleChange}
          label={"Message"}
          contact={contact}
          error={err}
          name="message"
        />
      </div>
      <div className="w-full flex flex-row justify-start items-center">
        <button className="py-1 px-8 rounded-md text-xl font-bold text-white bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

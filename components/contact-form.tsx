import { Button, Input, Spacer, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { MailIcon } from "./icons";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailIsInvalid, setMailIsInvalid] = useState(false);
  const [nameIsInvalid, setNameIsInvalid] = useState(false);
  const [lastNameIsInvalid, setLastNameIsInvalid] = useState(false);
  const [messageIsInvalid, setMessageIsInvalid] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement your form submission logic here
    // For example, you can use fetch or axios to send the form data to a server
    // After successful submission, you can show a success message
    // setToast({ text: 'Form submitted successfully', type: 'success' });
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setMailIsInvalid(false);
      return;
    }
    const isValid =
      /^(?=.{1,254}$)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      );
    setMailIsInvalid(!isValid);
  };

  const validateInput = (input: string, setInputInvalid: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (!input) {
      setInputInvalid(false);
      return;
    }
    // Regex pattern to allow alphanumeric characters and some safe special characters
    const pattern = /^[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]*$/;
    const isValid = pattern.test(input);
    setInputInvalid(!isValid);
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="md:flex text-left">
          <Input
            label="Nombre"
            placeholder="Escribe tu nombre"
            labelPlacement="outside"
            value={name}
            isInvalid={nameIsInvalid}
            // setName(e.target.value);
            onChange={(e) => {
              setName(e.target.value);
              validateInput(e.target.value, setNameIsInvalid);
            }}
            isRequired
          />
          <Spacer x={3} />
          <Spacer y={3} className="md:hidden" />
          <Input
            label="Apellidos"
            placeholder="Escribe tus apellidos"
            labelPlacement="outside"
            value={lastName}
            isInvalid={lastNameIsInvalid}
            onChange={(e) => {
              setLastName(e.target.value);
              validateInput(e.target.value, setLastNameIsInvalid);
            }}
            isRequired
          />
        </div>
        <Spacer y={3} />
        <Input
          type="email"
          label="Email"
          placeholder="Escribe tu email"
          value={email}
          isInvalid={mailIsInvalid}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          labelPlacement="outside"
          description="Nosotros nunca compartiremos tu email con nadie más."
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          isRequired
        />
        <Spacer y={1} />
        <div className="text-left">
          <Textarea
            label="Mensaje"
            placeholder="Enter your message"
            size="lg"
            labelPlacement="outside"
            minRows={8}
            maxRows={10}
            maxLength={500}
            value={message}
            isInvalid={messageIsInvalid}
            onChange={(e) => {
              setMessage(e.target.value);
              validateInput(e.target.value, setMessageIsInvalid);
            }}
            isRequired
          />
        </div>
        <Spacer y={4} />
        <Button
          type="submit"
          variant="shadow"
          color="primary"
          radius="full"
          fullWidth
        >
          Enviar Formulario
        </Button>
      </form>
    </>
  );
};

export default ContactForm;

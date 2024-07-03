import { Input } from "@nextui-org/input";
import { FieldError } from "react-hook-form";

interface InputFormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: (name: string, options?: {}) => void;
  error?: FieldError | undefined;
  disabled: boolean;
}

export const InputFormField = ({
  id,
  label,
  type,
  placeholder,
  register,
  error,
  disabled,
}: InputFormFieldProps) => {
  return (
    <div className="w-full">
      <Input
        id={id}
        label={label}
        {...register(id)}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        variant="bordered"
        // isInvalid={!error}
        // errorMessage={error?.message}
        // color={error === undefined?"success":"danger"}
      />
      {error && <p style={{ color: "red" }}>{error?.message}</p>}
    </div>
  );
};

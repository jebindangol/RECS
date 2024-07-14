import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface FormData {
  names: string[];
}

const DynamicForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormData>();
  const [nameFields, setNameFields] = useState<string[]>([]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data.names);
    reset()
  };

  const addNameField = () => {
    setNameFields([...nameFields, ""]);
  };

  const removeNameField = (index: number) => {
    const updatedFields = [...nameFields];
    updatedFields.splice(index, 1);
    setNameFields(updatedFields);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="py-5 px-5 flex flex-col gap-5 justify-center items-center border border-gray-400 rounded-md bg-gray-100">
        <h2 className="font-bold">Dynamic Form</h2>
        {nameFields.map((fieldName, index) => (
          <div key={index} className="flex gap-5">
            <Controller
            
              name={`names[${index}]` as `names.${number}`} 
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="space-x-5">
                  <input {...field} className="border-black outline-none h-[40px] w-[200px] bg-gray-300 pl-2 rounded-sm" />
                  <button type="button" onClick={() => removeNameField(index)} className="text-red-500 text-sm">
                    Remove
                  </button>
                </div>
              )}
            />
          </div>
        ))}
        <button type="button" onClick={addNameField} className="bg-blue-500 text-white px-2 py-2 rounded-md text-sm">
          Add Name Field
        </button>
        <button type="submit" className="px-2 py-2 text-[14px] text-white bg-blue-600 hover:duration-700 rounded-md  hover:scale-110 hover:bg-slate-700 ">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
import { FormBuilder } from "cb-react-forms";
export const FormBuilderFunction=()=>{
    return (
        <div>
          <FormBuilder onSubmit={data => console.log(data)} />
        </div>
      );
}
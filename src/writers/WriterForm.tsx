import { ReferenceManyToManyInput } from "@react-admin/ra-relationships";
import {
  AutocompleteArrayInput,
  CheckboxGroupInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const WriterForm = () => {
  const useCheckboxGroupInput = false;
  const useAutocompleteArrayInput = false;
  const useSelectArrayInput = true;
  return (
    <>
      <TextInput source="name" />
      {useCheckboxGroupInput && (
        <ReferenceManyToManyInput
          source="id"
          reference="posts"
          through="posts_writers"
          using="post_id,writer_id"
        >
          <CheckboxGroupInput
            fullWidth
            label="CheckboxGroupInput"
            optionText="title"
          />
        </ReferenceManyToManyInput>
      )}

      {useAutocompleteArrayInput && (
        <ReferenceManyToManyInput
          source="id"
          reference="posts"
          through="posts_writers"
          using="writer_id,post_id"
        >
          <AutocompleteArrayInput
            label="AutocompleteArrayInput"
            optionText="title"
            fullWidth
          />
        </ReferenceManyToManyInput>
      )}

      {useSelectArrayInput && (
        <ReferenceManyToManyInput
          source="id"
          reference="posts"
          through="posts_writers"
          using="writer_id,post_id"
        >
          <SelectArrayInput
            fullWidth
            optionText="title"
            label="SelectArrayInput"
          />
        </ReferenceManyToManyInput>
      )}
    </>
  );
};

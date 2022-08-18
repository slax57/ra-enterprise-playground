import { ReferenceManyToManyInput } from "@react-admin/ra-relationships";
import {
  AutocompleteArrayInput,
  CheckboxGroupInput,
  ReferenceInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const WriterForm = () => {
  return (
    <>
      <TextInput source="name" />
      {false && (
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

      {false && (
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

      {true && (
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

      {true && (
        <ReferenceInput reference="categories" source="categories">
          <SelectArrayInput optionText="name" />
        </ReferenceInput>
      )}
    </>
  );
};

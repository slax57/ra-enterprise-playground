import { useEffect } from "react";
import {
  Create,
  SimpleForm,
  Toolbar,
  SaveButton,
  TextInput,
  useGetList,
} from "react-admin";
import { useFormContext } from "react-hook-form";

const getNextValue = (key: string) => {
  const parts = key.split("-");
  const numberPart = Number(parts[1]);
  if (isNaN(numberPart)) {
    // We cannot determine a number, so just return an empty input value to use
    console.log("did not increment ¯\\_(ツ)_/¯");
    return "";
  }
  const numberPartNext = (numberPart + 1).toString().padStart(3, "0");
  console.log(
    `incremented! （￣︶￣）↗　 - from: ${numberPart} - to: ${numberPart + 1}`
  );
  return `${parts[0]}-${numberPartNext}`;
};

const PostCreateForm = (props: { defaultValue: string }) => {
  const { defaultValue } = props;
  const { resetField } = useFormContext();
  useEffect(() => {
    resetField("key", { defaultValue });
  }, [defaultValue, resetField]);

  return <TextInput source="key" />;
};

export const PostCreate = () => {
  const { data, total, isLoading, error } = useGetList("posts", {
    pagination: { page: 1, perPage: 1 },
    sort: { field: "key", order: "DESC" },
  });

  if (isLoading || error || !data?.[0]?.key) {
    return null;
  }

  return (
    <Create redirect="list">
      <SimpleForm
        toolbar={
          <Toolbar>
            <SaveButton alwaysEnable />
          </Toolbar>
        }
      >
        <PostCreateForm defaultValue={getNextValue(data[0].key)} />
      </SimpleForm>
    </Create>
  );
};
